
import ServiceCard from "./ServiceCard"
import Link from "next/link"

const services = [
    {
        id: 1,
        icon: "/handshake.png",
        name: "Consulting Services",
        image: "/Consulting-Services.jpg",
        optionalImages: [
            "/Consulting-Services(1).jpg",
            "/Consulting-Services(2).jpg",
        ],
        description: "Abali Energy Consulting Services in the oil and gas industry offers strategic advisory and operational expertise to optimize your energy investments.", 
    },
    {
        id: 2,
        icon: "/bar-chart.png",
        name: "Brokerage Services",
        image: "/Brokerage-Services.jpg",
        optionalImages: [
            "/Brokerage-Services(1).jpg",
            "/Brokerage-Services(2).jpg",
        ],
        description: "Abali Energy Brokerage Services in the oil and gas industry offers expert facilitation of transactions, connecting buyers and sellers of oil, natural gas, and related commodities.", 
    }, 
    {
        id: 3,
        icon: "/oil.png",
        name: "Import and Export of crude oil",
        image: "/Import-Export-Services.jpg",
        optionalImages: [
            "/Import-Export-Services(1).jpg",
            "/Import-Export-Services(2).jpg",
        ],
        description: "Abali Energy Import and Export Services in the oil and gas industry specialize in the global trade of crude oil, facilitating seamless cross-border transactions.", 
    },
]


const Services = () => {
    return (
        <div className="lg:h-[115vh] h-[170vh] font-asap relative top-0 left-0 w-full"
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