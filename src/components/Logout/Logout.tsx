import { useDispatch, useSelector } from 'react-redux';

import { logOut } from 'store/ducks/auth';
import { AppState } from 'models/AppState.interface';

import { Button } from './styles';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector((store: AppState) => store?.auth);

  const logOutUser = () => {
    dispatch(logOut());
    localStorage.removeItem('userId');
  };

  return user?.isLogged ? (
    <Button onClick={() => logOutUser()}>Logout</Button>
  ) : null;
};

export default Logout;
