import { useContext } from "react";
import { AuthContext } from "./useAuthProvider";

export const useAuth = () => {
  const { loginState, signUpState, setLoginState, setSignUpState, user, setUser } =
    useContext(AuthContext);

  return {
    loginState,
    signUpState,
    setLoginState,
    setSignUpState,
    user,
    setUser
  };
};

export default useAuth;