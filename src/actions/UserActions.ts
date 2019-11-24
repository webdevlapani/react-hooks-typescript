import {CREATE_NEW_USER, DELETE_USER, EDIT_USER, GET_ALL_USER, SELECT_USER} from "../reducers/User/ActionTypes";
import {IUser} from "../common/interface/User";
import {IAction} from "../reducers/User/Userreducer";

/**
 * Create new user action
 * @param user
 */
export const createNewUser = (user: IUser): IAction => {
  return {
    type: CREATE_NEW_USER,
    payload: user
  }
}

/**
 * Delete user based on userId
 * @param userId
 */
export const deleteUser = (userId: number): IAction => {
  return {
    type: DELETE_USER,
    payload: userId
  }
}

/**
 * Edit user based on userId
 * @param user
 */
export const editUser = (user: IUser): IAction => {
  return {
    type: EDIT_USER,
    payload: user
  }
}

/**
 * Get all user action
 */
export const getAllUsers = (): IAction =>{
  return {
    type: GET_ALL_USER,
    payload: undefined
  }
}

/**
 * Select user based on userId
 * @param userId
 */
export const selectUser = (userId: number): IAction => {
  return {
    type: SELECT_USER,
    payload: userId
  }
}


