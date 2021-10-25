import React, { useState } from "react";
import style from "./style.module.css";
import { postService } from "../../services/axios";
import Loader from "react-loader-spinner";

export const CardSellers = (props) => {
  const { data, index } = props;
  const [balance, setbalance] = useState(false);
  const [loading, setloading] = useState(false);

  const sendRequest = () => {
    setloading(true);
    let body = {
      productID: data?._id,
      providerEmail: data?.seller,
      quantity: Number(balance) || data?.balance,
    };
    console.log(body);
    postService("request", body)
      .then((res) => {
        console.log("res", res?.data);
        setloading(false);
      })
      .catch((error) => {
        console.log("error", error);
        setloading(false);
      });
  };

  return (
    <div className={style.continer}>
      <h1 style={{ fontSize: 17 }}>
        {index}- {data?.seller}
      </h1>
      <h1 style={{ marginInline: 50, fontSize: 22 }}>{data?.price} $</h1>
      <input
        autoFocus={true}
        type="number"
        max={data?.balance}
        min={0}
        className={style.numberInput}
        defaultValue={data?.balance}
        onChange={(text) => setbalance(text?.target.value)}
      />
      {/* <h1>{data?.balance}</h1> */}
      {/* <div style={{ cursor: "pointer" }}>
        <EditIcon style={{ color: "green", fontSize: 18, marginLeft: 5 }} />
      </div> */}
      <button
        disabled={loading}
        className={style.clickSend}
        onClick={() => sendRequest()}
      >
        {loading ? (
          <Loader type="TailSpin" color="#fff" height={15} width={15} />
        ) : (
          "Send request"
        )}
      </button>
    </div>
  );
};
