import React from "react";
import { CardProduct } from "../../../componnent/cardProduct/cardProduct";
import { Header } from "../../../componnent/header/header";
import style from "./style.module.css";

export const MyProduct = (props) => {
  return (
    <>
      <Header title="MyProduct" history={props?.history} />
      <div className={style.continer}>
        <h1>My Product</h1>
        <div className={style.divCards}>
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
    </>
  );
};
