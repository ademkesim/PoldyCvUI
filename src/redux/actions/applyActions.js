import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
export function getAppliesSuccess(products) {
  return { type: actionTypes.GET_APPLIES_SUCCESS, payload: products };
}

export function getApplies(departmentId,titleId) {
  return function (dispatch) {
    let url = ur.url + "/apply";
    if (departmentId) {
      url += "/getbydepartment?getbydepartmentId=" + departmentId;
    }
    else if(titleId){
        url += ur.url + "/Apply/getbytitle?getbytitleId=" + titleId;
    }else{
        url += "/getall";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getAppliesSuccess(result)));
  };
}
