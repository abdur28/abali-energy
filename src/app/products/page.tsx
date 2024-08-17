import Header from "@/components/Header"
import ProductCard from "@/components/ProductCard"

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

const ProductsPage = () => {
    return (
        <div>
            <Header text="Our Products" backgroundImage="https://media.istockphoto.com/id/586921250/photo/crude-oil-barrels.jpg?s=612x612&w=0&k=20&c=_ffA9C5lDqTa14_r4TJJTKsLSjRYiT8_uGZRwVNKhZM=" />
            <div className="flex flex-col w-full h-full items-center mt-10 lg:px-28 px-12">
                <h1 className="text-lg font-asap ">In Abali Energy, we offer a wide range of products to meet your needs. Our products are designed to meet the unique needs of our clients. With our extensive network of suppliers and partners, we can help you find the right product for your needs. We are committed to providing high-quality products that are safe, reliable, and efficient. We also offer a range of services to support our products, including technical support, maintenance, and repair. Whether you are looking for a specific product or need help finding the right solution, we are here to help. Contact us today to learn more about our products and services. </h1>
            </div>
            <div className="flex flex-row flex-wrap w-full h-full items-center justify-center p-20  gap-10 ">
                {products.map((product, index) => (
                    <ProductCard key={index} productToString={JSON.stringify(product)} />
                ))}
            </div>  
        </div>
    )
} 

export default ProductsPage