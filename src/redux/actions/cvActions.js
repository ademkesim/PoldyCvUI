import * as actionTypes from "./actionTypes";
import * as ur from "../../url";

export function getCvSuccess(cv) {
  return { type: actionTypes.GET_CV_SUCCESS, payload: cv };
}

export function getByIdSuccess(cv) {
  return { type: actionTypes.GET_BYCV_SUCCESS, payload: cv };
}

export function getCv() {
  return function (dispatch) {
    let url = ur.url + "/Department/getlist";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCvSuccess(result)));
  };
}
export function getById(personId) {
  return function (dispatch) {
    let url = ur.url + "/CurriculumVitae/getbyid?id=" + personId;
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getByIdSuccess(result)))
      .catch((error) => console.log(error));
  };
}
