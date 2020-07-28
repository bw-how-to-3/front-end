import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;
