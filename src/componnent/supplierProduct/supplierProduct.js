import React, { useEffect, useState } from "react";
import { getItem } from "../../services/storage";
import style from "./style.module.css";

export const SupplierProduct = (props) => {
  const [userType, setUserType] = useState("");
  useEffect(async () => {
    setUserType(await getItem?.("userData")?.user?.userType);
    // console.log(await getItem?.("userData")?.user?.userType);
  }, []);
  return (
    <div className={style.continer}>
      <h1 style={{ fontSize: 15, width: "45%" }}>{props.data?.name}</h1>
      <h1 style={{ fontSize: 21 }}>{props.data?.price} $</h1>
      {userType != "supplier" ? (
        <button className={style.buttonOffer} onClick={props.onClick}>
          View sellers
        </button>
      ) : null}
    </div>
  );
};
