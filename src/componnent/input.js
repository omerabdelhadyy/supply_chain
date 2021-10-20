import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import style from "../Pages/supplier/createProduct/style.module.css";

export const InputField = (props) => {
  const [date, setDate] = useState("omer");
  return props?.type == "date" ? (
    <TextField
      type={props?.type}
      label={props?.placeholder}
      style={{ width: props?.width ? props?.width : "80%", marginTop: 20 }}
      onChange={(test) => props?.onChange?.(test.target.value)}
      InputLabelProps={{ shrink: true, required: true }}
    />
  ) : (
    <TextField
      type={props?.type}
      label={props?.placeholder}
      style={{ width: props?.width ? props?.width : "80%", marginTop: 20 }}
      onChange={(test) => props?.onChange?.(test.target.value)}
    />
  );
};
