import React, { useEffect, useState, useRef } from "react";
import { Header } from "../../componnent/header/header";
import { SupplierProduct } from "../../componnent/supplierProduct/supplierProduct";
import style from "./style.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { getItem } from "../../services/storage";
import { getService } from "../../services/axios";
import { CardSellers } from "../../componnent/cardSellers/cardSellers";

export const Home = (props) => {
  const [dataa, setDataa] = useState([]);
  const [select, setSelect] = useState(null);
  const [editNumber, seteditNumber] = useState(false);
  const [numberSelect, setnumberSelect] = useState(false);
  useEffect(() => {
    getService("product", [])
      .then((res) => {
        // console.log("res", res?.data?.data);
        setDataa(res?.data?.data);
      })
      .catch((error) => {
        // console.log("error", error?.response?.data);
      });
  }, []);
  useEffect(async () => {
    setnumberSelect(false);
    console.log(select?._id);
    getService(`product/sellers/${select?._id}`)
      .then((res) => {
        setnumberSelect(res?.data?.data);
        console.log("res", res?.data?.data);
        // setDataa(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
  }, [select]);

  return (
    <>
      <Header title="home" history={props?.history} />
      {dataa.length ? (
        <div className={style.continer} id="fullheight">
          <div className={style.divTitle}>
            <h1>All products</h1>
            <div className={style.line} />
          </div>
          <div style={{ width: "100%", overflow: "auto" }}>
            {dataa.map((item, index) => {
              return (
                <SupplierProduct
                  key={index}
                  data={item}
                  onClick={() => setSelect(item)}
                />
              );
            })}
          </div>
        </div>
      ) : null}
      {select && (
        <div className={style.divContent}>
          {/* <h1>{select?.title}</h1> */}
          <div className={style.EditNumber}>
            <h1 className={style.title}>{select?.name}</h1>
            {numberSelect?.map?.((item, index) => {
              return <CardSellers data={item} index={index + 1} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};
