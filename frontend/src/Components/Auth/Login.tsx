import { useEffect } from "react";
import useAuth from "../../Hooks/Auth";
import { Http } from "../../Lib/Http";
import Config from "../../Config";
import { useHistory, Link } from "react-router-dom";
import toast from 'react-hot-toast'
export const Login = (): JSX.Element => {
  const { setLoginState, loginState, setUser } = useAuth();
  const history = useHistory();
  const { email, password } = loginState;
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if(email === '' || password === ''){
      toast.error('Please fill all fields')
      return
    }
    try {
      let data = {
        email,
        password,
      };
      let response = await Http.instance.post(
        `${Config.AUTH_API_URL}/signin`,
        data,
        {}
      );
      if (!response) {
        toast.error("Invalid credentials", {
            duration: 2000,
        });
      }
      if (response?.status === 200) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        setUser(user);
        history.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setLoginState({
      email: "",
      password: "",
    });
  }, [])
  return (
    <div className="container mt-5">
      <h3>Welcome</h3>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
            <div className="form-data">
              <div className="mb-4">
                <span>Email </span>
                <input
                  type="text"
                  className="ms-5"
                  name="email"
                  value={email}
                  onChange={updateState}
                />
              </div>
              <div className="mb-4">
                <span>Password</span>
                <input
                  type="password"
                  className="ms-3"
                  name="password"
                  value={password}
                  onChange={updateState}
                />
              </div>
              <div className="mb-3">
                {" "}
                <button className="btn btn-dark w-100" onClick={handleSubmit}>
                  Login
                </button>{" "}
              </div>
              <div className="mt-3">
                <Link to={'/signup'}>Signup</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
