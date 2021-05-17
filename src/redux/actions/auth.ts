import { Dispatch } from 'redux';


export const login = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'login' });
  };
};

export const logout = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'logOut' });
  };
};
