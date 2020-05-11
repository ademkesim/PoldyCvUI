import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actionTypes";

export const registerUser = (userData, history) =>(dispatch)=> {
  axios
    .post("https://localhost:44340/api/auto/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => console.log(err));
};

export const loginUser = (userData,history) => (dispatch) => {
  axios
    .post("https://localhost:44340/api/auto/login", userData)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", res.data.token);
      localStorage.setItem("rank",res.data.person.rank);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      history.push("/");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
