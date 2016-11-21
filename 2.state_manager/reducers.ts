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
  let { type, payload } = action;
  if (type === 'DECREMENT') {
    return {
      counter: inputState.counter - payload.value
    }
  }
  return inputState;
};

export let users = (inputState = null, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      return {
        login: payload.login,
        name: payload.name
      };
    case 'LOGOUT':
      return null;
    default:
      return inputState;
  }
};