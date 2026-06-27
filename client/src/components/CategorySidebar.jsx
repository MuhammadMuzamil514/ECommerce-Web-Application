function CategorySidebar(){

const categories=[

"Automobiles",

"Clothes and wear",

"Home interiors",

"Computer and tech",

"Tools equipment",

"Sports and outdoor",

"Animal and pets",

"Machinery tools",

"More category"

]

return(

<div>

{

categories.map((item,index)=>(

<div

key={index}

className={`p-3 rounded cursor-pointer hover:bg-blue-100 ${index===0?"bg-blue-100":""}`}

>

{item}

</div>

))

}

</div>

)

}

export default CategorySidebar;