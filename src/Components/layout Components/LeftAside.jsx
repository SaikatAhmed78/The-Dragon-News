import { NavLink} from "react-router-dom";
import { useEffect, useState } from "react";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="font-semibold mb-4 text-xl text-gray-700">All Categories</h2>
      <div className="flex flex-col gap-2">
        {categories.map(category => (
          <NavLink
            key={category.category_id}
            to={`/category/${category.category_id}`}
            className={({ isActive }) =>
              `btn px-4 py-2 rounded ${
                isActive ? "bg-blue-500 hover:bg-blue-700  text-white" : "bg-gray-200 text-gray-700"
              }`
            }
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
