import {IUser} from "../../common/interface/User";
import {CREATE_NEW_USER, DELETE_USER, EDIT_USER, GET_ALL_USER, SELECT_USER} from "./ActionTypes";

// Interface for userReducer
export interface IUserReducerState {
  // userList
  userList: IUser[];
  // Selected user
  selectedUser?: IUser;
}

// Interface for action
export interface IAction {
  payload: any;
  type: string;
}

// Initial state values for userReducer
const initialState: IUserReducerState = {
  userList: [
    {
      id: + new Date(),
      name: "Suhag",
      age: 25,
      city: "Surat"
    }
  ],
  selectedUser: undefined
};

/**
 * User reducer return state based on action
 * @param state
 * @param action
 */
export const userReducer = (state : IUserReducerState = initialState, action : IAction) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        userList: [
          ...state.userList,
          action.payload
        ]
      };

    case DELETE_USER:
      let userListDelete = [...state.userList];
      userListDelete.splice(userListDelete.findIndex(user => user.id === action.payload), 1);
      return {
        ...state,
        userList: userListDelete
      };

    case EDIT_USER:
      let userList = [...state.userList];
      userList[userList.findIndex(user => user.id === action.payload.id)] = action.payload;
      return {
        ...state,
        userList,
        selectedUser: undefined
      };

    case GET_ALL_USER:
      return {
        ...state
      };

    case SELECT_USER:
      const selectedUser = state.userList.find(user => user.id === action.payload);
      return {
        ...state,
        selectedUser
      };

    default:
      return {
        ...state
      };
  }
};

export default userReducer;
