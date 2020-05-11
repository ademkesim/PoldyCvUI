import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actionTypes";

export const registerUser = (userData, history) => {
  axios
    .post("https://localhost:44340/api/auto/register", userData)
    .then((res) => history.push("/login"))
    .catch((err) => console.log(err));
};

export const loginUser = (userData,history) => (dispatch) => {
  axios
    .post("https://localhost:44340/api/auto/login", userData)
    .then((res) => {
      console.log(res.data.person.rank);
      const token = res.data.token;
      localStorage.setItem("jwtToken", res.data.token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
      res.data.person.rank?history.push("/admin"):history.push("/user")
    })
    .catch((err) => console.log(err));
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
