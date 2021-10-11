import React from "react";
import style from "./style.module.css";

export const Header = (props) => {
  return (
    <div className={style.continer}>
      <h1
        className={style.title}
        onClick={() => props?.history?.push?.("home")}
      >
        Supply Chain
        <span style={{ fontSize: 15, color: "#9592A3" }}> (supplier)</span>
      </h1>
      <div className={style.headerScreen}>
        <h1
          style={{ color: props.title == "home" ? "#9592A3" : null }}
          onClick={() => props?.history?.push?.("home")}
        >
          Home
        </h1>
        <h1
          onClick={() => props?.history?.push?.("MyProduct")}
          style={{ color: props.title == "MyProduct" ? "#9592A3" : null }}
        >
          My products
        </h1>
        <h1
          onClick={() => props?.history?.push?.("request")}
          style={{ color: props.title == "request" ? "#9592A3" : null }}
        >
          Product request
        </h1>
        <h1
          style={{ color: props.title == "create" ? "#9592A3" : null }}
          onClick={() => props?.history?.push?.("Create")}
        >
          Create product
        </h1>
      </div>
    </div>
  );
};
