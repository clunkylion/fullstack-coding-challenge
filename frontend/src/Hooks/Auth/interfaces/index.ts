import { ReactChild, ReactChildren } from "react";
export interface IAuthProviderProps {
  children: ReactChildren | ReactChild;
}
export interface ILoginState {
  email: string;
  password: string;
}
export interface ISignUpState {
  name: string;
  lastname: string;
  email: string;
  password: string;
  gender: string;
}
export interface IUserState {
  _id: string;
  name: string;
  lastName: string;
  gender: string;
  email: string;
  password: string;
}
export interface IAuthContext {
  loginState: ILoginState;
  signUpState: ISignUpState;
  setLoginState: (data: ILoginState) => void;
  setSignUpState: (data: ISignUpState) => void;
  user: IUserState;
  setUser: (data: IUserState) => void;
}
