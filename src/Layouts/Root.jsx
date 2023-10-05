import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Outlet></Outlet>
      <Toaster />
    </div>
  );
};

Root.propTypes = {};

export default Root;
