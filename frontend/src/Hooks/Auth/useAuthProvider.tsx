import React, { useCallback, useState, ReactChildren, ReactChild } from "react";

interface IAuthContext {
  loginState: {
    email: string;
    password: string;
  };
  signUpState: {
    name: string;
    lastname: string;
    email: string;
    password: string;
    gender: number;
  };
  updateLoginState: (email: string, password: string) => void;
  updateSignUpState: (
    name: string,
    lastname: string,
    email: string,
    password: string,
    gender: number
  ) => void;
}

const initialState: IAuthContext = {
  loginState: { email: "", password: "" },
  updateLoginState: () => {},
  signUpState: {
    name: "",
    lastname: "",
    email: "",
    password: "",
    gender: 1,
  },
  updateSignUpState: () => {},
};
export const AuthContext = React.createContext(initialState);

interface IAuthProviderProps {
  children: ReactChildren | ReactChild;
}
const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [signUpState, setSignUpState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    gender: 1,
  });
  const updateLoginState = (email: string, password: string) =>
    useCallback(
      (email: string, password: string) =>
        setLoginState({
          email,
          password,
        }),
      []
    );
  const updateSignUpState = (
    name: string,
    lastname: string,
    email: string,
    password: string,
    gender: number
  ) =>
    useCallback(
      (
        name: string,
        lastname: string,
        email: string,
        password: string,
        gender: number
      ) =>
        setSignUpState({
          name,
          password,
          lastname,
          gender,
          email,
        }),
      []
    );
  const contextValue: IAuthContext = {
    loginState,
    updateLoginState,
    signUpState,
    updateSignUpState,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
