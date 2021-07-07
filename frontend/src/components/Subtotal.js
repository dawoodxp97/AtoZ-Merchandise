import React from "react";
import "./styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";

import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
function Subtotal() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
            <button onClick={(e) => history.push("/payments")}>
              Proceed to Checkout
            </button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
}

export default Subtotal;
