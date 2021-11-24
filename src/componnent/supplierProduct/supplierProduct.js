import React, { useEffect, useState } from "react";
import { getItem } from "../../services/storage";
import style from "./style.module.css";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export const SupplierProduct = (props) => {
  const [userType, setUserType] = useState("");
  useEffect(async () => {
    setUserType(await getItem?.("userData")?.user?.userType);
    // console.log(await getItem?.("userData")?.user?.userType);
    console.log("type", props?.type);
  }, []);
  return (
    <div
      className={style.continer}
      style={{
        backgroundColor: props?.data?._id == props?.select?._id ? "#888" : null,
      }}
    >
      {props?.type == "transporter" ? (
        <>
          <h1 style={{ fontSize: 15, maxWidth: "45%" }}>
            {props?.data?.providerEmail}
          </h1>
          <ArrowRightAltIcon
            style={{ marginTop: 5, color: "green", fontSize: 25 }}
          />
          <h1 style={{ fontSize: 15, width: "45%" }}>
            {props?.data?.providerEmail}
          </h1>
          {/* <h1 style={{ fontSize: 20 }}>{props?.data?.quantity}</h1> */}
          <button
            className={style.buttonOffer}
            onClick={props.onClick}
            style={{ width: "30%", fontSize: 11, marginLeft: 5 }}
          >
            View details
          </button>
        </>
      ) : (
        <>
          <h1 style={{ fontSize: 15, width: "45%" }}>{props.data?.name}</h1>
          <h1 style={{ fontSize: 21 }}>{props.data?.price} $</h1>
          {userType != "supplier" ? (
            <button className={style.buttonOffer} onClick={props.onClick}>
              View sellers
            </button>
          ) : null}
        </>
      )}
    </div>
  );
};
