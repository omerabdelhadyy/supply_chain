import style from "./style.module.css";
import React, { useState } from "react";
import { Header } from "../../../componnent/header/header";
import { InputField } from "../../../componnent/input";
import { ButtonMaterial } from "../../../componnent/button";
import { postService } from "../../../services/axios";

export const CreateProduct = (props) => {
  const [dataa, setData] = useState({
    name: "",
    quantity: 0,
    origin: "",
    harvestDate: "",
    price: 0,
  });
  const [errorMessage, seterrorMessage] = useState(false);

  const CreateProduct = () => {
    seterrorMessage(false);
    postService("product", dataa)
      .then((res) => {
        console.log("res", res?.data?.data);
        seterrorMessage("It was successfully added.");
      })
      .catch((error) => {
        console.log(error?.response?.data?.[0]);
        seterrorMessage("Invalid data");
        // seterrorMessage(error?.response?.data.message);
      });
    console.log(dataa);
  };

  return (
    <>
      <Header title="create" history={props?.history} />
      <div className={style.continer}>
        <h1 className={style.title}>Add Product</h1>
        <InputField
          placeholder="Name"
          width="40%"
          onChange={(name) => {
            setData({ ...dataa, name });
          }}
        />
        <InputField
          placeholder="Origin"
          width="40%"
          onChange={(origin) => {
            setData({ ...dataa, origin });
          }}
        />
        <InputField
          placeholder="Harvest date"
          width="40%"
          type="date"
          onChange={(harvestDate) => {
            setData({ ...dataa, harvestDate });
          }}
        />
        <InputField
          type="number"
          placeholder="Price"
          width="40%"
          onChange={(price) => {
            setData({ ...dataa, price: Number(price) });
          }}
        />
        <InputField
          placeholder="Quantity"
          width="40%"
          onChange={(quantity) => {
            setData({ ...dataa, quantity: Number(quantity) });
          }}
        />
        {errorMessage && (
          <h2
            style={{
              color: errorMessage.includes("success") ? "green" : "red",
            }}
            className={style.errorMessage}
          >
            {errorMessage}
          </h2>
        )}
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            marginTop: 20,
          }}
        >
          <ButtonMaterial
            text="Create product"
            onClick={() => CreateProduct()}
          />
        </div>
      </div>
    </>
  );
};
