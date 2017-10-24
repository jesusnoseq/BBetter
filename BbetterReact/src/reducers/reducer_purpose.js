
import _ from 'lodash';
import {FETCH_PURPOSES, CREATE_PURPOSE, UPDATE_PURPOSE, DELETE_PURPOSE} from '../actions';

export default function (state = {}, action){

  switch (action.type) {
    case FETCH_PURPOSES:
      const purposes = _.groupBy(action.payload.data, 'date');
      const mergedState= {...state, ...purposes };
      return mergedState;
    case CREATE_PURPOSE:
      const newPurpose = action.payload.data;
      const {date}=newPurpose;
      if(state[date]){
        const newDay={[date]:[...state[newPurpose.date],newPurpose]};
        return {...(_.omit(state, date)), ...newDay};
      }else{
          return {...state, [newPurpose.date]:[newPurpose]};
      }
    case UPDATE_PURPOSE:
      const updatePurpose = action.purpose;
      const updateState = _.cloneDeep(state);
      const oldPurpose=_.find(updateState[updatePurpose.date],{'id':updatePurpose.id});
      return updateState;
    case DELETE_PURPOSE:
      return state;
    default:
      return state;
  }

}
