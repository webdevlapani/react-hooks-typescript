import { combineReducers } from 'redux';
import userReducer, {IUserReducerState} from './User/Userreducer';

// Register all reducer
export interface IRootReducer {
  // user reducer state
  userReducer: IUserReducerState
}

export default combineReducers({
  userReducer
});