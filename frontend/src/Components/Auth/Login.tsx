export const Login = (): JSX.Element => {
  return (
    <div className="container mt-5">
        <h3>Welcome</h3>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card px-5 py-5" id="form1">
            <div className="form-data">
              <div className="mb-4">
                <span>Email  </span>
                <input autoComplete="off" type="text" className="ms-5" />
                
              </div>    
              <div className="mb-4">
                <span>Password</span>
                <input autoComplete="off" type="password" className="ms-3"/>
                
              </div>
              <div className="mb-3">
                {" "}
                <button className="btn btn-dark w-100">Login</button>{" "}
              </div>
              <div className="mt-3">
              <span>Signup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
