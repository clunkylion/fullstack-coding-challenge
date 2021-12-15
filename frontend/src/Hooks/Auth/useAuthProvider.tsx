import React, { useState } from "react";
import {IAuthProviderProps,ILoginState,ISignUpState,IUserState, IAuthContext} from './interfaces'

const initialState: IAuthContext = {
  loginState: { email: "", password: "" },
  setLoginState: () => {},
  signUpState: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    gender: '',
  },
  setSignUpState: () => {},
  user: {
    _id: '',
    name: '',
    gender: '',
    email: '',
    lastName: '', 
    password: ''
  },
  setUser: () => {}
};
export const AuthContext = React.createContext(initialState);


const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loginState, setLoginState] = useState<ILoginState>({
    email: "",
    password: "",
  });
  const [signUpState, setSignUpState] = useState<ISignUpState>({
    name: "",
    lastname: "",
    email: "",
    password: "",
    gender: '',
  });
  const [user, setUser] = useState<IUserState>({
    _id: '',
    name: '',
    gender: '',
    email: '',
    lastName: '', 
    password: ''
  })
  const contextValue: IAuthContext = {
    loginState,
    setLoginState,
    signUpState,
    setSignUpState,
    user,
    setUser
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
