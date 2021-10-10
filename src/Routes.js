import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { register } from "./Pages/register/register";
import { login } from "./Pages/login/login";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} component={login} />
          <Route path={"/"} component={register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
