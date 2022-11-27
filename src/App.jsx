import React from "react";
import { Switch } from "react-router";
import 'rsuite/dist/styles/rsuite-default.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import './styles/main.scss';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <div >

      <Switch>

        <PublicRoute path="/signin" >
          <SignIn />
        </PublicRoute>

        <PrivateRoute>
          <Home />
        </PrivateRoute>

      </Switch>
    </div>
  );
}

export default App;
