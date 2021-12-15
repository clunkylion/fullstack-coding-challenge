import { Link } from "react-router-dom";
import useAuth from "../../Hooks/Auth";
import { Http } from "../../Lib/Http";
import Config from "../../Config";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
export const Signup = (): JSX.Element => {
  const history = useHistory();
  const { signUpState, setSignUpState } = useAuth();
  const { email, password, name, lastname, gender } = signUpState;
  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState({
      ...signUpState,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    if (name === "") {
      toast.error("Name is required");
      return;
    }
    if(name.length < 3){
      toast.error("Name must be at least 3 characters")
      return
    }
    if (email === "") {
      toast.error("Email is required");
      return;
    }
    if (password === "") {
      toast.error("Password is required");
      return;
    }
    if(password.length < 8){
      toast.error("Password must be at least 8 characters long");
      return;
    }
    if (gender === "") {
      toast.error("Gender is required");
      return;
    }
    try {
      let data = {
        email,
        gender,
        name,
        lastname,
        password,
      };
      let response = await Http.instance.post(
        `${Config.AUTH_API_URL}/signup`,
        data,
        {}
      );
      if(response?.data.error === true){
        toast.error(response?.data.message);
        return;
      }else{
        toast.success(response?.data.message, {duration: 3000});
        setSignUpState({
          email: "",
          password: "",
          name: "",
          lastname: "",
          gender: ''
        })
        history.push("/");
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSignUpState({
      name:'',
      email:'',
      gender:'',
      password: '',
      lastname:''
    })
  }, [])
  return (
    <div className="container mt-5">
      <h3>Create Account</h3>
      <div className="justify-content-end">
        <Link to={"/"}>Back to login</Link>
      </div>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <div className="form-data">
              <div className="mb-4">
                <span>Name </span>
                <input
                  autoComplete="off"
                  type="text"
                  className="ms-5"
                  value={name}
                  name="name"
                  onChange={updateState}
                />
              </div>
              <div className="mb-4">
                <span>Lastname </span>
                <input
                  autoComplete="off"
                  type="text"
                  className="ms-3"
                  name="lastname"
                  value={lastname}
                  onChange={updateState}
                />
              </div>

              <div className="mb-4">
                <span>Email </span>
                <input
                  autoComplete="off"
                  type="text"
                  className="ms-5"
                  value={email}
                  name="email"
                  onChange={updateState}
                />
              </div>
              <div className="mb-4">
                <span>Password</span>
                <input
                  autoComplete="off"
                  type="password"
                  className="ms-3"
                  name="password"
                  value={password}
                  onChange={updateState}
                />
              </div>

              <div className="mb-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    checked={gender === "male"}
                    id="maleRadio"
                    value="male"
                    onChange={updateState}
                  />
                  <label className="form-check-label" htmlFor="maleRadio">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    checked={gender === "female"}
                    id="femaleRadio"
                    value="female"
                    onChange={updateState}
                  />
                  <label className="form-check-label" htmlFor="femaleRadio">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <button className="btn btn-dark w-100" onClick={handleSubmit}>
                  Login
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
