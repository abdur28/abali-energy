import Header from "@/components/Header"
import SingleItemPage from "@/components/Pages/SingleItemPage"
import { notFound } from "next/navigation"

const Page = ({ params }: { params: { slug: string }}) => {
    const id = params.slug

    const products = [
        {
            id: 1,
            name: "Gasoline (PMS)",
            description: "High-quality gasoline suitable for various vehicles, ensuring optimal performance and efficiency.",
            optionalImages: [
                "/gasoline.jpg",
                "/gasoline(1).jpg",
                "/gasoline(2).jpg",
            ]
        },
        {
            id: 2,
            name: "Diesel Fuel",
            description: "Premium diesel fuel designed for heavy-duty vehicles and machinery, providing reliable power and efficiency.",
            optionalImages: [
                "/diesel.jpg",
                "/diesel(1).jpg",
            ]
        },
        {
            id: 3,
            name: "Aviation Turbine Fuel",
            description: "Specialized fuel for aircraft engines, meeting stringent safety and performance standards.",
            optionalImages: [
                "/aviation-fuel.jpg",
                "/aviation-fuel(1).jpg",
            ]
        },
        {
            id: 4,
            name: "Liquid Petroleum Gas (LPG)",
            description: "Versatile energy source used for heating, cooking, and as fuel for vehicles, promoting cleaner energy use.",    
            optionalImages: [
                "/petroleum-gas.jpg",
                "/petroleum-gas(1).jpg",
                "/petroleum-gas(2).jpg",
            ]
        },
        {
            id: 5,
            name: "Kerosene",
            description: "Widely used as a fuel for lamps and heaters, as well as in aviation, known for its high energy content.",
            optionalImages: [
                "/kerosine.jpg",
                "/kerosine(1).jpg",
            ]
        },
        {
            id: 6,
            name: "Lubricant",
            description: "Quality lubricants designed to reduce friction and wear in engines and machinery, extending their lifespan.",
            optionalImages: [
                "/lubricant.jpg",
                "/lubricant(1).jpg",
                "/lubricant(2).jpg",
            ]
        }
    ]

    const product = products.find(product => product.id === parseInt(id))

    if (!product) {
        return notFound();
    }

    return (
        <div>
            <Header text="Our Products" backgroundImage="https://media.istockphoto.com/id/586921250/photo/crude-oil-barrels.jpg?s=612x612&w=0&k=20&c=_ffA9C5lDqTa14_r4TJJTKsLSjRYiT8_uGZRwVNKhZM=" />
            <SingleItemPage itemToString={JSON.stringify(product)} />
        </div>
    )
}

export default Page