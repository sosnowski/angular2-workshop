import { StateManager } from './state_manager';

import * as reducers from './reducers';

import * as actionCreators from './action_creators';

let state = StateManager.getState();

state.addReducer('counter', reducers.incrementCounter);

state.addReducer('counter', reducers.decrementCounter);

state.addReducer('user', reducers.users);

state.subscribe('counter', (state) => {
  console.log(`New counter value : ${state.counter}`);
});

state.subscribe('user', (state) => {
  console.log(`Current User: `);
  console.log(state ? state.name : 'NOT LOGGED');
});


setInterval(() => {
  state.dispatch('counter', actionCreators.actionIncrementCounter(4));
}, 500)

setInterval(() => {
  state.dispatch('counter', actionCreators.actionDecrementCounter(3));
}, 700);


setTimeout(() => {
  state.dispatch('user', actionCreators.actionLoginUser({
    login: 'dsosnowski',
    name: 'Damian Sosnowski'
  }));

  setTimeout(() => {
    state.dispatch('user', actionCreators.actionLogoutUser());
  }, 2000);
}, 1000);