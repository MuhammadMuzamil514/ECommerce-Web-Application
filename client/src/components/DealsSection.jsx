import ProductCard from "./ProductCard";

const products = [
  {
    title: "Smart Watches",
    discount: "-25%",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Laptops",
    discount: "-15%",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Cameras",
    discount: "-40%",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Headphones",
    discount: "-25%",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Smart Phones",
    discount: "-25%",
    image: "https://via.placeholder.com/150"
  }
];

function DealsSection() {

  return (

<section className="max-w-7xl mx-auto mt-8 bg-white border rounded">

<div className="grid grid-cols-6">

<div className="p-6 border-r">

<h2 className="text-2xl font-bold">

Deals & Offers

</h2>

<p className="text-gray-500 mt-2">

Hygiene Equipments

</p>

<div className="flex gap-2 mt-5">

<div className="bg-gray-700 text-white p-2 rounded">

04

</div>

<div className="bg-gray-700 text-white p-2 rounded">

13

</div>

<div className="bg-gray-700 text-white p-2 rounded">

34

</div>

<div className="bg-gray-700 text-white p-2 rounded">

56

</div>

</div>

</div>

{

products.map((item,index)=>(

<ProductCard

key={index}

title={item.title}

discount={item.discount}

image={item.image}

/>

))

}

</div>

</section>

)

}

export default DealsSection;