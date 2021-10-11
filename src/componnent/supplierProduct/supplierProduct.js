import React from "react";
import style from "./style.module.css";

export const SupplierProduct = (props) => {
  return (
    <div className={style.continer}>
      <h1>{props.data?.title} </h1>
      <h1>{props.data?.number}</h1>
      <button className={style.buttonOffer} onClick={props.onClick}>
        request
      </button>
    </div>
  );
};
