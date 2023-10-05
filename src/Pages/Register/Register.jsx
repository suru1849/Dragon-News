import { Link } from "react-router-dom";
import NavBar from "../../Components/Header/NavBar/NavBar";

const Register = () => {
  const handleRegister = (event) => {
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
              <h1 className="text-4xl font-semibold">Register Your Account</h1>
            </div>
            <hr className="border-1 border-black w-full" />
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleRegister}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name="photoUrl"
                    placeholder="Photo Url"
                    className="input input-bordered"
                  />
                </div>
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
                </div>
                <div className="flex gap-1">
                  <input type="checkbox" name="checkBox" required />
                  <p>Accept Term & Conditions</p>
                </div>
                <div className="form-control mt-6">
                  <button
                    style={{ background: "#403F3F" }}
                    className="btn btn-primary"
                  >
                    Register
                  </button>
                </div>
                <p className="text-center">
                  Already have an account?{" "}
                  <span className="text-red-600">
                    <Link to="/login">Login</Link>
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

export default Register;
