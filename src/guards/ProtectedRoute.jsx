import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { user } = useAuthContext();

  return user ? <Outlet /> : <Navigate to='signin' />;
};

export default ProtectedRoute;
