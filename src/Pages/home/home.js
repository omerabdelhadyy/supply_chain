import React, { useEffect, useState, useRef } from "react";
import { Header } from "../../componnent/header/header";
import { SupplierProduct } from "../../componnent/supplierProduct/supplierProduct";
import style from "./style.module.css";
import EditIcon from "@mui/icons-material/Edit";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { getItem } from "../../services/storage";
import { getService } from "../../services/axios";
import { CardSellers } from "../../componnent/cardSellers/cardSellers";
import CustomizedTables from "../../componnent/Tabledelivre/tabledelivre";

export const Home = (props) => {
  const [dataa, setDataa] = useState([]);
  const [select, setSelect] = useState(null);
  const [editNumber, seteditNumber] = useState(false);
  const [numberSelect, setnumberSelect] = useState(false);
  const [User, setUser] = useState("");

  useEffect(async () => {
    setUser(await getItem?.("userData")?.user);
    // console.log(User?.userType);
    if ((await getItem?.("userData")?.user?.userType) == "transporter") {
      getService("request/transport", [])
        .then((res) => {
          console.log("transport", res?.data?.data);
          // setDataa(res?.data?.data);
          setDataa(res?.data?.data);
        })
        .catch((error) => {
          console.log("errortransport", error?.response?.data);
        });
    } else {
      getService("product", [])
        .then((res) => {
          console.log("reshome", res?.data?.data);
          setDataa(res?.data?.data);
        })
        .catch((error) => {
          console.log("errorhome", error?.response?.data);
        });
    }
  }, []);

  const sedRequest = () => {};

  useEffect(async () => {
    setnumberSelect(false);
    User?.userType != "transporter"
      ? getService(`product/sellers/${select?._id}`)
          .then((res) => {
            if (res?.data?.data.length) {
              setnumberSelect(res?.data?.data);
            } else {
              setnumberSelect("showError");
            }
            console.log("res", res?.data?.data);
            // setDataa(res?.data?.data);
          })
          .catch((error) => {
            console.log("error", error?.response?.data);
          })
      : showDetails(select?._id);
  }, [select]);

  const showDetails = (id) => {
    getService(`request/data/${id}`)
      .then((res) => {
        setnumberSelect(res?.data?.data);
        console.log("res", res?.data);
        // setDataa(res?.data?.data);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
    // console.log("iit", select);
  };

  return (
    <>
      <Header title="home" history={props?.history} />
      {dataa.length ? (
        <div className={style.continer} id="fullheight">
          <div className={style.divTitle}>
            <h1>
              {User?.userType == "transporter"
                ? "Requests not sent"
                : "All products"}{" "}
            </h1>
            <div className={style.line} />
          </div>
          <div style={{ width: "100%", overflow: "auto" }}>
            {dataa.map((item, index) => {
              return (
                <SupplierProduct
                  select={select}
                  type={User?.userType}
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
            {select?.status == "delivering" ? (
              <>
                <h1 className={style.details} style={{ fontSize: 17 }}>
                  <span style={{ fontWeight: "bold" }}>providerEmail : </span>
                  {select?.providerEmail}
                </h1>
                <h1 className={style.details} style={{ fontSize: 17 }}>
                  <span style={{ fontWeight: "bold" }}>requesterEmail :</span>
                  {select?.requesterEmail}
                </h1>
                <h1 className={style.details} style={{ fontSize: 17 }}>
                  <span style={{ fontWeight: "bold" }}>quantity :</span>
                  {select?.quantity}
                </h1>
                <h1 className={style.details} style={{ fontSize: 17 }}>
                  <span style={{ fontWeight: "bold" }}>date :</span>
                  {new Date(select.createdAt).toString().substring(0, 21)}
                </h1>
              </>
            ) : (
              <h1 className={style.title}>{select?.name}</h1>
            )}

            {select?.status != "delivering" ? (
              numberSelect != "showError" ? (
                numberSelect?.map?.((item, index) => {
                  return (
                    <CardSellers data={item} index={index + 1} key={index} />
                  );
                })
              ) : User?.userType == "retailer" ? (
                <h1>This product is currently available</h1>
              ) : null
            ) : numberSelect.length ? (
              <CustomizedTables data={numberSelect} width="80%" />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};
