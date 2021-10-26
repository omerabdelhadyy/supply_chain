import React, { useEffect, useState } from "react";
import { CardProduct } from "../../../componnent/cardProduct/cardProduct";
import { Header } from "../../../componnent/header/header";
import { getService } from "../../../services/axios";
import style from "./style.module.css";

export const MyProduct = (props) => {
  const [data, setData] = useState(false);

  useEffect(() => {
    getService("product/owned")
      .then((res) => {
        console.log("res", res?.data);
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
        <h1>My Product</h1>
        {data?.length != 0 ? (
          <div className={style.divCards}>
            {data?.map?.((item, index) => {
              return <CardProduct key={index} data={item} index={index + 1} />;
            })}
          </div>
        ) : (
          <h1 style={{ fontSize: 18, marginTop: "3%" }}>not found product</h1>
        )}
      </div>
    </>
  );
};
