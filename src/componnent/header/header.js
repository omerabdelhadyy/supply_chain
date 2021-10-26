import { Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { getItem, removeItem } from "../../services/storage";
import style from "./style.module.css";
import { useHistory } from "react-router";

export const Header = (props) => {
  const [User, setUser] = useState("");
  const history = useHistory();
  useEffect(async () => {
    // console.log(await getItem("userData"));
    setUser(await getItem?.("userData")?.user);
  }, []);

  const Logout = async () => {
    await removeItem("userData");
    history.replace({ pathname: "/Login" });
    // history. = 0;
    // props?.history?.push?.("Login");
  };

  return (
    <div className={style.continer}>
      <h1
        className={style.title}
        onClick={() => props?.history?.push?.("home")}
      >
        Supply Chain
        <span style={{ fontSize: 15, color: "#9592A3" }}>
          {`\r`} ( {User?.userType} )
        </span>
      </h1>
      <div className={style.headerScreen}>
        <h1
          style={{ color: props.title == "home" ? "#9592A3" : null }}
          onClick={() => props?.history?.push?.("home")}
        >
          Home
        </h1>
        <h1
          onClick={() => props?.history?.push?.("MyProduct")}
          style={{ color: props.title == "MyProduct" ? "#9592A3" : null }}
        >
          My products
        </h1>
        <h1
          onClick={() => props?.history?.push?.("request")}
          style={{ color: props.title == "request" ? "#9592A3" : null }}
        >
          Product request
        </h1>
        {User?.userType == "supplier" && (
          <h1
            style={{ color: props.title == "create" ? "#9592A3" : null }}
            onClick={() => props?.history?.push?.("Create")}
          >
            Create product
          </h1>
        )}
        {User?.name && (
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2>
              Welcome : <span>{User?.name}</span>
            </h2>
            <h1 onClick={() => Logout()} style={{ color: "red" }}>
              Log out
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};
