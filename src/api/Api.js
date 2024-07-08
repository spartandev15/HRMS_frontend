import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const LOGIN_API = async (data) => {
  return axios
    .post(`${BASE_URL}/api/login`, data, config)
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const SIGNUP_API = async (data) => {
  return axios
    .post(`${BASE_URL}/api/register`, data, config)
    .then((res) => {
      console.log(res);
      return res
    })
    .catch((err) => {
      console.log(err);
      throw err
    });
};

export { LOGIN_API, SIGNUP_API };
