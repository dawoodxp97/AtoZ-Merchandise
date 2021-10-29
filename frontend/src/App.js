import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import AccountDetails from "./components/AccountDetails";
import SecNav from "./components/SecNav";
import Payments from "./components/Payments";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Favorites from "./components/Favorites";

const promise = loadStripe(
  "pk_test_51ImAEASDaBhYbeNZTOTweoeLdvltbTDvjhQGo1h3dvejzMx1NW1VAtUU30dhmFOa0W32sfMf98MpN70eZdrI62mb00Sp7AGTBZ"
);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/favorites">
            <Header />
            <Favorites />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payments">
            <Header />
            <Elements stripe={promise}>
              <Payments />
            </Elements>
          </Route>
          <Route path="/account">
            <Header />
            <AccountDetails />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <SecNav />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
