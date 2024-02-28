import { useDispatch, useSelector } from "react-redux";
import Button from "../components/button/Button";
import FromGroup from "../components/common/FromGroup";
import useToggleValue from "../components/hooks/useToggleValue";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { signInAction } from "../redux/actions/AuthAction";
import { useEffect } from "react";
import Swal from "sweetalert2";
const schema = yup.object({
  name: yup.string().required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
  const { currentUser, errorLogin } = useSelector((state) => state.AuthReducer);
  useEffect(() => {
    // đăng nhập thành công thì quay về trang trước đó
    if (currentUser) {
      Swal.fire({
        title: "Đăng nhập thành công!",
        icon: "success",
        html: "Thông báo tự động tắt sau 2 giây",
        timer: 2000,
        timerProgressBar: true,
        confirmButtonText: "Ok",
      });
    }
  }, [currentUser]);
  useEffect(() => {
    // đăng nhập thành công thì quay về trang trước đó
    if (errorLogin == 101) {
      Swal.fire({
        title: "Tài khoản hoặc mật khẩu không đúng!",
        icon: "error",
        html: "Thông báo tự động tắt sau 2 giây",
        timer: 2000,
        timerProgressBar: true,
        confirmButtonText: "Ok",
      });
    }
  }, [errorLogin]);

  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const handleSignIn = (values) => {
    const user = {
      username: values.name,
      password: values.password,
    };
    dispatch(signInAction(user));
  };
  return (
    <div>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-[#e5e5e5] rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        <img srcSet="/img/google.png 2x" alt="icon-google" />
        <span>Đăng nhập bằng google</span>
      </button>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FromGroup>
          <Label htmlFor="name">Tên đăng nhập *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Tên đăng nhập"
            error={errors.name?.message}
          ></Input>
        </FromGroup>
        <FromGroup>
          <Label htmlFor="password">Mật khẩu *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Mật khẩu"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FromGroup>
        <FromGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-[#337ab7]">
              Quên mật khẩu
            </span>
          </div>
        </FromGroup>
        <Button
          className="w-full bg-[#337ab7] text-white"
          type="submit"
          isLoading={isSubmitting}
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default SignInPage;
