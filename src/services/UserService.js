import { baseService } from "./baseService";

export class UserService extends baseService {
  signIn = (user) => {
    return this.post(`User/SignIn`, user);
  };
  signUp = (user) => {
    return this.post(`User/SignUp`, user);
  };
}
export const userService = new UserService();
