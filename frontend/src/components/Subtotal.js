import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";

import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
function Subtotal() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button
              disabled={!basket?.length || !user}
              onClick={(e) => history.push("/payments")}
            >
              {user ? "Proceed to Checkout" : "Please login to checkout"}
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Subtotal;
