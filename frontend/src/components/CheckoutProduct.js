import React, { useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./styles/CheckoutProduct.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  amount,
  hideIncrement,
  uid,
  count,
}) {
  const [{ user }] = useStateValue();
  const notify = (text) => {
    toast.success(`🚀 ${text}... `, { autoClose: 2000 });
  };
  const notifyWarn = (text) => {
    toast.warn(`🚀 ${text}... `, { autoClose: 2000 });
  };
  const basketDocRef = db
    .collection("users")
    .doc(user?.uid)
    .collection("basket")
    .doc(uid);

  const decrementProduct = () => {
    if (user) {
      if (count > 1) {
        basketDocRef.set(
          {
            count: count - 1,
          },
          { merge: true }
        );
        const fAmount = amount - price;
        decrementTotal(fAmount);
      }
    } else {
      notifyWarn("Please login to do that");
    }
  };
  const incrementProduct = () => {
    if (user) {
      basketDocRef.set(
        {
          count: count + 1,
        },
        { merge: true }
      );
      const fAmount = price + count * price;
      incrementTotal(fAmount);
    } else {
      notifyWarn("Please Login to do that");
    }
  };

  const incrementTotal = (fAmount) => {
    if (fAmount > price) {
      basketDocRef.set(
        {
          amount: fAmount,
        },
        { merge: true }
      );
    }
  };
  const decrementTotal = (fAmount) => {
    basketDocRef.set(
      {
        amount: fAmount,
      },
      { merge: true }
    );
  };
  const removeFromBasket = () => {
    basketDocRef
      .delete()
      .then(() => {
        //Item Deleted
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_price">
          <small>₹</small>
          <strong>{price}</strong>
          {count > 1 ? (
            <span>
              {" "}
              <span> x</span>
              <span> {count} items</span>
              <span> =</span>
              <span> ₹{amount}</span>
            </span>
          ) : (
            ""
          )}
        </p>
        {hideIncrement === true ? (
          <div>
            <span>
              {`Quantity : ${amount / price}, Total Amount : ₹${amount}`}{" "}
            </span>
          </div>
        ) : (
          <div className="product_increment_grp">
            <div onClick={decrementProduct} className="product_decrement">
              -
            </div>
            <span className="product_count">{count}</span>
            <div onClick={incrementProduct} className="product_increment">
              +
            </div>
          </div>
        )}

        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        {!hideButton && !hideIncrement ? (
          <button onClick={removeFromBasket}>Remove from Cart</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
