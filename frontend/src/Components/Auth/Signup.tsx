
export const Signup = (): JSX.Element => {
  return (
    <div className="container mt-5">
      <h3>Create Account</h3>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card px-5 py-5">
            <div className="form-data">
              <div className="mb-4">
                <span>Name </span>
                <input autoComplete="off" type="text" className="ms-5" />
              </div>
              <div className="mb-4">
                <span>Lastname </span>
                <input autoComplete="off" type="text" className="ms-3" />
              </div>
              
              <div className="mb-4">
                <span>Email </span>
                <input autoComplete="off" type="text" className="ms-5" />
              </div>
              <div className="mb-4">
                <span>Password</span>
                <input autoComplete="off" type="password" className="ms-3" />
              </div>
              
              <div className="mb-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="maleRadio"
                    value="option1"
                  />
                  <label className="form-check-label" htmlFor="maleRadio">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="femaleRadio"
                    value="option2"
                  />
                  <label className="form-check-label" htmlFor="femaleRadio">
                    Female
                  </label>
                </div>
              </div>
              <div className="mb-3">
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
