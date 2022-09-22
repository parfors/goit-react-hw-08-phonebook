import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout';
import Login from 'pages/Login';
import Home from 'pages/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="contacts" element={<Contacts />} />
          </Route>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
