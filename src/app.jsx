export function app(){
    const Categories=[
        "Electronic",
        "Jewelery",
        "Men's Clothing",
        "Women's Clothing"
    ]
    return(
        <div>
            <p className="text-gray-500">
            Product Categories
            </p>
            <div>
                {Categories.map(cates=>(<button className="border mx-4 px-5 py-2">{cates}</button>))}
            </div>
        </div>
       
       
    );
}