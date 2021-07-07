import React from "react";
import { useStateValue } from "../StateProvider";

import "./styles/Product.css";

function Product({ id, title, image, price, rating, brand }) {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        brand: brand,
      },
    });
  };
  return (
    <div className="products_grp">
      <div className="product">
        <div className="product_img">
          <img src={image} alt="" />
        </div>
        <div className="product_info">
          <p className="title">{title}</p>
          <p className="brand">{brand}</p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <button onClick={addToBasket}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
