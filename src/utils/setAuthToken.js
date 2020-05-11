import axios from 'axios';
const setAuthToken = token => {
   if(token){
       axios.defaults.headers.common['Authorization']= 'AUTH_TOKEN';
    }

    delete axios.defaults.headers.common['Authorization'];
}
export default setAuthToken;