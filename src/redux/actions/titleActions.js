import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
import axios from "axios";
import alertify from "alertifyjs";
export function getTitlesSuccess(titles) {
  return { type: actionTypes.GET_TITLE_SUCCESS, payload: titles };
}
export function deleteTitleSuccess(titles) {
  return { type: actionTypes.DELETE_TİTLE_SUCCESS, payload: titles };
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
  debugger;
  return function (dispatch){
    let url = ur.url + "/Title/add";
    axios 
    .post(url,title)
    .then(alertify.success("Ünvan başarıyla eklendi"))
    .catch(err=>console.log(err))
  }
}

export function deleteTitle(title)
{
  

  return function (dispatch){
    var url = ur.url + "/Title/delete?titleId="+title;

    axios
    .post(url,title)
    .then(result=>dispatch(deleteTitleSuccess(title)))
    .then(alertify.success("Ünvan Başarıyla Silindi"))
    .catch(err=>console.log(err))
  }
}
export function updateTitle(title)
{
  debugger;
  return function (dispatch){
    var url = ur.url + "/Title/update?titleId="+title;

    axios
    .post(url,title)
    .then(alertify.success("Ünvan Başarıyla Güncellendi"))
    .catch(err=>console.log(err))
  }
}