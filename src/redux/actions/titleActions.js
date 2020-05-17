import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
import Axios from "axios";
import alertify from "alertifyjs";
export function getTitlesSuccess(titles) {
  return { type: actionTypes.GET_TITLE_SUCCESS, payload: titles };
}

export function getTitles(id) {
  return function (dispatch) {
      let url = ur.url
    if(id){
        url += "/Title/getbydepartment?id="+id;
    }
    else{
        url +="/title/getlist";
    }
    
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getTitlesSuccess(result)));
  };
}
export function AddTitle(title){
  return function (dispatch){
    let url = ur.url + "/Title/add";
    Axios 
    .post(url,title)
    .then(alertify.success("Ünvan başarıyla eklendi"))
    .catch(err=>console.log(err))
  }
}
