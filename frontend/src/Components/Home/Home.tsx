import useAuth from "../../Hooks/Auth";
import { useHistory } from "react-router-dom";
export const Home = () => {
  const history = useHistory();
  const { user, setLoginState } = useAuth();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoginState({
        email: "",
        password: "",
    });
    history.push("/");
  }
  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card px-5 py-5">
              <div className="my-3">
                <h3>Hello:  {user.name} {user.lastName}</h3>
              </div>
              <button className="btn btn-dark w-100" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
