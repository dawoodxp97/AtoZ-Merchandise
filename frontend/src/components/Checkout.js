import React from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./styles/Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <div>
          <h3>Hello, {user?.displayName}</h3>
          <h2 className="checkout_title">Your Shopping Cart:</h2>
          {!basket.length ? (
            <h4>No Items in Cart</h4>
          ) : (
            <div className="basket_items">
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  amount={item.amount}
                  uid={item.uid}
                  count={item.count}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
