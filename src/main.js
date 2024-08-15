import { createElement } from "react"
import "./index.css"
import { createRoot } from 'react-dom/client'
import { app } from "./app";

const Categories=[
    "Electronic",
    "Jewelery",
    "Men's Clothing",
    "Women's Clothing"
]
console.log(Categories);
//ReactView
const DOMroot=document.getElementById("root");
//createElement(element,props,...children)
// const ReactRoot= createElement("div",{id: "categoryName",className:""},
//     createElement("div",null,createElement("p",null,"Product Categories")),
//     Categories.map((Cates)=>createElement("button",null,Cates))

// );
// console.log(ReactRoot);

//ReactRender to display reactNode to browser
createRoot(DOMroot).render( app() );
// render(app());


// console.log(createElement("p",null,"Product Categories:"))
// const root=document.getElementById("root");
// var title= document.createElement("p");
// title.innerText="Product Categories";
// title.classList.add("text-3xl","text-gray-600")
// root.append(title);
// const buttons=(CategoryName)=>{
//     var btn=document.createElement("button");
//     btn.innerText=CategoryName;
//     btn.classList.add("border","px-4","py-2","mx-7",);
//     return btn;
// }
// Categories.forEach(Cates => {
//    // console.log(element);
//     root.append(buttons(Cates));
// });

