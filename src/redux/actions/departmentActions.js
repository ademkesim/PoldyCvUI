import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
export function getDepartmentsSuccess(products) {
  return { type: actionTypes.GET_DEPARTMENTS_SUCCESS, payload: products };
}

export function getDepartments() {
  return function (dispatch) {
    let url = ur.url + "/Department/getlist";
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getDepartmentsSuccess(result)));
  };
}
