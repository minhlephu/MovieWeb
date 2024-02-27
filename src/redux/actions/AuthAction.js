import Swal from "sweetalert2";
import { userService } from "../../services/userService";

import { LOGIN_REQUEST, LOGIN_SUCCESS} from "../constrants/Auth";

export const signInAction = (user) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOGIN_REQUEST,
      });
      const result = await userService.signIn(user);
      if (result.data.code == 200) {
        // const decoded = jwtDecode(result.data.data);
        // const name =
        //   decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        // const role =
        //   decoded[
        //     "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        //   ];
        // console.log("Name:", name);
        // console.log("Role:", role);
        localStorage.setItem("user", result.data.data);
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
export const signUpAction = (user) => {
  return async ()=>{
    try{
      const result = await userService.signUp(user);
      console.log(result);
      if(result.status==200){
        Swal.fire({
          title: "Đăng ký thành công!",
          icon: "success",
          confirmButtonText: "Đăng nhập ngay",
        });
      }
      if(result.data.status==102){
        Swal.fire({
          title: "Tài khoản đã tồn tại!",
          icon: "error",
          confirmButtonText: "Vui lòng chọn tên khác!",
        });
      }
      if(result.data.status==103){
        Swal.fire({
          title: "Email đã tồn tại!",
          icon: "error",
          confirmButtonText: "Vui lòng chọn email khác!",
        });
      }
    }
    catch(error){
      Swal.fire({
        title: "Error!",
        text: error.response.data.content,
        icon: "error",
        confirmButtonText: "Try Again!",
      });
    }
  }
};
// export const resetErrorLoginRegister = () => {
//   return (dispatch) => {
//     dispatch({
//       type: RESET_ERROR_LOGIN_REGISTER,
//     });
//   };
// };
