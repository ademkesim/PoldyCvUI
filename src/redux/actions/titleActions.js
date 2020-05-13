import * as actionTypes from "./actionTypes";
import * as ur from '../../url';
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
