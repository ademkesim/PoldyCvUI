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
export function deleteDepartmentsSuccess(departman) {
  debugger;
  return { type: actionTypes.DELETE_DEPARTMENT_SUCCESS, payload: departman };
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
  debugger;
  return function (dispatch){
    var url = ur.url + "/Department/add";
    axios
    .post(url,departman)
    .then(alertify.success("Departman Başarıyla Eklendi"))
    .catch(err=>console.log(err))
  }
}
export function deleteDepartment(department)
{


  return function (dispatch){
    var url = ur.url + "/Department/delete?departmentId="+department;

    axios
    .post(url,department)
   .then(result=>dispatch(deleteDepartmentsSuccess(department)))
    .then(alertify.success("Departman Başarıyla Silindi"))
    .catch(err=>console.log(err))
    
  }
}
export function updateDepartment(department)
{
  debugger;
  return function (dispatch){
    var url = ur.url + "/Department/update?departmentId="+department;

    axios
    .post(url,department)
    .then(alertify.success("Departman Başarıyla Güncellendi"))
    .catch(err=>console.log(err))
  }
}
