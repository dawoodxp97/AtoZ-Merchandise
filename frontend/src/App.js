import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Checkout from "./components/Checkout";
import AccountDetails from "./components/AccountDetails";
import Payments from "./components/Payments";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders";
import Favorites from "./components/Favorites";
import Layout from "./components/Layout";
import MainPage from "./components/MainPage";
import CategoryDetails from "./components/CategoryDetails";
import PaymentsPage from "./components/PaymentsPage";

export const promise = loadStripe(
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
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
          <Layout>
            <Route exact path="/" component={MainPage} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/orders" component={Orders} />
            <Route path="/account" component={AccountDetails} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/detail/:type" component={CategoryDetails} />
            <Route path="/payments" component={PaymentsPage} />
          </Layout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
