
import _ from 'lodash';
import {FETCH_PURPOSES, CREATE_PURPOSES, UPDATE_PURPOSES, DELETE_PURPOSES} from '../actions';

export default function (state = {}, action){
  switch (action.type) {
    case FETCH_PURPOSES:
      const purposes = _.groupBy(action.payload.data, 'date');
      const mergedState= {...state, ...purposes };
      return mergedState;
    case CREATE_PURPOSES:
      const newPurpose = action.payload.data;
      const {date}=newPurpose;
      if(state[date]){
        const newDay={[date]:[...state[newPurpose.date],newPurpose]};
        return {...(_.omit(state, date)), ...newDay};
      }else{
          return {...state, [newPurpose.date]:[newPurpose]};
      }
    case UPDATE_PURPOSES:
      return state;
    case DELETE_PURPOSES:
      return state;
    default:
      return state;
  }

}
