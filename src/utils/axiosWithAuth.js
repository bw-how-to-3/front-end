<<<<<<< HEAD
import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: window.localStorage.getItem("token"),
    },
  });
};

export default axiosWithAuth;
=======
import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: window.localStorage.getItem('token')
        },
        
    })
}

export default axiosWithAuth
>>>>>>> 68aee4f4746640b1fcaadfb43904b98e561375d0
