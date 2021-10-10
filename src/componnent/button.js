import React from "react";
import Button from "@mui/material/Button";

export const ButtonMaterial = (props) => {
  return (
    <Button
      style={{
        width: "40%",
        height: 40,
        backgroundColor: "#0A0964",
        color: "#fff",
      }}
      onClick={props.onClick}
    >
      {props?.text}
    </Button>
  );
};
