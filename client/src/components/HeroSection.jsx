import CategorySidebar from "./CategorySidebar";

function HeroSection(){

return(

<section className="max-w-7xl mx-auto mt-6 bg-white rounded border p-4">

<div className="grid grid-cols-12 gap-4">

<div className="col-span-2">

<CategorySidebar/>

</div>

<div className="col-span-8">

<div className="h-[380px] rounded bg-gradient-to-r from-green-200 to-cyan-200 flex items-center">

<div className="ml-10">

<p className="text-4xl">

Latest Trending

</p>

<h1 className="text-5xl font-bold mt-2">

Electronic Items

</h1>

<button className="bg-white px-8 py-3 rounded mt-6">

Learn More

</button>

</div>

</div>

</div>

<div className="col-span-2 space-y-3">

<div className="bg-blue-100 p-4 rounded">

<h3 className="font-semibold">

Hi User

</h3>

<button className="bg-blue-600 text-white w-full py-2 mt-3 rounded">

Join now

</button>

<button className="bg-white border w-full py-2 mt-2 rounded">

Log in

</button>

</div>

<div className="bg-orange-400 p-4 rounded text-white">

Get US $10 off

</div>

<div className="bg-cyan-400 p-4 rounded text-white">

Send Quotes

</div>

</div>

</div>

</section>

)

}

export default HeroSection;