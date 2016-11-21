import { IActionCreator } from './state_manager';

export let actionIncrementCounter: IActionCreator = (value) => {
  return {
    type: 'INCREMENT',
    payload: value
  };
}

export let actionDecrementCounter: IActionCreator = (value) => {
  return {
    type: 'DECREMENT',
    payload: value
  };
}


export let actionLoginUser: IActionCreator = (userData) => {
  return {
    type: 'LOGIN',
    payload: userData
  };
}

export let actionLogoutUser: IActionCreator = () => {
  return {
    type: 'LOGOUT',
    payload: null
  };
}