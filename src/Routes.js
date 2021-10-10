import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { register } from "./Pages/register/register";
import { login } from "./Pages/login/login";
import { home } from "./Pages/home/home";
import { CreateProduct } from "./Pages/supplier/createProduct/createProduct";
import { MyProduct } from "./Pages/supplier/myProducts/myProducts";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/MyProduct"} component={MyProduct} />
          <Route path={"/Create"} component={CreateProduct} />
          <Route path={"/home"} component={home} />
          <Route path={"/login"} component={login} />
          <Route path={"/"} component={register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
