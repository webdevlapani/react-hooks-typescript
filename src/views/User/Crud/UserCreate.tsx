import * as React from 'react';
import { useDispatch } from 'react-redux';
import {createNewUser, editUser} from "../../../actions/UserActions";
import {IUser} from "../../../common/interface/User";


interface IUserCreate {
  // On successfully create user
  onCreate(): void
  // SelectedUser
  selectedUser?: IUser
}

const UserCreate = (props: IUserCreate) => {

  // Handle state for name
  const [name, setName] = React.useState('');
  // Handle state for age
  const [age, setAge] = React.useState(0);
  // Handle state for city
  const [city, setCity] = React.useState('');

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age);
      setCity(props.selectedUser.city);
    }
  }, [props.selectedUser]);

  /**
   * Create or Edit user
   */
  const createOrEditUser = () => {
    if (!props.selectedUser) {
      dispatch(createNewUser({ id: +new Date(), name, age, city }));
    } else {
      dispatch(editUser({ ...props.selectedUser, name, age, city }));
    }
    setName('');
    setAge(0);
    setCity('');
    props.onCreate();
  }

  return (
      <React.Fragment>
        <input placeholder="Name" type="text" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Age" type="number" value={age.toString()} onChange={e => setAge(parseInt(e.target.value))} />
        <input placeholder="City" type="text" value={city} onChange={e => setCity(e.target.value)} />
        <button onClick={createOrEditUser}>{ !props.selectedUser ? 'Create' : 'Edit' }</button>
      </React.Fragment>
  )
}

export default UserCreate;