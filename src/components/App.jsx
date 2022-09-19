import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import { Routes, Route } from 'react-router-dom';
import Layout from 'pages/Layout';
import Login from 'pages/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
