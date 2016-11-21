export let incrementCounter = (inputState = { counter : 0 }, action) => {
  let { type, payload } = action;

  if (type === 'INCREMENT') {
    return {
      counter: inputState.counter + payload.value
    }
  }
  return inputState;
};

export let decrementCounter = (inputState = { counter: 0 }, action) => {

  // ....

  return inputState;
};


/**
 * Covers both login and logout actions
 * 
 * For Login: Save users data to the state
 * For Logout: Save state as null
 */

export let users = (inputState = null, action) => {

  // ...

  return inputState;
};