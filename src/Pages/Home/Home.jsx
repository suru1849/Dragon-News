import PropTypes from "prop-types";
import Header from "../../Components/Header/Header";
import NavBar from "../../Components/Header/NavBar/NavBar";
import LeftSideBar from "../../Components/Shared/LeftSideBar/LeftSideBar";
import RightSideBar from "../../Components/Shared/RightSideBar/RightSideBar";
import Marquee from "react-fast-marquee";
import { Outlet } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      {/* Header */}
      <Header></Header>
      {/* Latest-news */}
      <div className="flex bg-gray-100 p-4 mt-8 mb-4">
        <button className="text-xl font-medium px-6 py-2 bg-red-700 text-white">
          Latest
        </button>
        <Marquee
          className="text-lg font-semibold ml-2"
          speed={200}
          pauseOnHover={true}
        >
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      {/* NavBar */}
      <NavBar></NavBar>
      {/* Left-side-bar */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="border">
          <LeftSideBar></LeftSideBar>
        </div>
        {/* Category-News */}
        <div className="col-span-2 border">
          <Outlet></Outlet>
        </div>
        {/* Rigth-side-bar */}
        <div className="border">
          <RightSideBar></RightSideBar>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
