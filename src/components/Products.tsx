import Link from "next/link"
import ProductCard from "./ProductCard"

const products = [
    {
        id: 1,
        name: "Gasoline (PMS)",
        description: "High-quality gasoline suitable for various vehicles, ensuring optimal performance and efficiency.",
    },
    {
        id: 2,
        name: "Diesel Fuel",
        description: "Premium diesel fuel designed for heavy-duty vehicles and machinery, providing reliable power and efficiency.",
    },
    {
        id: 3,
        name: "Aviation Turbine Fuel",
        description: "Specialized fuel for aircraft engines, meeting stringent safety and performance standards.",
    },
    {
        id: 4,
        name: "Liquid Petroleum Gas (LPG)",
        description: "Versatile energy source used for heating, cooking, and as fuel for vehicles, promoting cleaner energy use.",    
    },
    {
        id: 5,
        name: "Kerosene",
        description: "Widely used as a fuel for lamps and heaters, as well as in aviation, known for its high energy content.",
    },
    {
        id: 6,
        name: "Lubricant",
        description: "Quality lubricants designed to reduce friction and wear in engines and machinery, extending their lifespan.",
    }
]
const Products = () => {

    return (
        <div className="flex flex-col bg-primary/20">
            <div className="flex flex-col w-full h-full items-center p-10 mt-10 gap-10 text-center">
               <div>
                    <h1 className="text-4xl font-asap">Our Products</h1>
               </div>

               <div>
                    <p className="text-lg font-asap md:px-20 lg:px-40">Here in Abali Energy we offer a wide range of products to meet your needs. Our products are designed to meet the unique needs of our clients. With our extensive network of suppliers and partners, we can help you find the right product for your needs.</p>
               </div>

               {/* medium device */}
               <div className="hidden md:flex flex-row w-full h-full gap-10 flex-wrap justify-center items-center md:px-20 lg:px-0">
                    {products.slice(0, 4).map((product, index) => (
                        <ProductCard key={index} productToString={JSON.stringify(product)} />
                    ))}
               </div>

               {/* small device */}
               <div className="flex flex-col md:hidden w-full h-full gap-10 justify-center items-center">
                    {products.slice(0, 3).map((product, index) => (
                        <ProductCard key={index} productToString={JSON.stringify(product)} />
                    ))}
               </div>
               <div>
                    <Link href="/products">
                    <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white hover:bg-secondary">
                        Explore More
                    </button>
                    </Link>
               </div>
            </div>
        </div>
    )
}   

export default Products