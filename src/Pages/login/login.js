import React from "react";
import style from "../register/style.module.css";
import { ButtonMaterial } from "../../componnent/button";
import { InputField } from "../../componnent/input";
import Cover from "../../assets/image/cover.png";

export const login = (props) => {
  return (
    <div className={style.continer}>
      <div className={style.leftdiv}>
        <div className={style.divcontent}>
          <div className={style.rightContent}>
            <img src={Cover} className={style.imageCover} />
          </div>
          <div className={style.leftContent}>
            <h1 style={{ color: "#0A0965", fontSize: 26, marginTop: -40 }}>
              Supply chain
            </h1>
            <h1 className={style.textWelcome}>Welcome back</h1>
            <InputField placeholder="Email" />
            <InputField placeholder="password" />
            <div
              style={{
                marginTop: 15,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonMaterial
                text="LOGIN"
                onClick={() => props?.history?.push?.("login")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
