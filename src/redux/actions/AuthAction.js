import { jwtDecode } from "jwt-decode";
import { userService } from "../../services/userService";

import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAIL,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../constrants/Auth";

export const signInAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const result = await userService.signIn(user);
      if (result.data.code == 200) {
        localStorage.setItem("token", result.data.data);
        const decoded = jwtDecode(`${result.data.data}`);
        const name =
          decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        const role =
          decoded[
            "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
          ];
        const email =
          decoded[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ];
        const currentUser = {
          userName: name,
          userRole: role,
          userEmail: email,
        };
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: currentUser,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: {
          error: error.response?.data
            ? error.response.data.status
            : error.message,
        },
      });
    }
  };
};
export const logOutAction = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
    });
  };
};
export const signUpAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: REGISTER_REQUEST,
      });
      const result = await userService.signUp(user);
      console.log(result);
      if (result.status == 200) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            data: result.data,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_FAIL,
        payload: {
          error: error.response?.data
            ? error.response.data.status
            : error.message,
        },
      });
    }
  };
};
// export const resetErrorLoginRegister = () => {
//   return (dispatch) => {
//     dispatch({
//       type: RESET_ERROR_LOGIN_REGISTER,
//     });
//   };
// };
