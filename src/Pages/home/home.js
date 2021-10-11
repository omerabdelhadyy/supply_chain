import React, { useEffect, useState, useRef } from "react";
import { Header } from "../../componnent/header/header";
import { SupplierProduct } from "../../componnent/supplierProduct/supplierProduct";
import style from "./style.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ClickAwayListener from "@mui/material/ClickAwayListener";

export const Home = (props) => {
  const [dataa, setDataa] = useState([
    { title: "omer1", number: 200 },
    { title: "omer2", number: 400 },
    { title: "omer3", number: 2500 },
    { title: "omer4", number: 600 },
    { title: "omer5", number: 7700 },
    { title: "omer6", number: 2300 },
    { title: "omer7", number: 2300 },
    { title: "omer8", number: 2100 },
    { title: "omer9", number: 8700 },
    { title: "omer10", number: 20 },
    { title: "omer11", number: 500 },
    { title: "omer12", number: 270 },
  ]);
  const [select, setSelect] = useState(null);
  const [editNumber, seteditNumber] = useState(false);
  return (
    <>
      <Header title="home" history={props?.history} />
      <div className={style.continer} id="fullheight">
        <div className={style.divTitle}>
          <h1>supplier products</h1>
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
      {select && (
        <div className={style.divContent}>
          <h1>{select?.title}</h1>
          <ClickAwayListener onClickAway={() => seteditNumber(false)}>
            <div className={style.EditNumber}>
              {editNumber ? (
                <input
                  autoFocus={true}
                  type="number"
                  // style={{ marginBlock: 20 }}
                  className={style.numberInput}
                  defaultValue={select?.number}
                  // value={select?.number}
                />
              ) : (
                <h1>{select?.number}</h1>
              )}

              <div
                style={{
                  marginLeft: 20,
                  cursor: "pointer",
                  display: "flex",
                  marginBlock: 20,
                }}
                onClick={() => seteditNumber(true)}
              >
                <EditIcon style={{ color: editNumber ? "red" : "#000" }} />
              </div>
            </div>
          </ClickAwayListener>
          <button className={style.clickSend}> button here</button>
        </div>
      )}
    </>
  );
};
