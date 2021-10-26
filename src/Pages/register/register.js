import React, { useEffect, useState } from "react";
import { ButtonMaterial } from "../../componnent/button";
import { InputField } from "../../componnent/input";
import SelectLabels from "../../componnent/select";
import style from "./style.module.css";
import Cover from "../../assets/image/cover2.png";
import { postService } from "../../services/axios";
import { getItem } from "../../services/storage";

export const Register = (props) => {
  const [dataa, setData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });
  const [errorMessage, seterrorMessage] = useState(false);

  useEffect(async () => {
    if (await getItem?.("userData")?.token) {
      props?.history?.push?.("home");
    }
  }, []);

  const sendRequest = () => {
    postService("auth/register", dataa)
      .then((res) => {
        // setItem("userData", res?.data?.data);
        // console.log("res", res?.data?.data);
        props?.history?.push?.("login");
      })
      .catch((error) => {
        console.log(error?.response?.data);
        seterrorMessage(error?.response?.data?.[0]);
      });

    // console.log(dataa);
    // props?.history?.push?.("login")
  };

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
            <h1
              style={{ marginTop: 5, fontSize: 25 }}
              className={style.textWelcome}
            >
              Join us now
            </h1>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
              }}
              onKeyPress={(e) => {
                if (e?.key === "Enter") {
                  sendRequest?.();
                }
              }}
            >
              <InputField
                placeholder="user name"
                onChange={(name) => {
                  setData({ ...dataa, name });
                }}
              />
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
              <div
                style={{
                  width: "80%",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 20,
                }}
              >
                <SelectLabels
                  onChange={(userType) => {
                    // console.log(userType);
                    setData({ ...dataa, userType });
                  }}
                />
              </div>
            </form>
            <h2 className={style.textdontHave}>
              already have an account
              <span
                onClick={() => props?.history?.push?.("login")}
                className={style.textSignUp}
              >
                sign in
              </span>
            </h2>
            {errorMessage && (
              <h2 className={style.errorMessage}>{errorMessage}</h2>
            )}

            <div
              style={{
                // marginTop: 10,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ButtonMaterial text="Sign up" onClick={() => sendRequest()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
