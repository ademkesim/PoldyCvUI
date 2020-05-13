import * as actionTypes from "./actionTypes";
import alertifiy from "alertifyjs";

export function createCvSuccess(userCv) {
  return {
    type: actionTypes.CREATE_CV_SUCCESS,
    payload: userCv,
  };
}

export  function userAddCv(userCv, userId) {
  return function (dispatch) {
    let url = "https://localhost:5001/api/CurriculumVitae/add";
    if (userId) {
      url = url + "?id=" + userId;
    }
    console.log(userCv)
    debugger
    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userCv)
    }).then(response=>dispatch(createCvSuccess(response))).then(res=>alertifiy.success("Kayıt alındı")).catch(err=>errorHandler(err))
  }
}

export function errorHandler(err){
 console.log(err)
 alertifiy.error("Kayıt Başarısız")
}
