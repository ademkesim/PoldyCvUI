import * as actionTypes from "./actionTypes";

export function getAppliesSuccess(products) {
  return { type: actionTypes.GET_APPLIES_SUCCESS, payload: products };
}

export function getApplies(departmentId,titleId) {
  return function (dispatch) {
    let url = "https://localhost:5001/api/apply";
    if (departmentId) {
      url += "/getbydepartment?getbydepartmentId=" + departmentId;
    }
    else if(titleId){
        url += "https://localhost:5001/api/Apply/getbytitle?getbytitleId=" + titleId;
    }else{
        url += "/getall";
    }
    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getAppliesSuccess(result)));
  };
}
