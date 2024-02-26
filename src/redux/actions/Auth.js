
import usersApi from "../../api/userApi";
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, RESET_ERROR_LOGIN_REGISTER } from "../constrants/Auth";

export const signIn = (user)=>{
    return async (dispatch, getState)=>{
        try {
            const stateBefore = getState();
            console.log("Todos before dispatch: ", stateBefore.authReducer);
            dispatch({
              type: LOGIN_REQUEST,
            });
            const result = await usersApi.postSingIn(user);
            localStorage.setItem(
              "user",
              JSON.stringify({ ...result.data, avtIdUser: result.data.taiKhoan })
            );
            dispatch({
              type: LOGIN_SUCCESS,
              payload: {
                data: result.data,
              },
            });
      
            const stateAfter = getState();
            console.log("Todos after dispatch: ", stateAfter.authReducer);
          } catch (error) {
            dispatch({
              type: LOGIN_FAIL,
              payload: {
                error: error.response?.data ? error.response.data : error.message,
              },
            });
          }
    }
}
export const register = (user) => {
    return (dispatch) => {
      dispatch({
        type: REGISTER_REQUEST,
      });
  
      usersApi
        .postSignUp(user)
        .then((result) => {
          dispatch({
            type: REGISTER_SUCCESS,
            payload: {
              data: result.data,
            },
          });
        })
        .catch((error) => {
          dispatch({
            type: REGISTER_FAIL,
            payload: {
              error: error.response?.data ? error.response.data : error.message,
            },
          });
        });
    };
  };
  export const resetErrorLoginRegister = () => {
    return (dispatch) => {
      dispatch({
        type: RESET_ERROR_LOGIN_REGISTER,
      });
    };
  };