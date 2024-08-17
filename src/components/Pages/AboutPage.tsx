'use client'

import AboutCard from "@/components/AboutCard"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const data = [
    {
        id: 1,
        title: "Our Mission",
        icon: "/target.png",
        description: "Abali Energy aims to  distribute natural gas and petroleum products in an environmentally friendly manner, supporting communities through logistics and consulting."
    },
    {
        id: 2,
        title: "Our Vision",
        icon: "/eye.png",
        description: "We strive to empower communities with affordable, clean, and efficient energy solutions while researching innovative green energy alternatives to enhance quality of life."
    },
    {
        id: 3,
        title: "Our Values",
        icon: "/values.png",
        description: "Community and environmental health are our top priorities. We emphasize teamwork, transparency, and a commitment to serving the needs of the local population."
    },
]

const team = [
    {
        id: 1,
        name: "John Doe",
        role : "Chief Executive Officer",
        image: "https://media.istockphoto.com/id/991802392/photo/with-unfaltering-dedication-you-can-go-far-too.jpg?s=612x612&w=0&k=20&c=sc9aOuRFix1omGDain7gFo-DnC7yoxM-7To5Ve4H7dM="
    },
    {
        id: 2,
        name: "Jane Doe",
        role : "Chief Operating Officer",
        image: "https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U="
    },
    {
        id: 3,
        name: "John Smith",
        role : "Chief Technology Officer",
        image: "https://media.istockphoto.com/id/936278022/photo/executive-senior-businessman-portrait.jpg?s=612x612&w=0&k=20&c=LIfPCNAtOrdL3PnDZRSzNU3myXVtt9shfJerzh4Wwdg="
    },
]



const AboutPage = () => {
    return (
        <div>
            <div className="flex flex-col w-full h-full p-10 font-asap gap-20">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Abali Energy</h1>
                        <p>
                            Abali Energy is a native and unified oil and gas corporation dedicated to delivering sustainable energy solutions.
                            The company focuses on providing clean and efficient energy to communities, enhancing their quality of life.    
                            Abali Energy&rsquo;s mission is to collaborate with stakeholders in distributing natural gas and petroleum products sustainably.
                            The vision emphasizes empowering communities with affordable energy while pursuing innovative green energy alternatives.
                        </p>
                        <p>
                        Abali Energy is committed to delivering sustainable and efficient energy solutions that empower communities and support environmental well-being. Our focus on responsible practices allows us to meet today's energy demands while protecting resources for future generations. We invite stakeholders, partners, and communities to collaborate with us and explore ways we can work together for a sustainable energy future.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/177743945/photo/offshore-rig-in-twilight.jpg?s=612x612&w=0&k=20&c=xB4_3xsxLqD6s4e6dZaBgSmpC0BW_0nNpkf62j6Evd0="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-20 lg:px-10">
                    {data.map((item) => (
                        <AboutCard
                            key={item.id}
                            aboutToString={JSON.stringify(item)}
                        />
                    ))}
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                <   div className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/2154824393/ru/%D1%84%D0%BE%D1%82%D0%BE/team-inspection-engineers-working-with-laptop-of-oil-factory-and-gas-refinery-plant-industry.jpg?s=612x612&w=0&k=20&c=63HCEllaxV1ztd38t79hpg1hjgoMoL-35hEWmA_SoL0="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Services</h1>
                        <p>
                            Abali Energy provides oil and gas consulting services throughout Africa, helping clients navigate the complexities of the industry and make informed decisions.
                            The company acts as a broker in the oil and gas sector, facilitating transactions and ensuring that clients achieve the best possible outcomes.
                            Abali Energy specializes in the import and export of crude oil, leveraging its extensive network to source and distribute high-quality products efficiently.
                            The commitment to sustainability is reflected in all services, with a focus on environmentally friendly practices and community empowerment.
                        </p>
                        <Link href="/services" className="bg-primary w-max px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Learn More</Link>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Products</h1>
                        <p>
                            Abali Energy offers a wide range of high-quality petroleum products, sourced from refineries and suppliers around the world. The company has established a strong network of logistics and distribution channels, ensuring efficient and timely delivery of products to customers. The product range includes gasoline, diesel fuel, aviation turbine fuel, kerosene, and lubricants, as well as liquefied petroleum gas (LPG). Each product is carefully selected to meet the specific needs of customers, with a focus on performance, safety, and environmental sustainability. Abali Energy is committed to providing products that meet the highest standards of quality and reliability, supported by comprehensive technical support and customer service.
                        </p>
                        <Link href="/products" className="bg-primary w-max  px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Explore More</Link>
                    </div>
                    <div className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/586921250/photo/crude-oil-barrels.jpg?s=612x612&w=0&k=20&c=_ffA9C5lDqTa14_r4TJJTKsLSjRYiT8_uGZRwVNKhZM="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                <   div className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/1216409748/photo/aerial-view-of-oil-refinery-at-sunset.webp?b=1&s=612x612&w=0&k=20&c=jw-rm5rOPsh8la6sj18dvpzIVSKsP2Zsalj8dOX404s="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Location</h1>
                        <p>
                            Abali Energy is located vastly in Africa with headquarters in Aba, Nigeria. With its rich oil and gas history, Abali Energy has a proven track record of delivering reliable and efficient solutions.
                            The company has established a strong network of logistics and distribution channels, ensuring efficient and timely delivery of products to customers.
                        </p>
                        <Link href="/about/location" className="bg-primary w-max px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Explore More</Link>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-10 lg:px-10">
                    <h1 className="text-3xl font-semibold text-center">Our Unique Value Proposition</h1>
                    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 md:text-left">
                            <h3 className="text-2xl font-semibold">Seamless Services</h3>
                            <ul className="list-disc list-inside">
                                <li>Integrated solutions streamline the oil and gas supply chain.</li>
                                <li>Responsive customer support enhances client satisfaction.</li>
                                <li>Timely delivery and efficient logistics ensure reliability.</li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 md:text-left">
                            <h3 className="text-2xl font-semibold">Commitment to Sustainability</h3>
                            <ul className="list-disc list-inside">
                                <li>Focus on environmentally friendly practices in operations.</li>
                                <li>Investing in green energy technologies for the future.</li>
                                <li>Community engagement initiatives promote local well-being.</li>
                            </ul>
                        </div>
                    </div>  
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-10">
                    <h1 className="text-3xl font-semibold text-center">Our Team</h1>
                    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-20 md:gap-0">
                        {team.map((member, index) => (
                            <div className="w-full md:w-1/3 h-full flex flex-col items-center justify-center px-10">
                                <div className="w-[300px] h-[300px] rounded-full border-4 overflow-hidden flex items-center justify-center mb-5">
                                <Image
                                    src={member.image}
                                    alt="Abali Energy"
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover"
                                />
                                </div>
                                <h3 className="text-2xl font-semibold">{member.name}</h3>
                                <p className="text-gray-500">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <Link
                    href={"/about/team"}
                    >
                        <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">
                            See More
                        </button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default AboutPage