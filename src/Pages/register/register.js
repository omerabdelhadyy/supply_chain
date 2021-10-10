import React from "react";
import { ButtonMaterial } from "../../componnent/button";
import { InputField } from "../../componnent/input";
import SelectLabels from "../../componnent/select";
import style from "./style.module.css";
import Cover from "../../assets/image/cover2.png";

export const register = (props) => {
  return (
    <div className={style.continer}>
      <div className={style.leftdiv}>
        <div className={style.divcontent}>
          <div className={style.rightContent}>
            <img
              src={Cover}
              className={style.imageCover}
              style={{ width: "90%", left: "32%", top: -70 }}
            />
          </div>
          <div className={style.leftContent}>
            <h1 style={{ color: "#0A0965", fontSize: 26 }}>Supply chain</h1>
            <h1 className={style.textWelcome}>Join us now</h1>
            <InputField placeholder="user name" />
            <InputField placeholder="Email" />
            <InputField placeholder="password" />
            <div
              style={{
                width: "80%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <SelectLabels />
            </div>
            <div
              style={{
                // marginTop: 10,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonMaterial
                text="Sign up"
                onClick={() => props?.history?.push?.("login")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
