import * as actionTypes from "./actionTypes";
import * as ur from "../../url";
import axios from "axios";
import alertify from "alertifyjs";
export function getAppliesSuccess(applies) {
  return { type: actionTypes.GET_APPLIES_SUCCESS, payload: applies };
}
export function getApplySuccess(apply) {
  return { type: actionTypes.GET_BYID_APPLIES, payload: apply };
}
export function getApply(apply) {
  return { type: actionTypes.GET_BYID_APPLY, payload: apply };
}
export function getApplies(departmentId, titleId) {
  return function (dispatch) {
    let url = ur.url + "/apply";
    if (departmentId) {
      url += "/getbydepartment?getbydepartmentId=" + departmentId;
    } else if (titleId) {
      url += ur.url + "/Apply/getbytitle?getbytitleId=" + titleId;
    } else {
      url += "/getall";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getAppliesSuccess(result)));
  };
}

export function getByIdApply(personId) {
  return function (dispatch) {
    let url = ur.url + "/Apply/getbyid?getbypersonId=" + personId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getApplySuccess(result)));
  };
}
export function getByApply(applyId) {
  return function (dispatch) {
    let url = ur.url + "/Apply/getbyapply?getbypersonId=" + applyId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getApply(result)));
  };
}
export const deleteApply = (apply) => (dispatch) => {
  axios.post(ur.url + "/apply/delete", apply);
};
export function addApply(apply) {
  return function (dispatch) {
    var url = ur.url + "/Apply/add";
    axios.post(url,apply)
      .catch(error=>console.log(error));
  };
}
export function updateApply(apply) {
  return function (dispatch) {
    var url = ur.url + "/Apply/update";
    debugger
    axios.post(url,apply)
      .catch((error)=>console.log(error));
  };
}
