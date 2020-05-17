import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
import axios from "axios";
import alertify from 'alertifyjs';
export function getDepartmentsSuccess(products) {
  return { type: actionTypes.GET_DEPARTMENTS_SUCCESS, payload: products };
}
export function getByDepartmentsSuccess(departman) {
  return { type: actionTypes.GET_BY_DEPARTMENT_SUCCESS, payload: departman };
}

export function getDepartments() {
  return function (dispatch) {
    let url = ur.url+ "/Department/getlist";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getDepartmentsSuccess(result)));
  };
}
export function getByDepartment(departmanId){
  return function (dispatch){
    let url = ur.url + "/Department/getbyid?id="+departmanId;
    return fetch(url)
    .then((response)=>response.json())
    .then((result)=>dispatch(getByDepartmentsSuccess(result)));
  };
}
export function AddDepartment(departman){
  return function (dispatch){
    var url = ur.url + "/Department/add";
    debugger
    axios
    .post(url,departman)
    .then(alertify.success("Departman Başarıyla Eklendi"))
    .catch(err=>console.log(err))
  }
}
