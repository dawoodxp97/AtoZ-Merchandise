import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import "./styles/Product.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { db } from "../firebase";

function Product({ id, title, image, price, rating, brand, uid }) {
  const [favData, setFavData] = useState([]);
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();
  useEffect(() => {
    db.collection("users")
      .doc(user?.uid)
      .collection("favorites")
      .onSnapshot((snapshot) => {
        setFavData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    return () => {
      //cleanup
    };
  }, [user?.uid]);

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
  const removeFav = () => {
    console.log("fav removed");
    db.collection("users")
      .doc(user?.uid)
      .collection("favorites")
      .doc(uid)
      .delete()
      .then(() => {
        //deleted
      })
      .catch((err) => console.log(err));
  };
  const addFav = () => {
    db.collection("users")
      .doc(user?.uid)
      .collection("favorites")
      .doc(uid)
      .set(
        {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
          brand: brand,
        },
        { merge: true }
      )
      .then(() => {
        //added
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="products_grp">
      <div className="product">
        <div className="product_img">
          <img src={image} alt="" />
          {favData.some((item) => item?.data?.id === id) ? (
            <p className="fave_icon">
              <FavoriteIcon onClick={removeFav} />
            </p>
          ) : (
            <p className="fave_icon">
              <FavoriteBorderOutlinedIcon onClick={addFav} />
            </p>
          )}
        </div>
        <div className="product_info">
          <p className="title">{title}</p>

          <p className="brand">{brand}</p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
          <p className="product_price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          {basket.some((item) => item.id === id) ? (
            <button
              onClick={() => {
                history.push("/checkout");
              }}
            >
              Go to Cart
            </button>
          ) : (
            <button onClick={addToBasket}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
