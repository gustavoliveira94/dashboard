import { useDispatch } from 'react-redux';

import { logOut } from 'store/ducks/auth';

import { Button } from './styles';

const Logout: React.FC = () => {
  const dispatch = useDispatch();

  const logOutUser = () => {
    dispatch(logOut());
    localStorage.removeItem('userId');
  };

  return <Button onClick={() => logOutUser()}>Logout</Button>;
};

export default Logout;
