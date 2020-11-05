import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Payment from "./Payment";
import { auth } from "./firebase";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HkCvdAwO5k8JQnLE9WDltzt2llC95ahse7ZXdyK4ey5fFQrCNWV5T03ikfat24WHliXzY2RzgAnDFlu049kcSzA00XkoMYN2p"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only runn once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/checkout">
             <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
             <Header />
             <Elements stripe={promise}>
               <Payment />
             </Elements>
          </Route>
          <Route path="/">
             <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
