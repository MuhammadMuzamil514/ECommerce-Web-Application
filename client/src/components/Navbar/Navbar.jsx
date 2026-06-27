return (
  <nav className="bg-white border-b border-[#DEE2E7]">
    <div className="container h-12 flex items-center justify-between">

      {/* Left Menu */}

      <div className="flex items-center gap-5 overflow-x-auto whitespace-nowrap scrollbar-hide">

        <button className="flex items-center gap-2 font-medium text-[15px] hover:text-[#0D6EFD]">
          ☰
          <span>All category</span>
        </button>

        <a href="#" className="text-[15px] hover:text-[#0D6EFD]">
          Hot offers
        </a>

        <a href="#" className="text-[15px] hover:text-[#0D6EFD]">
          Gift boxes
        </a>

        <a href="#" className="text-[15px] hover:text-[#0D6EFD]">
          Projects
        </a>

        <a href="#" className="text-[15px] hover:text-[#0D6EFD]">
          Menu item
        </a>

      </div>

      {/* Right */}

      <div className="hidden lg:flex items-center gap-8">

        <button className="text-[15px] text-gray-600 hover:text-[#0D6EFD]">
          Help ▼
        </button>

        <button className="text-[15px] text-gray-600 hover:text-[#0D6EFD]">
          Ship to 🇺🇸 ▼
        </button>

      </div>

    </div>
  </nav>
);