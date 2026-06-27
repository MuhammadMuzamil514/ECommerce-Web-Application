import ProductCard from "./ProductCard";

const products = [

{
title:"Soft Chair",
price:"19",
image:"https://via.placeholder.com/150"
},

{
title:"Lamp",
price:"19",
image:"https://via.placeholder.com/150"
},

{
title:"Kitchen",
price:"39",
image:"https://via.placeholder.com/150"
},

{
title:"Mixer",
price:"49",
image:"https://via.placeholder.com/150"
},

{
title:"Coffee Maker",
price:"99",
image:"https://via.placeholder.com/150"
},

{
title:"Plant",
price:"12",
image:"https://via.placeholder.com/150"
},

];

function HomeOutdoor(){

return(

<section className="max-w-7xl mx-auto mt-8">

<div className="grid grid-cols-5 bg-white border rounded">

<div className="bg-yellow-100 p-8">

<h2 className="text-3xl font-bold">

Home & Outdoor

</h2>

<button className="bg-white px-6 py-3 rounded mt-6">

Source Now

</button>

</div>

<div className="col-span-4 grid grid-cols-3">

{

products.map((item,index)=>(

<ProductCard

key={index}

title={item.title}

price={item.price}

image={item.image}

/>

))

}

</div>

</div>

</section>

)

}

export default HomeOutdoor;