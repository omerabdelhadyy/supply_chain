import React, { useEffect, useState } from "react";
import { CardRequest } from "../../componnent/cardRequest/cardRequest";
import { Header } from "../../componnent/header/header";
import { getService } from "../../services/axios";
import style from "./style.module.css";

export const MyRequest = (props) => {
  const [data, setData] = useState(false);
  const [deliv, setdeliv] = useState(false);
  useEffect(() => {
    getService("request/incoming/pending")
      .then((res) => {
        console.log("res", res?.data);
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
    getService("user/transporter", [])
      .then((res) => {
        console.log("restransporter", res?.data);
        setdeliv(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
  }, []);
  return (
    <>
      <Header title="request" history={props?.history} />
      <div className={style.continer}>
        <h1>Product request</h1>
        {data?.length != 0 ? (
          <div className={style.divRequest}>
            {data?.map?.((item, index) => {
              return <CardRequest data={item} index={index} deliv={deliv} />;
            })}
          </div>
        ) : (
          <h1 style={{ fontSize: 18, marginTop: "3%" }}>not found request</h1>
        )}
      </div>
    </>
  );
};
