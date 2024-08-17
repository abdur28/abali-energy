import Image from "next/image"
import Slider from "./Slider/Slider"
import { link } from "fs"
import Link from "next/link"

const Hero = () => {
    const slides = [
        {
            id: 1,
            caption: "Providing Sustainable Solutions to Your Oil and Gas Business",
            buttonDescription: "Learn More",
            buttonLink: "/about",
            background: 'https://media.istockphoto.com/id/1757271699/photo/vibrant-sunset-sky-behind-an-offshore-oil-drilling-rig-off-the-coast-of-orange-county.webp?b=1&s=612x612&w=0&k=20&c=sjCjXp8DjHB_sWheKGH2yioIwJb1CG59EmDmhn3pzHQ='
        },
        {
            id: 2,
            caption: "Providing oil and gas consulting services throughout Africa, helping clients navigate the complexities of the industry and make informed decisions",
            buttonDescription: "Explore More",    
            buttonLink: "/services",
            background: "https://media.istockphoto.com/id/1403978838/photo/oil-and-gas-refinery-production-factory-workers-in-safety-equipment-walking-by-gas-pipes-and.webp?b=1&s=612x612&w=0&k=20&c=mhmELl_6FYN98lSPdaLXcs2MliWuy2CyLGd7Z9yhxdQ="
        },
        {
            id: 3,
            caption: "Providing high-quality products that meet the highest standards of quality and sustainability",
            buttonDescription: "Explore More",
            buttonLink: "/products",
            background: "https://media.istockphoto.com/id/586921250/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B0%D1%80%D1%80%D0%B5%D0%BB%D0%B5%D0%B9-%D1%81%D1%8B%D1%80%D0%BE%D0%B9-%D0%BD%D0%B5%D1%84%D1%82%D0%B8.jpg?s=612x612&w=0&k=20&c=trM2jFinDKl4537O-Dlmi71XFnHVvc7o6qsE0q5msPo="
        }
    ]

    return (
        <div className="flex flex-col h-screen font-asap">
            <Slider slides={JSON.stringify(slides)}/>
        </div>
    )
}

export default Hero