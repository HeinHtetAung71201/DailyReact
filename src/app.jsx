import Footer from "./Components/Footer";
import Header from "./Components/Header";

export function app(){
    const Categories=[
        "Electronic",
        "Jewelery",
        "Men's Clothing",
        "Women's Clothing"
    ]
    return(
       <>
        <Header/>
        <section>
            <p className="text-gray-500 px-5 mb-3">
            Product Categories
            </p>
            <div>
                {Categories.map(cates=>(<button className="border mx-4 px-5 py-2">{cates}</button>))}
            </div>
        </section>
        <Footer/>
       </>
       
       
    );
}