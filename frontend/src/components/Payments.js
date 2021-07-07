import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./styles/Payments.css";
import axios from "../axios";
import { db } from "../firebase";
function Payments() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    // eslint-disable-next-line no-unused-vars
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });
        history.replace("/orders");
      });
  };
  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payments">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link
            to="/checkout"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            {" "}
            {basket?.length} items{" "}
          </Link>
          )
        </h1>
        {/* Delivery Address Section  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Line 1</p>
            <p>Line 1</p>
            <p>Line 1</p>
          </div>
        </div>
        {/* Payment section -- Review Items  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment Section -- Payment Method  */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_price_container">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeperator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payments;
