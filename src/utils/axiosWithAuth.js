import axios from 'axios';

const axiosWithAuth = () => {
    return axios.create({
        headers: {
            Authorization: window.localStorage.getItem('token')
        },
        baseURL: 'https://heftyb-how-to.herokuapp.com/'
        
    })
}

export default axiosWithAuth