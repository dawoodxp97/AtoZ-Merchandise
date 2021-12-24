import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import Product from "./Product";
import "./styles/CategoryDetails.css";
import ClipLoader from "react-spinners/ClipLoader";

function CategoryDetails() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoading(true);
    db.collection("Categories")
      .doc(type)
      .collection("prod")
      .get()
      .then((snapshot) => {
        setData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        setLoading(false);
      });
    return () => {
      //Cleanup
    };
  }, [type]);

  return (
    <div className="cat_details">
      <h2> {type} Products</h2>
      <div className="products">
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "55vh",
              width: "100%",
              color: "#161d25",
            }}
          >
            <ClipLoader color="#161d25" loading={true} size={30} />
            <p>Loading</p>
          </div>
        ) : (
          <div>
            {" "}
            {data.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "100%",
                  color: "#161d25",
                }}
              >
                <p>No Products found in this Category</p>
              </div>
            ) : (
              ""
            )}{" "}
          </div>
        )}
        {!loading
          ? data.map((item) => (
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
            ))
          : ""}
      </div>
    </div>
  );
}

export default CategoryDetails;
