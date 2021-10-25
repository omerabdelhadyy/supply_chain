import React from "react";
import style from "./style.module.css";

export const SupplierProduct = (props) => {
  return (
    <div className={style.continer}>
      <h1 style={{ fontSize: 15, width: "45%" }}>{props.data?.name}</h1>
      <h1 style={{ fontSize: 21 }}>{props.data?.price} $</h1>
      <button className={style.buttonOffer} onClick={props.onClick}>
        View sellers
      </button>
    </div>
  );
};
