import React, {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import { auth } from "./firebase";
import Checkout from "./Checkout";

function App() {
  
  useEffect(() =>{
    //will only runn once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (

    <Router>
      <div classname="app">
        <Header />
        <Switch>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
