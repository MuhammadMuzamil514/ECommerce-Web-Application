import {
FaUser,
FaCommentDots,
FaHeart,
FaShoppingCart,
FaBars
} from "react-icons/fa";

function Navbar(){

return(

<>

<header className="bg-white border-b">

<div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">

<div className="flex items-center gap-3">

<div className="bg-blue-600 text-white w-12 h-12 rounded flex items-center justify-center text-xl">

🛍

</div>

<h2 className="text-3xl font-bold text-blue-500">

Brand

</h2>

</div>

<div className="hidden md:flex flex-1 mx-10">

<input

className="flex-1 border border-blue-500 px-4 py-3 rounded-l"

placeholder="Search"

/>

<select className="border-y border-blue-500 px-4">

<option>

All category

</option>

</select>

<button className="bg-blue-600 text-white px-8 rounded-r">

Search

</button>

</div>

<div className="hidden md:flex gap-8 text-gray-600">

<div className="text-center">

<FaUser className="mx-auto"/>

<p className="text-xs mt-1">

Profile

</p>

</div>

<div className="text-center">

<FaCommentDots className="mx-auto"/>

<p className="text-xs mt-1">

Message

</p>

</div>

<div className="text-center">

<FaHeart className="mx-auto"/>

<p className="text-xs mt-1">

Orders

</p>

</div>

<div className="text-center">

<FaShoppingCart className="mx-auto"/>

<p className="text-xs mt-1">

Cart

</p>

</div>

</div>

</div>

</header>

<div className="bg-white border-b">

<div className="max-w-7xl mx-auto flex gap-8 px-6 py-4">

<div className="flex items-center gap-2 font-semibold">

<FaBars/>

All Category

</div>

<div>Hot offers</div>

<div>Gift boxes</div>

<div>Projects</div>

<div>Menu item</div>

<div>Help</div>

</div>

</div>

</>

)

}

export default Navbar;