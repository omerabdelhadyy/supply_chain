import React, { useEffect, useState } from "react";
import { getService } from "../../services/axios";
import CustomizedTables from "../Tabledelivre/tabledelivre";
import style from "./style.module.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
export const CardRequestProfile = (props) => {
  // const [showDetails, setshowDetails] = useState(false);
  const [data, setData] = useState(false);

  // useEffect(() => {
  //   console.log(props?.data?._id);
  //   // getService(`request/data/${props?.data?._id}`)
  //   //   .then((res) => {
  //   //     //   setnumberSelect(res?.data?.data);
  //   //     console.log("res", res?.data);
  //   //     setData(res?.data?.data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log("error", error?.response?.data);
  //   //   });
  // }, [showDetails]);

  const showDetails = () => {
    if (data) {
      setData(false);
    } else {
      console.log(props?.data?._id);
      getService(`request/data/${props?.data?._id}`)
        .then((res) => {
          //   setnumberSelect(res?.data?.data);
          console.log("res", res?.data);
          setData(res?.data?.data);
        })
        .catch((error) => {
          console.log("error", error?.response?.data);
        });
    }
  };
  const submit = () => {
    console.log("da", data);
    getService(`request/private/${props?.data?._id}`, [])
      .then((res) => {
        console.log("res", res?.data);
        confirmAlert({
          title: "private Data",
          message: res?.data?.data,
          buttons: [],
        });
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        confirmAlert({
          title: "private Data",
          message: "not found data private",
          buttons: [],
        });
      });
  };

  return (
    <>
      <div className={style.viewOut}>
        <h1>{new Date(props?.data?.createdAt).toLocaleDateString()}</h1>
        <h1
          style={{
            width: "35%",
            textAlign: "center",
            //   backgroundColor: "red",
          }}
        >
          {props?.data?.providerEmail}
        </h1>
        <h1
          style={{
            width: "20%",
            textAlign: "center",
            //   backgroundColor: "red",
          }}
        >
          {props?.data?.quantity}
        </h1>
        <div style={{ width: "20%" }}>
          {props?.data?.status == "delivering" ? (
            <button
              className={style.buttonOffer}
              onClick={() => showDetails()}
              style={{ width: "100%", fontSize: 11, marginLeft: 5 }}
            >
              View details
            </button>
          ) : (
            <div className={style.divPrivate} onClick={() => submit()}>
              View Private data
            </div>
          )}
        </div>
        <h1
          style={{
            width: "20%",
            //   backgroundColor: "red",
            textAlign: "right",
            color:
              props?.data?.status == "approved"
                ? "green"
                : props?.data?.status == "rejected"
                ? "red"
                : "#000",
          }}
        >
          {props?.data?.status}
        </h1>
      </div>
      {data ? (
        <div className={style.showDetails}>
          <CustomizedTables data={data} width="100%" />
        </div>
      ) : null}
    </>
  );
};
