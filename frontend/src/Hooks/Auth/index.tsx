import { useContext } from "react";
import { AuthContext } from "./useAuthProvider";

export const useAuth = () => {
  const { loginState, signUpState, updateLoginState, updateSignUpState } =
    useContext(AuthContext);

  return {
    loginState,
    signUpState,
    updateLoginState,
    updateSignUpState,
  };
};

export default useAuth;