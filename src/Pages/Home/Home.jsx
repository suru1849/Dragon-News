import PropTypes from "prop-types";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Header/NavBar/NavBar";
import LeftSideBar from "../../Components/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/Shared/RightSideBar/RightSideBar";

const Home = (props) => {
  return (
    <div>
      <div className="text-center">
        <Header></Header>
      </div>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="col-span-2 border">
          <div className="text-xl">News Coming Soon</div>
        </div>
        <div className="border">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
