import * as React from 'react';
import Userlist  from "./Crud/Userlist";
import {useDispatch, useSelector} from 'react-redux'
import {IRootReducer} from "../../reducers";
import UserCreate from "./Crud/UserCreate";
import {selectUser} from "../../actions/UserActions";

export const User = () => {

  // Handle state for show create user component
  const [showCreate, setShowCreate] = React.useState(false);

  const dispatch = useDispatch();

  // State of user reducer
  const userReducer = useSelector( (state: IRootReducer) => state.userReducer);

  /**
   * Handle on create
   */
  const onCreate = () => {
    setShowCreate(false);
    dispatch(selectUser(0));
  }

  return (
      <React.Fragment>
        <div> <button onClick={() => setShowCreate(true)}> Create new user </button> </div>
        { showCreate && <UserCreate selectedUser={userReducer.selectedUser} onCreate={onCreate} /> }
        <Userlist onEdit={() => setShowCreate(true)} userList={userReducer.userList}/>
      </React.Fragment>
  )
}

export default User;