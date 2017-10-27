import axios from 'axios';

export const FETCH_PURPOSES = 'FETCH_PURPOSES';
export const CREATE_PURPOSE = 'CREATE_PUPORSE';
export const UPDATE_PURPOSE = 'UPDATE_PURPOSE';
export const DELETE_PURPOSE = 'DELETE_PUPORSE';


const API_URL = 'http://127.0.0.1:8081/api';


export function fetchPurposes (year, month, day) {
  const request = axios.get(`${API_URL}/purposes/${year}/${month}/${day}`);
  return {
    type: FETCH_PURPOSES,
    payload: request
  };
}


export function createPurpose (values, callback) {
  const request = axios.post(`${API_URL}/purposes`, values);//.then(callback);
  return {
    type: CREATE_PURPOSE,
    payload: request
  };
}

export function updatePurpose (values, callback) {
  const request = axios.put(`${API_URL}/purposes/${values.id}`, values);//.then(callback);
  return {
    type: UPDATE_PURPOSE,
    payload: request,
    purpose: values
  };
}



export function deletePurpose (id, callback) {
  const request = axios.delete(`${API_URL}/purposes/${id}`); //.then(callback);
  return {
    type: DELETE_PURPOSE,
    payload: request,
    purposeId: id
  };
}
