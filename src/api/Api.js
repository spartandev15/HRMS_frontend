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

const STORE_TIMER = async (id, data) => {
  return axios
    .post(`${BASE_URL}/api/projects/timers/store/${id}`, data,  {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

const RUN_TIMER = async (id) => {
  return axios
    .get(`${BASE_URL}/api/projects/timers/active/${id}`, {
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

const GET_TIMER = async (id) => {
  return axios
    .get(`${BASE_URL}/api/projects/timers/get`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw err;
    });
}

export { LOGIN_API, SIGNUP_API, LOGOUT_API, GET_PROFILE, UPDATE_PROFILE_INFORMATION, UPDATE_PROFILE_IMAGE, UPDATE_EMERGENCY_CONTACT, UPDATE_ADDRESS, UPDATE_SALARY, UPDATE_JOB_DETAILS, UPDATE_EDUCATION, UPDATE_WORK_EXPERIENCE, STORE_TIMER, RUN_TIMER, PAUSE_TIMER, TAKE_SCREENSHOT, GET_TIMER };
