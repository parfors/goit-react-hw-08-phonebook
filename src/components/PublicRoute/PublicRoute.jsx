import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLogIn } from 'redux/selectors';

export default function PublicRoute() {
  const isLoggedIn = useSelector(getIsLogIn);

  if (isLoggedIn) {
    return <Navigate to={'/contacts'} />;
  }
  return <Outlet />;
}
