import * as actionTypes from "./actionTypes";
import alertifiy from "alertifyjs";
import * as ur from '../../url';

export function createCvSuccess(userCv) {
  return {
    type: actionTypes.CREATE_CV_SUCCESS,
    payload: userCv,
  };
}

export  function userAddCv(userCv, userId) {
  return function (dispatch) {
    let url = ur.url
    if (userId) {
      url = url + "/api/CurriculumVitae/add?id=" + userId;
    }
    console.log(userCv)
    debugger
    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userCv)
    }).then(response=>dispatch(createCvSuccess(response))).catch(err=>errorHandler(err))
  }
}

export function errorHandler(err){
 console.log(err)
 alertifiy.error("Kayıt Başarısız")
}
