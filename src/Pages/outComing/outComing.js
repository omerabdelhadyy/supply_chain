import React, { useEffect, useState } from "react";
import { Header } from "../../componnent/header/header";
import { getService } from "../../services/axios";
import style from "../../componnent/My request/style.module.css";
import {
  Card,
  CardRequestProfile,
} from "../../componnent/My request/myRequest";

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
          return <CardRequestProfile data={item} key={index} />;
        })}
      </div>
    </>
  );
};
