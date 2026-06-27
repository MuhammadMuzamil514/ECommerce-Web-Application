import { categories } from "./heroData";

const CategorySidebar = () => {
  return (
    <div className="bg-white rounded-lg p-3 shadow-sm">

      {categories.map((item, index) => (
        <button
          key={index}
          className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-100 transition"
        >
          {item}
        </button>
      ))}

    </div>
  );
};

export default CategorySidebar;