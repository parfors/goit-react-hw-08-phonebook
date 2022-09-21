import { useState } from 'react';

const useForm = (initialState, onSubmit) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { handleChange, handleSubmit, state, setState };
};

export default useForm;
