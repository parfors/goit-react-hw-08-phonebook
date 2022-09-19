import {
  ContactsList,
  Filter,
  Form,
  FormWrapStyled,
  RadioInput,
  RadioInputWrapStyled,
  SectionStyled,
  TitleStyled,
} from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addContact, fetchContacts } from 'redux/contacts/contact-operations';
import { setFilter } from 'redux/filter/filter-Slice';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const color = useSelector(state => state.contacts.color);
  const loading = useSelector(state => state.contacts.items.loading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formSubmitHandler = data => {
    dispatch(addContact(data));
  };

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <ToastContainer />
      <SectionStyled style={{ backgroundColor: color }}>
        <TitleStyled>Phonebook</TitleStyled>
        <FormWrapStyled>
          <Form onSubmit={formSubmitHandler} />
          <RadioInputWrapStyled>
            <RadioInput />
          </RadioInputWrapStyled>
        </FormWrapStyled>
        <TitleStyled>Contacts</TitleStyled>
        <Filter
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
        {loading ? (
          <TitleStyled>Loading...</TitleStyled>
        ) : (
          <ContactsList contacts={visibleContacts} />
        )}
      </SectionStyled>
    </>
  );
}
