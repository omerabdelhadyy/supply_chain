import React from "react";
import TextField from "@mui/material/TextField";

export const InputField = (props) => {
  return (
    <TextField
      placeholder={props?.placeholder}
      style={{ width: "80%", marginTop: 20 }}
    />
  );
};
