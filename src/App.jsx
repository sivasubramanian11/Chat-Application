import React from "react";
import { Switch } from "react-router";
import 'rsuite/dist/styles/rsuite-default.css';
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import './styles/main.scss';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/Profile.context";

function App() {
  return (
    <div >
     <ProfileProvider>
      <Switch>
        <PublicRoute path="/signin" >
          <SignIn />
        </PublicRoute>

        <PrivateRoute>
          <Home />
        </PrivateRoute>
      </Switch>
      </ProfileProvider>
    </div>
  );
}

export default App;
