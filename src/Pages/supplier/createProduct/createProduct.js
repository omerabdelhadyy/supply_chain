import style from "./style.module.css";
import React, { useState } from "react";
import { Header } from "../../../componnent/header/header";
import { InputField } from "../../../componnent/input";
import { ButtonMaterial } from "../../../componnent/button";

export const CreateProduct = (props) => {
  return (
    <>
      <Header title="create" history={props?.history} />
      <div className={style.continer}>
        <h1 className={style.title}>Add Product</h1>
        <InputField placeholder="Name" width="40%" />
        <InputField placeholder="Origin" width="40%" />
        <InputField placeholder="Harvest date" width="40%" type="date" />
        <InputField placeholder="Price" width="40%" />
        <InputField placeholder="Quantity" width="40%" />
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            marginTop: 20,
          }}
        >
          <ButtonMaterial text="Create product" />
        </div>
      </div>
    </>
  );
};
