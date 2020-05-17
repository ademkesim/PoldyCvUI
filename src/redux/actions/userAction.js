import * as actionTypes from "./actionTypes";
import alertifiy from "alertifyjs";
import * as ur from '../../url';

export function createCvSuccess(userCv) {
  return {
    type: actionTypes.CREATE_CV_SUCCESS,
    payload: userCv,
  };
}

export  function userAddCv(userCv) {
  return function (dispatch) {
    let url = ur.url
    url = url + "/CurriculumVitae/add";
    console.log(userCv)
    console.log(JSON.stringify(userCv))
    debugger
    return fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userCv)
    }).then(response=>dispatch(createCvSuccess(response)))
    .then(alertifiy.success("Cv Başarıyla oluşturuldu!"))
    .catch(err=>console.log(err))
  }
}

export function errorHandler(err){
 console.log(err)
 alertifiy.error("Kayıt Başarısız")
}
