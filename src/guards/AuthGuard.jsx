import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const AuthGuard = () => {
  const { user } = useAuthContext();

  return user ? <Navigate to='/' /> : <Outlet />;
};

export default AuthGuard;
