import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Register } from "./Pages/register/register";
import { Login } from "./Pages/login/login";
import { Home } from "./Pages/home/home";
import { CreateProduct } from "./Pages/supplier/createProduct/createProduct";
import { MyProduct } from "./Pages/supplier/myProducts/myProducts";
import { MyRequest } from "./Pages/myRequest/myRequest";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={"/request"} component={MyRequest} />
          <Route path={"/MyProduct"} component={MyProduct} />
          // Start supplier pages
          <Route path={"/Create"} component={CreateProduct} />
          // End supplier pages
          <Route path={"/home"} component={Home} />
          <Route path={"/login"} component={Login} />
          <Route path={"/"} component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
