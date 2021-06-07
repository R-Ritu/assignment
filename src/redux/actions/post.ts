import { useDispatch } from "react-redux";
import { Dispatch } from 'redux';
import APIClient from '../../helpers/APIClient';

export const getAllPostApi = () => {
  return (dispatch: Dispatch) => {
    APIClient.get('posts')
      .then((json) => {
        dispatch({
          type: "ALL_POST",
          payload: json.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: "ALL_POST_FAIL",
        })
        console.error(error);
      });
  }
};

export const addPost = ({title,body}: {title:String, body: String}) => {
  return (dispatch:Dispatch, getState: any) => {
      let {allPost} = getState().post
      let data = {
        id:allPost.length,
        userId:1,
        title,
        body
      }
      dispatch({
        type: "ADD_POST",
        payload: data,
      })
  }
}