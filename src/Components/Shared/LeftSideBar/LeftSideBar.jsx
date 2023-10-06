import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./LeftSideBar.css";

const LeftSideBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="px-2">
      <h1 className="text-xl font-bold mb-5">All Category</h1>
      {/* Category container */}
      <div className="ml-4" id="CategoriesContainer">
        {categories?.map((category) => (
          <NavLink
            key={category.id}
            className="text-xl font-semibold block rounded-md mb-2"
            to={`/${category.name}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideBar;
