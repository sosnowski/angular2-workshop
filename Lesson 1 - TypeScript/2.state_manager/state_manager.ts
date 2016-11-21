interface IAction {
  type: string;
  payload: any
}

interface IActionCreator {
  (payload?: any) : IAction
}


interface IReducer {
  (inputState: any, action: IAction) : Object
}

class StateManager {

  // private states: type?;

  addReducer(stateName: string, reducer: IReducer) {

  }

  subscribe(stateName: string, callback: Function) {

  }

  dispatch(stateName, action: IAction) {

  }

  private static _state: StateManager;

  static getState() {
    if (!this._state) {
      this._state = new StateManager();
    }
    return this._state;
  }
}
