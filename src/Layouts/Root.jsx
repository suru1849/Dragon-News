import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Root = (props) => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

Root.propTypes = {};

export default Root;
