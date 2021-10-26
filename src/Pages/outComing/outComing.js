import React, { useEffect, useState } from "react";
import { Header } from "../../componnent/header/header";
import { getService } from "../../services/axios";
import style from "./style.module.css";

export const Outcoming = (props) => {
  const [data, setData] = useState(false);
  useEffect(() => {
    getService("request/outgoing")
      .then((res) => {
        console.log("res", res?.data);
        res?.data?.data?.sort?.((a, b) =>
          a?.createdAt < b?.createdAt ? 1 : b?.createdAt < a?.createdAt ? -1 : 0
        );
        setData(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
  }, []);
  return (
    <>
      <Header title="MyProduct" history={props?.history} />
      <div className={style.continer}>
        <h1>My request</h1>
        {data?.map?.((item, index) => {
          return (
            <div className={style.viewOut} key={index}>
              <h1>{new Date(item?.createdAt).toLocaleDateString()}</h1>
              <h1
                style={{
                  width: "35%",
                  textAlign: "center",
                  //   backgroundColor: "red",
                }}
              >
                {item?.providerEmail}
              </h1>
              <h1
                style={{
                  width: "20%",
                  textAlign: "center",
                  //   backgroundColor: "red",
                }}
              >
                {item?.quantity}
              </h1>
              <h1
                style={{
                  width: "20%",
                  //   backgroundColor: "red",
                  textAlign: "right",
                  color:
                    item?.status == "approved"
                      ? "green"
                      : item?.status == "rejected"
                      ? "red"
                      : "#000",
                }}
              >
                {item?.status}
              </h1>
            </div>
          );
        })}
      </div>
    </>
  );
};
