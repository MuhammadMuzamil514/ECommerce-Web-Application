const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          Brand
        </div>

        {/* Search */}
        <div className="flex flex-1 max-w-xl mx-8">

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