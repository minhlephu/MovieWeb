import Button from "../components/button/Button";
import FromGroup from "../components/common/FromGroup";
import useToggleValue from "../components/hooks/useToggleValue";
import IconEyeToggle from "../components/icons/IconEyeToggle";
import Input from "../components/input/Input";
import { Label } from "../components/label";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
const schema = yup.object({
    name: yup.string().required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character "),
  });
const SignInPage = () => {

    const {
        control,
        formState: { errors ,isSubmitting},
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
      });
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
    return (
        <div>
        <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:text-white dark:border-darkStroke">
          <img srcSet="/img/google.png 2x" alt="icon-google" />
          <span>Sign up with google</span>
        </button>
        <form>
          <FromGroup>
            <Label htmlFor="name">Email *</Label>
            <Input
              control={control}
              name="name"
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
              <span className="inline-block text-sm font-medium text-primary">
                Forgot password
              </span>
            </div>
          </FromGroup>
          <Button
            className="w-full bg-[#337ab7]"
            kind="primary"
            type="submit"
            isLoading={isSubmitting}
          >
            Sign in
          </Button>
        </form>
      </div>
    );
};

export default SignInPage;