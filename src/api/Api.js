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

const UPDATE_PROFILE_INFORMATION = async (data) => {
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

const UPDATE_EMERGENCY_CONTACT = async (data) => {
  return axios
    .post(`${BASE_URL}/api/user/emergency_contact`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_ADDRESS = async (data) => {
  return axios
    .post(`${BASE_URL}/api/user/address`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_SALARY = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/salary-detail`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_JOB_DETAILS = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/job-details`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_EDUCATION = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/eduction/details`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const UPDATE_WORK_EXPERIENCE = async (data) => {
  return axios
    .post(`${BASE_URL}/api/update/work-experience`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const PUNCH_IN = async () => {
  return axios
    .get(`${BASE_URL}/api/projects/timers/punchin`,{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const PUNCH_OUT = async () => {
  return axios
    .get(`${BASE_URL}/api/projects/timers/punchout`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const PAUSE_TIMER = async (id) => {
  return axios
    .post(`${BASE_URL}/api/projects/timers/pause/${id}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const TAKE_SCREENSHOT = async (data) => {
  return axios
    .post(`${BASE_URL}/api/projects/timers/screenshot`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const GET_TIMER = async () => {
  return axios
    .get(`${BASE_URL}/api/projects/timers/get/detail`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const ADD_EMPLOYEE = async (data) => {
  return axios
    .post(`${BASE_URL}/api/create/employee`, data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const GET_EMPLOYEE = async () => {
  return axios
    .get(`${BASE_URL}/api/get/all/employee`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const DELETE_EMPLOYEE = async (ID) => {
  return axios
    .post(`${BASE_URL}/api/delete/employee`, {id: ID}, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const ADD_LEAVE = async (data) => {
  return axios
    .post(`${BASE_URL}/api/add/leave`, data,  {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const GET_LEAVES = async () => {
  return axios
    .get(`${BASE_URL}/api/get/leaves`,  {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export { LOGIN_API, SIGNUP_API, LOGOUT_API, GET_PROFILE, UPDATE_PROFILE_INFORMATION, UPDATE_PROFILE_IMAGE, UPDATE_EMERGENCY_CONTACT, UPDATE_ADDRESS, UPDATE_SALARY, UPDATE_JOB_DETAILS, UPDATE_EDUCATION, UPDATE_WORK_EXPERIENCE, PUNCH_IN, PUNCH_OUT, PAUSE_TIMER, TAKE_SCREENSHOT, GET_TIMER, ADD_EMPLOYEE, GET_EMPLOYEE, DELETE_EMPLOYEE, ADD_LEAVE, GET_LEAVES };
