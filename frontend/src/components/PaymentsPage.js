import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { promise } from "../App";
import Payments from "./Payments";

function PaymentsPage() {
  return (
    <div style={{ height: "95%" }}>
      <Elements stripe={promise}>
        <Payments />
      </Elements>
    </div>
  );
}

export default PaymentsPage;
