import {
  FiUser,
  FiMessageSquare,
  FiHeart,
  FiShoppingCart,
} from "react-icons/fi";
const Header = () => {

  return (
    <header className="bg-white border-b">
      <div className="container h-[86px] flex items-center justify-between gap-8">

        {/* Logo */}
       <div className="flex items-center gap-2 cursor-pointer">

  <div className="w-11 h-11 rounded-lg bg-[#0D6EFD] flex items-center justify-center text-white text-2xl font-bold">
    B
  </div>

  <div>
    <h2 className="text-2xl font-bold text-[#0D6EFD] leading-none">
      Brand
    </h2>
  </div>

</div>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-[665px] mx-4">

          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-blue-500 px-4 py-2 rounded-l-md outline-none"
          />

          <select className="border-t border-b border-blue-500 px-3">
            <option>All category</option>
          </select>

          <button className="bg-blue-600 text-white px-6 rounded-r-md">
            Search
          </button>

        </div>

        {/* Right Icons */}
        <div className="flex gap-6">

          <div>Profile</div>

          <div>Message</div>

          <div>Orders</div>

          <div>Cart</div>

        </div>

      </div>
    </header>
  );
};

export default Header;