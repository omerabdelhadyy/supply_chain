import axios from "axios";
import { getItem } from "./storage";

export const post = async (url, requestData) => {
  const userData = await getItem("userData");

  // console.log("ddd", userData?.token);
  return axios.post(`http://35.172.137.48:3000/${url}`, requestData, {
    headers: { Authorization: userData?.token },
  });
};
export const get = async (url, requestData) => {
  const userData = await getItem("userData");
  return axios.get(
    `http://35.172.137.48:3000/${url}`,
    { headers: { Authorization: userData?.token } },
    requestData
  );
};

// export const sendMessage = async (requestData, url) => {
//   return axios.post(
//     `https://s9fjxnb6te.execute-api.us-east-1.amazonaws.com/dev/${url}`,
//     requestData,
//     { headers: { token_header: userData?.token } }
//   );
// };
