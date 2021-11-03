import React, { useState } from "react";
import style from "./style.module.css";
import TextField from "@mui/material/TextField";
import { putService } from "../../services/axios";

export const CardDelivryAvailable = (props) => {
  const [edit, setEdit] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={style.continer}>
        <h1>{props?.data?.email}</h1>
        <input
          checked={props?.deliv?.id == props?.data?.id}
          type="checkbox"
          onChange={() => props.changeCheckBok(props?.data)}
          style={{ width: 20, height: 40 }}
          defaultChecked={true}
        />
      </div>
    </div>
  );
};
