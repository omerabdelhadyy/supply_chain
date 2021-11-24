import React, { useEffect, useState } from "react";
import style from "../register/style.module.css";
import { ButtonMaterial } from "../../componnent/button";
import { InputField } from "../../componnent/input";
import Cover from "../../assets/image/cover.png";
import { postService } from "../../services/axios";
import { getItem, setItem } from "../../services/storage";
import { useHistory } from "react-router-dom";

export const Login = (props) => {
  const [dataa, setData] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const [errorMessage, seterrorMessage] = useState(false);
  useEffect(async () => {
    if (await getItem?.("userData")?.user) {
      // alert("You can't login if you are logged in!");
      props.history.push("/home");
    }
    // console.log("history", history);
    // browserHistory.replace("Home");
  }, []);

  const sendRequseLogin = () => {
    postService("auth/login", dataa)
      .then((res) => {
        setItem("userData", res?.data?.data);
        console.log("res", res?.data?.data);
        props?.history?.push?.("home");
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        seterrorMessage(
          error?.response?.data?.[0] || error?.response?.data?.message
        );
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
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
              onKeyPress={(e) => {
                if (e?.key === "Enter") {
                  sendRequseLogin?.();
                }
              }}
            >
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
            </form>
            <h2 className={style.textdontHave}>
              I don't have an account
              <span
                onClick={() => props?.history?.push?.("register")}
                className={style.textSignUp}
              >
                sign up
              </span>
            </h2>
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
