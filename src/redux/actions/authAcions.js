import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { SET_CURRENT_USER } from "./actionTypes";
import alertifiy from "alertifyjs";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("https://localhost:5001/api/auto/register", userData)
    .then((res) => history.push("/"))
    .then(alertifiy.success("Kullanıcı Oluşturuldu"))
    .catch((err) => console.log(err));
};

export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post("https://localhost:5001/api/auto/login", userData)
    .then((res) => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", res.data.token);
      localStorage.setItem("rank", res.data.person.rank);
      setAuthToken(token);
      dispatch(setCurrentUser(res.data.person));
    })
    .catch(res => {
    alertifiy.error("Giriş Başarısız");}
    );
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
