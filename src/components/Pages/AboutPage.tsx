'use client'

import AboutCard from "@/components/AboutCard"
import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TeamSlider from "../Slider/TeamSlider"

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
    { id: 11, name: "Ayub Hassan Ulusow", position: "Environmental Advisor" },
    { id: 1, name: "Abshir Ali Mohamud", position: "Chief Executive Officer" },
    { id: 2, name: "Ahmed Abdiladif Mohamud", position: "Chief Operations Officer" },
    { id: 3, name: "Samir Adilevich Mirzoev", position: "Chief Technology Officer" },
    { id: 4, name: "Ana Gabriel Mileta", position: "HR Manager" },
    { id: 5, name: "Kumfo Kennedy Dzidefo", position: "Marketing Manager" },
    { id: 6, name: "Sayyid Nyangwara Mogaka", position: "Risk Assessment Manager" },
    { id: 7, name: "Kenneth Unda Mwahanga", position: "Health and Safety Manager" },
    { id: 8, name: "Emmanuel Mwazo Mwang'ombe", position: "Economics Advisor" },
    { id: 9, name: "Adongo Yakubu Ayinbota", position: "Energy Advisor" },
]

const aboutText = "Abali Energy is a leading provider of comprehensive energy solutions, specializing in the oil and gas, renewable energy, and broader energy sectors. With a commitment to innovation and sustainability, we deliver a wide range of services, including consulting, brokerage, and import-export operations, tailored to meet the unique needs of our clients. Our team of industry experts combines deep market knowledge with a global network, enabling us to offer strategic insights and practical solutions that drive efficiency, profitability, and growth. Whether navigating the complexities of the oil and gas industry or pioneering new paths in renewable energy, Abali Energy is dedicated to empowering our clients to achieve their energy goals with confidence and success."



const AboutPage = () => {
    return (
        <div>
            <div className="flex flex-col w-full h-full p-10 font-asap gap-20">
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Abali Energy</h1>
                        <p>
                          {aboutText}
                        </p>
                    </motion.div>
                    <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 h-full flex items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/177743945/photo/offshore-rig-in-twilight.jpg?s=612x612&w=0&k=20&c=xB4_3xsxLqD6s4e6dZaBgSmpC0BW_0nNpkf62j6Evd0="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
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
                    <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/2154824393/ru/%D1%84%D0%BE%D1%82%D0%BE/team-inspection-engineers-working-with-laptop-of-oil-factory-and-gas-refinery-plant-industry.jpg?s=612x612&w=0&k=20&c=63HCEllaxV1ztd38t79hpg1hjgoMoL-35hEWmA_SoL0="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Services</h1>
                        <p>
                            Abali Energy provides oil and gas consulting services throughout Africa, helping clients navigate the complexities of the industry and make informed decisions.
                            The company acts as a broker in the oil and gas sector, facilitating transactions and ensuring that clients achieve the best possible outcomes.
                            Abali Energy specializes in the import and export of crude oil, leveraging its extensive network to source and distribute high-quality products efficiently.
                            The commitment to sustainability is reflected in all services, with a focus on environmentally friendly practices and community empowerment.
                        </p>
                        <Link href="/services" className="bg-primary w-max px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Learn More</Link>
                    </motion.div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <motion.div 
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Products</h1>
                        <p>
                            Abali Energy offers a wide range of high-quality petroleum products, sourced from refineries and suppliers around the world. The company has established a strong network of logistics and distribution channels, ensuring efficient and timely delivery of products to customers. The product range includes gasoline, diesel fuel, aviation turbine fuel, kerosene, and lubricants, as well as liquefied petroleum gas (LPG). Each product is carefully selected to meet the specific needs of customers, with a focus on performance, safety, and environmental sustainability. Abali Energy is committed to providing products that meet the highest standards of quality and reliability, supported by comprehensive technical support and customer service.
                        </p>
                        <Link href="/products" className="bg-primary w-max  px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Explore More</Link>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/586921250/photo/crude-oil-barrels.jpg?s=612x612&w=0&k=20&c=_ffA9C5lDqTa14_r4TJJTKsLSjRYiT8_uGZRwVNKhZM="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                </div>
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 hidden md:flex h-full  items-center justify-center">
                        <Image
                            src="https://media.istockphoto.com/id/1216409748/photo/aerial-view-of-oil-refinery-at-sunset.webp?b=1&s=612x612&w=0&k=20&c=jw-rm5rOPsh8la6sj18dvpzIVSKsP2Zsalj8dOX404s="
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover rounded-lg"
                        />
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-3xl font-semibold">Our Location</h1>
                        <p>
                            Abali Energy is located vastly in Africa with headquarters in Somalia. With its rich oil and gas history, Abali Energy has a proven track record of delivering reliable and efficient solutions.
                            The company has established a strong network of logistics and distribution channels, ensuring efficient and timely delivery of products to customers.
                        </p>
                        <Link href="/about/location" className="bg-primary w-max px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors">Explore More</Link>
                    </motion.div>
                </div>
                <div className="w-full h-full flex flex-col justify-center gap-10 lg:px-10">
                    <h1 className="text-3xl font-semibold text-center">Our Unique Value Proposition</h1>
                    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
                        <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 md:text-left">
                            <h3 className="text-2xl font-semibold">Seamless Services</h3>
                            <ul className="list-disc list-inside">
                                <li>Integrated solutions streamline the oil and gas supply chain.</li>
                                <li>Responsive customer support enhances client satisfaction.</li>
                                <li>Timely delivery and efficient logistics ensure reliability.</li>
                            </ul>
                        </motion.div>
                        <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 h-full flex flex-col justify-center gap-5 md:text-left">
                            <h3 className="text-2xl font-semibold">Commitment to Sustainability</h3>
                            <ul className="list-disc list-inside">
                                <li>Focus on environmentally friendly practices in operations.</li>
                                <li>Investing in green energy technologies for the future.</li>
                                <li>Community engagement initiatives promote local well-being.</li>
                            </ul>
                        </motion.div>
                    </div>  
                </div>
                <div id="team" className="w-full h-full flex flex-col items-center justify-center gap-10">
                    <h1  className="text-3xl font-semibold text-center">Our Team</h1>
                    <div className="w-full h-full flex flex-col items-center justify-center  lg:px-20 ">
                        <TeamSlider slides={JSON.stringify(team)} />
                    </div>  
                </div>
                
            </div>
        </div>
    )
}

export default AboutPage
