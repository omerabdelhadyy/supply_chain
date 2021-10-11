import React from "react";
import { CardRequest } from "../../componnent/cardRequest/cardRequest";
import { Header } from "../../componnent/header/header";
import style from "./style.module.css";

export const MyRequest = (props) => {
  return (
    <>
      <Header title="request" history={props?.history} />
      <div className={style.continer}>
        <h1>my Request</h1>
        <div className={style.divRequest}>
          <CardRequest onClickAccept onClickReject />
          <CardRequest />
          <CardRequest />
        </div>
      </div>
    </>
  );
};
