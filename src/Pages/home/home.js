import React from "react";
import { Header } from "../../componnent/header/header";
import style from "./style.module.css";

export const home = (props) => {
  return (
    <div>
      <Header title="home" history={props?.history} />
    </div>
  );
};
