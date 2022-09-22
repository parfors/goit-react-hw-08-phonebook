import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contact-operations';

const initialState = {
  contacts: [],
  loadingContact: false,
  error: null,
};

const contactsReducer = createReducer(initialState, {
  [fetchContacts.pending]: state => {
    state.loadingContact = true;
    state.error = null;
  },
  [fetchContacts.fulfilled]: (state, { payload }) => {
    state.contacts = payload;
    state.loadingContact = false;
  },
  [fetchContacts.rejected]: (state, { payload }) => {
    state.error = payload;
    state.loadingContact = false;
  },
  [addContact.pending]: state => {
    state.loadingContact = true;
    state.error = null;
  },
  [addContact.fulfilled]: (state, { payload }) => {
    state.contacts.push(payload);
    state.loadingContact = false;
  },
  [addContact.rejected]: (state, { payload }) => {
    state.error = payload;
    state.loadingContact = false;
  },
  [deleteContact.pending]: state => {
    state.loadingContact = true;
    state.error = null;
  },
  [deleteContact.fulfilled]: (state, { payload }) => {
    state.loadingContact = false;
    state.contacts = state.contacts.filter(el => el.id !== payload);
  },
  [deleteContact.rejected]: (state, { payload }) => {
    state.error = payload;
    state.loadingContact = false;
  },
});

export default contactsReducer;
