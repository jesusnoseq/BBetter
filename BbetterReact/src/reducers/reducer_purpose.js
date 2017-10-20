
import _ from 'lodash';
import {FETCH_PURPOSES, CREATE_PURPOSE} from '../actions';

const mockdata=[
  {id:1, description: 'Desing app',completed:true, date:'20171014'},
  {id:11, description: 'Do this app',completed:true, date:'20171015'},
  {id:22, description: 'Do this app backend',completed:true, date:'20171015'},
  {id:33, description: 'Send CV',completed:false, date:'20171016'}
];



export default function(state={},action){

  switch (action.type) {
    case FETCH_PURPOSES:
      const purposes = _.groupBy(action.payload.data, 'date');
      const newState= {...state, ...purposes };
      return newState;
    case CREATE_PURPOSE:
      /*const purpose=action.payload.data;
      const newState= {...state };
      if(newState[purpose.date]){
        newState[purpose.date]=[...newState[purpose.date],purpose];
      }else{
        newState[purpose.date]=[purpose];
      }
      return newState;*/

      //const newState= {...state };
      //newState[post.id]=post;

      //return newState;
    //case DELETE_POST:
    //  return _.omit(state, action.payload);
      //if array
      //_.reject(state,post=>post===action.payload);
    default:
      return state;
  }

}
