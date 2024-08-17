import { describe } from "node:test"
import ServiceCard from "./ServiceCard"
import Link from "next/link"

const services = [
    {
        id: 1,
        name: "Trans-Continental",
        description: "Abali Energy provides oil and gas consulting services throughout Africa, helping clients navigate the complexities of the industry and make informed decisions.",
        shortDescription: "Oil and gas consulting services throughout Africa",
        icon: "/africa.png"
    },
    {
        id: 2,
        name: "Investment",
        description: "The company acts as a broker in the oil and gas sector, facilitating transactions and ensuring that clients achieve the best possible outcomes.",
        shortDescription: "Investing in the oil and gas sector",
        icon: "/handshake.png"
    }, 
    {
        id: 3,
        name: "Import & Export",
        description: "Abali Energy specializes in the import and export of crude oil, leveraging its extensive network to source and distribute high-quality products efficiently.",
        shortDescription: "Import and export of crude oil",
        icon: "/oil.png"
    },
    {
        id: 4,
        name: "Sustainability",
        description: "The commitment to sustainability is reflected in all services, with a focus on environmentally friendly practices and community empowerment.",
        shortDescription: "Sustainability in the oil and gas industry",
        icon: "/eco.png"
    }
]


const Services = () => {
    return (
        <div className="lg:h-[115vh] h-[200vh] font-asap relative top-0 left-0 w-full"
        style={{
            backgroundColor: "#57993F",
            backgroundImage: "url('https://media.istockphoto.com/id/2154824393/ru/%D1%84%D0%BE%D1%82%D0%BE/team-inspection-engineers-working-with-laptop-of-oil-factory-and-gas-refinery-plant-industry.jpg?s=612x612&w=0&k=20&c=63HCEllaxV1ztd38t79hpg1hjgoMoL-35hEWmA_SoL0=')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
           <div
           className="absolute top-0 left-0 h-full w-full"
           style={{
               backgroundColor: "#57993F",
               opacity: 0.3
           }}
           >
           </div>
           <div className="absolute top-0 left-0 h-full w-full z-10 ">
                <div className="flex flex-col items-center p-10 mt-10 gap-20">
                    <h1 className="text-4xl text-center text-white">Our Services</h1>
                    <div className="flex md:flex-row flex-col md:flex-wrap gap-5 justify-center items-center md:px-10">
                        {services.map((service, index) => (
                            <ServiceCard key={index} serviceToString={JSON.stringify(service)} />
                        ))}
                    </div>
                    <Link href="/services">
                        <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white hover:bg-secondary">
                            Explore More
                        </button>
                    </Link>
                </div>        
            </div>   
        </div>
    )
}

export default Services