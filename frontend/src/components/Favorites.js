import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Product from "./Product";
import "./styles/Favorites.css";
function Favorites() {
  const [{ user }] = useStateValue();
  const [data, setData] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("favorites")
        .onSnapshot((snapshot) => {
          setData(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setData([]);
    }
  }, [user]);
  return (
    <div className="fav_grp">
      <h1>Your Favorites</h1>
      <div className="fav_items_grp">
        {data?.map((item) => (
          <Product
            uid={item?.id}
            key={item?.id}
            id={item?.data?.id}
            brand={item?.data?.brand}
            title={item?.data?.title}
            price={item?.data?.price}
            rating={item?.data?.rating}
            image={item?.data?.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
