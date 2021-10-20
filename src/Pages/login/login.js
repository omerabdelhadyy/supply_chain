import React, { useState } from "react";
import style from "../register/style.module.css";
import { ButtonMaterial } from "../../componnent/button";
import { InputField } from "../../componnent/input";
import Cover from "../../assets/image/cover.png";
import { postService } from "../../services/axios";
import { setItem } from "../../services/storage";

export const Login = (props) => {
  const [dataa, setData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, seterrorMessage] = useState(false);

  const sendRequseLogin = () => {
    postService("auth/login", dataa)
      .then((res) => {
        setItem("userData", res?.data?.data);
        console.log("res", res?.data?.data);
        props?.history?.push?.("home");
      })
      .catch((error) => {
        console.log(error?.response?.data);
        seterrorMessage(error?.response?.data.message);
      });
  };

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
            <InputField
              placeholder="Email"
              onChange={(email) => {
                setData({ ...dataa, email });
              }}
            />
            <InputField
              type="password"
              placeholder="password"
              onChange={(password) => {
                setData({ ...dataa, password });
              }}
            />
            {errorMessage && (
              <h2 className={style.errorMessage}>{errorMessage}</h2>
            )}
            <div
              style={{
                marginTop: 15,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonMaterial text="LOGIN" onClick={() => sendRequseLogin()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
