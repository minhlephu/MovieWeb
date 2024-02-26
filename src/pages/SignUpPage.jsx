import Button from "../components/button/Button";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import FromGroup from "../components/common/FromGroup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useToggleValue from "../components/hooks/useToggleValue";
const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character "),
});
const SignUpPage = () => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  return (
    <div>
      <button className="flex items-center bg-[#ffffff] justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-[#e5e5e5] rounded-xl text-text2 dark:text-white dark:border-darkStroke">
        <img srcSet="/img/google.png 2x" alt="icon-google" />
        <span>Đăng nhập bằng google</span>
      </button>

      <form>
        <FromGroup>
          <Label htmlFor="name">Họ và tên *</Label>
          <Input
            control={control}
            name="name"
            placeholder="Họ và tên"
            error={errors.name?.message}
          ></Input>
        </FromGroup>
        <FromGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Email"
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
            error={errors.name?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTogglePassword}
            ></IconEyeToggle>
          </Input>
        </FromGroup>
        <Button
          className="w-full bg-[#337ab7] text-white"
          type="submit"
          isLoading={isSubmitting}
        >
          Đăng ký tài khoản
        </Button>
      </form>
    </div>
  );
};

export default SignUpPage;
