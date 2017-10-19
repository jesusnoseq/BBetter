import axios from 'axios';

export const FETCH_PURPOSES = 'FETCH_PURPOSES';
export const CREATE_PURPOSES = 'CREATE_PUPORSES';
export const DELETE_PURPOSES = 'DELETE_PUPORSES';
export const UPDATE_PURPOSES = 'UPDATE_PURPOSES';

const API_URL = 'http://127.0.0.1:8081/api';


export function fetchPurposes (year, month, day) {
  const request = axios.get(`${API_URL}/purposes/${year}/${month}/${day}`);
  return {
    type: FETCH_PURPOSES,
    payload: request
  };
}


export function createPurpose (values, callback) {
  const request = axios.post(`${API_URL}/purposes`, values).then(callback);
  return {
    type: CREATE_PURPOSES,
    payload: request
  };
}

export function updatePurpose (values, callback) {
  const request = axios.put(`${API_URL}/purposes/${values.id}"`, values).then(callback);
  return {
    type: UPDATE_PURPOSES,
    payload: request
  };
}
