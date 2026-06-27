const Navbar = () => {
  return (
    <nav className="bg-white border-b">

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex gap-6">

          <button>☰ All category</button>

          <a href="#">Hot offers</a>

          <a href="#">Gift boxes</a>

          <a href="#">Projects</a>

          <a href="#">Menu item</a>

        </div>

        <div className="flex gap-6">

          <button>Help ▼</button>

          <button>Ship to 🇺🇸 ▼</button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;