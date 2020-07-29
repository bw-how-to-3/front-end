import axios from "axios";

const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    baseURL: "https://heftyb-how-to.herokuapp.com",
  });
};

export default axiosWithAuth;
