import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, to }) => {
  const {
    user: { islogged },
  } = useSelector((state) => state);
  return islogged ? children : <Navigate to={to} />;
};
