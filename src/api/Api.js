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
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

const SIGNUP_API = async (data) => {
  return axios
    .post(`${BASE_URL}/api/signup`, data, config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

const LOGOUT_API = async () => {
  return axios
    .get(`${BASE_URL}/api/logout`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
};

const GET_PROFILE = async () => {
  return axios
    .get(`${BASE_URL}/api/get/profile`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_PROFILE = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/profile`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_PROFILE_IMAGE = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/profile-image`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        // "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export { LOGIN_API, SIGNUP_API, LOGOUT_API, GET_PROFILE, UPDATE_PROFILE, UPDATE_PROFILE_IMAGE };
