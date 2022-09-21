import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  deleteToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const performRegistration = async login => {
  const response = await axios.post('/users/signup', login);
  return response.data;
};

export const performLogIn = async login => {
  const response = await axios.post('users/login', login);
  token.setToken(response.data.token);
  return response.data;
};

export const performLogOut = async () => {
  const response = await axios.post('users/logout');
  token.deleteToken();
  return response.data;
};

const instance = axios.create({
  baseURL: 'https://6318692af6b281877c6b73c0.mockapi.io/api/contacts',
});

export const getContacts = async () => {
  const response = await instance.get('/', {
    params: {},
  });
  return response.data;
};

export const postContact = async contact => {
  const response = await instance.post('/', contact);
  return response.data;
};

export const deleteContact = async id => {
  await instance.delete(`/${id}`);
};
