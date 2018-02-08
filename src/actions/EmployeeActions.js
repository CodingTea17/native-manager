import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from './types';

export const employeeUpdate = ({ prop, value }) => {
  console.log(value)
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // Come back to this and make it load from state? Also why does this work without passing auth details?
  const { currentUser } = firebase.auth();
  
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift });
}
