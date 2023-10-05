import logo from "../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <img className="w-[471px] h-[60px] mt-12 mb-5 mx-auto" src={logo} />
      <p className="text-lg text-gray-500 font-normal">
        Journalism Without Fear or Favour
      </p>
      <p className="text-xl font-medium mt-2">
        {moment().format("dddd,")}
        <span className="text-gray-500">
          {moment().format(" MMMM D, YYYY")}
        </span>
      </p>
    </div>
  );
};

export default Header;
