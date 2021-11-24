import axios from "axios";
import { getItem } from "./storage";

export const postService = async (url, requestData) => {
  const userData = await getItem("userData");
  // console.log("ddd", userData?.token);
  return axios.post(`http://44.193.209.167:8080/${url}`, requestData, {
    headers: { Authorization: userData?.token },
  });
};
export const putService = async (url, requestData) => {
  const userData = await getItem("userData");
  // console.log("ddd", userData?.token);
  return axios.put(`http://44.193.209.167:8080/${url}`, requestData, {
    headers: { Authorization: userData?.token },
  });
};
export const getService = async (url, requestData) => {
  const userData = await getItem("userData");
  console.log("ddd", userData?.token);
  return axios.get(
    `http://44.193.209.167:8080/${url}`,
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
