import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PurposeReducer from './reducer_purpose';


const rootReducer = combineReducers({
  purposes: PurposeReducer,
  form: formReducer
});

export default rootReducer;
