import React from "react";
import style from "./style.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export const CardRequest = (props) => {
  return (
    <div className={style.continer}>
      <h1>my Request</h1>
      <h1>250</h1>
      <div className={style.button}>
        <button className={style.buttonAccept} onClick={props.onClickAccept}>
          <CheckIcon style={{ fontSize: 27 }} />
        </button>
        <button className={style.buttonReject} onClick={props.onClickReject}>
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};
