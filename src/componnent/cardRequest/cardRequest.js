import React, { useState } from "react";
import style from "./style.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { putService } from "../../services/axios";

export const CardRequest = (props) => {
  const [finishRequest, setfinishRequest] = useState(false);
  const { data, index } = props;
  const onClickAccept = () => {
    setfinishRequest("waiting");
    putService(`request/accept/${data?._id}`)
      .then((res) => {
        console.log("res", res?.data);
        setfinishRequest("Accepted");
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        setfinishRequest("rejected");
      });
  };

  const onClickReject = () => {
    setfinishRequest("waiting");
    putService(`request/reject/${data?._id}`)
      .then((res) => {
        console.log("res", res?.data);
        setfinishRequest("rejected");
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        setfinishRequest("rejected");
      });
  };

  return (
    <div className={style.continer}>
      <h1>{data?.requesterEmail}</h1>
      <h1>{data?.quantity}</h1>
      <div
        className={style.button}
        style={{ width: finishRequest ? "20%" : null }}
      >
        {finishRequest ? (
          <h1
            style={{
              color:
                finishRequest == "Accepted"
                  ? "green"
                  : finishRequest == "rejected"
                  ? "red"
                  : "#000",
            }}
          >
            {finishRequest}
          </h1>
        ) : (
          <>
            <button className={style.buttonAccept} onClick={onClickAccept}>
              <CheckIcon style={{ fontSize: 27 }} />
            </button>
            <button className={style.buttonReject} onClick={onClickReject}>
              <CloseIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
