import { Link } from "react-router-dom";
import NavBar from "../../Components/Header/NavBar/NavBar";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log(form.get("email"), form.get("password"));

    // clear target
    event.target.reset();
  };
  return (
    <div className="my-10">
      <NavBar></NavBar>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center ">
              <h1 className="text-4xl font-semibold">Login Your Account</h1>
            </div>
            <hr className="border-1 border-black w-full" />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button
                    style={{ background: "#403F3F" }}
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
                <p className="text-center">
                  Don't have an account?{" "}
                  <span className="text-red-600">
                    <Link to="/register">Register</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
