import React, { useEffect, useState } from "react";
import style from "./style.module.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { getService, putService } from "../../services/axios";
import image from "../../assets/image/delivery-truck.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { CardDelivryAvailable } from "../cardDelivryAvailable/cardDelivryAvailable";
import { getItem } from "../../services/storage";

export const CardRequest = (props) => {
  const [deliv, setdeliv] = useState([]);
  const [showAvailableDeliv, setShowAvailableDeliv] = useState(false);
  const [finishRequest, setfinishRequest] = useState(false);
  const { data, index } = props;
  const [userType, setUser] = useState("");

  useEffect(async () => {
    setUser(await getItem?.("userData")?.user?.userType);
  }, []);
  const onClickAccept = () => {
    setShowAvailableDeliv(false);
    setfinishRequest("waiting");
    putService(`request/accept/${data?._id}`)
      .then((res) => {
        console.log("res", res?.data);
        setfinishRequest("Accepted");
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        setfinishRequest("rejected");
      });
  };

  const onClickReject = () => {
    setShowAvailableDeliv(false);
    setfinishRequest("waiting");
    putService(`request/reject/${data?._id}`)
      .then((res) => {
        console.log("res", res?.data);
        setfinishRequest("rejected");
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
        setfinishRequest("rejected");
      });
  };
  const submit = (Private) => {
    if (Private) {
      console.log("data", data);
      getService(`request/private/${data?._id}`, [])
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
    } else {
      confirmAlert({
        title: "take care",
        message:
          "The product will be sent to the retailer without shipping The balance will be transferred directly to him.",
        buttons: [
          {
            label: "Yes",
            onClick: () => onClickAccept(),
          },
          {
            label: "No",
            onClick: () => null,
          },
        ],
      });
    }
  };

  const delivRequest = () => {
    console.log("pp", deliv?.email || props?.deliv?.[0]?.email);
    putService(`request/transport/${props?.data?._id}`, {
      email: deliv?.email || props?.deliv?.[0]?.email,
    })
      .then((res) => {
        console.log("res", res?.data);
        setfinishRequest(res?.data?.data?.Record?.status);
        setShowAvailableDeliv(false);
      })
      .catch((error) => {
        console.log("error", error?.response?.data);
      });
  };
  return (
    <>
      <div className={style.continer}>
        <h1>{data?.requesterEmail}</h1>
        <h1>{data?.quantity}</h1>
        <div className={style.divPrivate} onClick={() => submit("Private")}>
          View Private data
        </div>
        <div
          className={style.button}
          style={{ width: finishRequest ? "20%" : null }}
        >
          {finishRequest ? (
            <>
              <h1
                style={{
                  color:
                    finishRequest == "Accepted"
                      ? "green"
                      : finishRequest == "rejected"
                      ? "red"
                      : "#000",
                }}
              >
                {finishRequest}
              </h1>
            </>
          ) : (
            <>
              <div style={{ display: "flex" }}>
                <button
                  className={style.buttonAccept}
                  onClick={userType == "retiler" ? submit : onClickAccept}
                >
                  <CheckIcon style={{ fontSize: 27 }} />
                </button>
                <button className={style.buttonReject} onClick={onClickReject}>
                  <CloseIcon />
                </button>
                {userType == "retiler" && (
                  <button
                    className={style.buttondeliv}
                    onClick={() => setShowAvailableDeliv(!showAvailableDeliv)}
                  >
                    <img src={image} style={{ width: 30, height: 30 }} />
                  </button>
                )}
              </div>
              {/* <h1>omer</h1> */}
            </>
          )}
        </div>
      </div>

      {showAvailableDeliv && (
        <>
          <h1 className={style.titleAvilable}>Available shipping companies</h1>
          <div className={style.delivAvilable}>
            {props?.deliv.map?.((item, index) => {
              // console.log("iitem", item);
              return (
                <CardDelivryAvailable
                  key={index}
                  data={item}
                  deliv={deliv}
                  changeCheckBok={(data) => setdeliv(data)}
                />
              );
            })}
            <button
              className={style.buttonOffer}
              onClick={() => delivRequest()}
            >
              Send the product to shipping
            </button>
          </div>
        </>
      )}
    </>
  );
};
