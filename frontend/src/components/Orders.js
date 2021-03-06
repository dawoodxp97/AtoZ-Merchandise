import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import Order from "./Order";
import "./styles/Orders.css";
function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders.length === 0 ? <h4>No Orders yet</h4> : ""}
        {orders?.map((order) => (
          <Order key={order?.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
