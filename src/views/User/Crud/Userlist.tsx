import * as React from 'react';
import {IUser} from "../../../common/interface/User";
import { deleteUser, selectUser } from "../../../actions/UserActions";
import { useDispatch } from  "react-redux";

// Register all props of component here
interface IUserListProps {
  // userlist
  userList: IUser[];
  // On edit call
  onEdit(): void
}

export const Userlist = (props: IUserListProps) => {

  const dispatch = useDispatch();

  /**
   * Delete user based on userId
   * @param userId
   */
  const onDelete = (userId: number) => {
    dispatch(deleteUser(userId));
  }

  /**
   * Select user based on userId
   * @param userId
   */
  const onEdit = (userId: number) => {
    dispatch(selectUser(userId));
    props.onEdit() ;
  }

  return <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
      props.userList.map((user: IUser, index: number) =>
      <tr key={index}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.city}</td>
        <td><button onClick={() => onEdit(user.id)}>Edit</button></td>
        <td><button onClick={() => onDelete(user.id)}>Delete</button></td>
      </tr>
      )
    }
    </tbody>
  </table>;
}

export default Userlist;