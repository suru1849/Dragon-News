import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideBar = () => {
  return (
    <div className="px-2">
      {/* login with */}
      <div className="mb-8">
        <h1 className="text-xl font-bold mb-5">Login With</h1>
        <div className="space-y-2">
          <button className="btn btn-outline btn-primary w-full">
            <FcGoogle className="text-lg"></FcGoogle>
            Google
          </button>
          <button className="btn btn-outline  w-full">
            <FaGithub className="text-lg"></FaGithub>
            Google
          </button>
        </div>
      </div>
      {/* Find us on */}
      <div className="mb-10">
        <h1 className="text-xl font-bold mb-5">Find Us On</h1>
        <div className="text-gray-500 font-medium">
          <a className="p-5 border flex items-center rounded-t-lg">
            <BsFacebook className="mr-3 text-blue-500"></BsFacebook>
            Facebook
          </a>
          <a className="p-5 border-x flex items-center">
            <BsInstagram className="mr-3 text-red-400"></BsInstagram>
            Instagram
          </a>
          <a className="p-5 border flex items-center rounded-b-lg">
            <BsTwitter className="mr-3 text-blue-500"></BsTwitter>
            Twitter
          </a>
        </div>
      </div>
      {/* Q-zone */}
      <div className="mb-8 bg-gray-100 py-3">
        <h1 className="text-xl font-bold  px-4">Q-Zone</h1>
        <div className="text-gray-500 font-medium px-1">
          <img className="w-full mb-5" src={qZone1} />
          <img className="w-full mb-5" src={qZone2} />
          <img className="w-ful mb-5" src={qZone3} />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
