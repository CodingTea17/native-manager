import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action ) => {
  switch(aciton.type)
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'bob' }
      return { ...state, { [action.payload.prop]: action.payload.value }}
    default:
      return state;
}
