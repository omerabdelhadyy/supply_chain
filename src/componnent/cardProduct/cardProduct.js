import React, { useState } from "react";
import style from "./style.module.css";
import TextField from "@mui/material/TextField";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import EditIcon from "@mui/icons-material/Edit";

export const CardProduct = () => {
  const [edit, setEdit] = useState(false);
  const onClickAway = () => {
    setEdit(false);
  };
  return (
    <div className={style.continer}>
      {/* <h1></h1> */}
      <h1>1- CardProduct</h1>
      {edit ? (
        <ClickAwayListener onClickAway={onClickAway}>
          <input
            autoFocus={true}
            min={200}
            defaultValue={200}
            type="number"
            style={{}}
            className={style.inputEdit}
          />
        </ClickAwayListener>
      ) : (
        <h1 className={style.quantity}>200</h1>
      )}
      {/* <h1
        className={style.edit}
        style={{ fontSize: 12 }}
        onClick={() => setEdit(!edit)}
      >
        edit
      </h1> */}
      <div onClick={() => setEdit(true)} style={{ cursor: "pointer" }}>
        <EditIcon style={{ color: edit ? "red" : "#000" }} />
      </div>
    </div>
  );
};
