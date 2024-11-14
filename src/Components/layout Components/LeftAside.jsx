import { useEffect, useState } from "react";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategories(data.data.news_category));
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="font-semibold mb-4 text-lg text-gray-700">All Categories</h2>
      
      <div className="flex flex-col gap-2">
        {categories.map(category => (
          <button
            key={category.category_id}
            className={`btn px-4 py-2 rounded ${
              activeCategory === category.category_id ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveCategory(category.category_id)}
          >
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
