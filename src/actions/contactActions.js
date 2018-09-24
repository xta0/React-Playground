import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users/');
  dispatch({
    type: GET_CONTACTS,
    payload: res
  });
};
export const addContact = id => {
  return {
    type: ADD_CONTACT,
    payload: id
  };
};
export const deleteContact = contact => {
  return {
    type: DELETE_CONTACT,
    payload: contact
  };
};
