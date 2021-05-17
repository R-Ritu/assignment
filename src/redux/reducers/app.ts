interface ReducerState {
  showRealApp?: boolean
}
const initialState: ReducerState = {
  showRealApp: false,
};
const user = (
  state: ReducerState = initialState,
  action: { type: string; payload?: any },
) => {
  switch (action.type) {
    case 'mainApp':
      return { ...state, showRealApp: false };
    case 'logOut':
      return { ...initialState };
    default:
      return state;
  }
};

export default user;
