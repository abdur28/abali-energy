import Image from "next/image"
import Slider from "./Slider/Slider"
import { link } from "fs"
import Link from "next/link"

const Hero = () => {
    const slides = [
        {
            id: 1,
            caption: "Providing sustainable solutions to your oil and gas business",
            buttonDescription: "Learn More",
            buttonLink: "/about",
            background: "/hero.jpg"
        },
        {
            id: 2,
            caption: "A unified oil and gas business",
            buttonDescription: "Explore More",    
            buttonLink: "/services",
            background: "https://gasandmoney.ru/wp-content/uploads/2020/12/shutterstock_727266628.jpg"
        },
        {
            id: 3,
            caption: "Empowering communities through the provision of clean and efficient energy",
            buttonDescription: "Explore More",
            buttonLink: "/products",
            background: "https://gazo.ru/upload/iblock/ef5/ef549ce1879937d4049360eb62b72784.jpg"
        }
    ]

    return (
        <div className="flex flex-col h-screen font-asap">
            <Slider slides={JSON.stringify(slides)}/>
        </div>
    )
}

export default Hero