import axios from "axios"

axios.interceptors.response.use(response => response.data)
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// AUTHORIZATION
const token = JSON.parse(localStorage.getItem('token'));
axios.interceptors.request.use(function (config) {
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
});
//const url = process.env.VUE_APP_API;
let url ='';
if(process.env.NODE_ENV === 'production'){
     url = process.env.VUE_APP_API_LIVE;
}
else
{
    url = process.env.VUE_APP_API_LOCAL;
    // console.log(url)
}


export default {
    //methods
    register(data) {
        return axios.post(`${url}register`, data)
    },
    login(data){
        return axios.post(`${url}login`, data)
    },
    share(data) {
        return axios.post(`${url}create-post`, data)
    },
    logout(){
        return axios.post(`${url}logout`)
    },
    
}