interface ReducerState {
  isLoggedIn: boolean;
  data: Array<any>;
}
const initialState: ReducerState = {
  isLoggedIn: false,
  data: [],
};
const user = (
  state: ReducerState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case 'login':
      return { ...state, isLoggedIn: true };
    case 'logOut':
      return { ...initialState };
    default:
      return state;
  }
};

export default user;
