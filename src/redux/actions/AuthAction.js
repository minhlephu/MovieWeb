import Swal from "sweetalert2";
import { userService } from "../../services/userService";

import { LOGIN_REQUEST, LOGIN_SUCCESS } from "../constrants/Auth";

export const signInAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const result = await userService.signIn(user);
      if (result.data.code == 200) {
        localStorage.setItem("user", JSON.stringify({ ...result.data.data }));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            data: result.data.data,
          },
        });
        Swal.fire({
          title: "Đăng nhập thành công!",
          icon: "success",
          html: "Thông báo tự động tắt sau 2 giây",
          timer: 2000,
          timerProgressBar: true,
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Có lỗi!",
        text: error.response.data.content,
        icon: "error",
        confirmButtonText: "Thử lại",
      });
    }
  };
};
// export const register = (user) => {
//   return (dispatch) => {
//     dispatch({
//       type: REGISTER_REQUEST,
//     });

//     usersApi
//       .postSignUp(user)
//       .then((result) => {
//         dispatch({
//           type: REGISTER_SUCCESS,
//           payload: {
//             data: result.data,
//           },
//         });
//       })
//       .catch((error) => {
//         dispatch({
//           type: REGISTER_FAIL,
//           payload: {
//             error: error.response?.data ? error.response.data : error.message,
//           },
//         });
//       });
//   };
// };
// export const resetErrorLoginRegister = () => {
//   return (dispatch) => {
//     dispatch({
//       type: RESET_ERROR_LOGIN_REGISTER,
//     });
//   };
// };
