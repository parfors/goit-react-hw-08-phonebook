// import { useState } from 'react';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelSpanStyled,
  LabelStyled,
} from 'components';
import { useLocalStorage } from 'hooks';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');

  const handleChange = e => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;
      default:
        return;
    }
  };

  const createContact = () => {
    const contact = {
      name,
      number,
    };
    return contact;
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(createContact());
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <LabelStyled>
          <LabelSpanStyled>Enter contact Name</LabelSpanStyled>
          <InputStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </LabelStyled>
        <LabelStyled>
          <LabelSpanStyled>Enter contact Tel</LabelSpanStyled>
          <InputStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </LabelStyled>
        <ButtonStyled type="submit">Add contact</ButtonStyled>
      </FormStyled>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
};
