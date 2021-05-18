import { Dispatch } from 'redux';


export const mainAppView = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'mainApp' });
  };
};
