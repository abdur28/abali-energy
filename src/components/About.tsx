"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import DropDownBox from "./DropDownBox"

const data = [
    {
        id: 1,
        title: "Our Mission",
        decription: "Abali Energy aims to  distribute natural gas and petroleum products in an environmentally friendly manner, supporting communities through logistics and consulting."
    },
    {
        id: 2,
        title: "Our Vision",
        decription: "We strive to empower communities with affordable, clean, and efficient energy solutions while researching innovative green energy alternatives to enhance quality of life."
    },
    {
        id: 3,
        title: "Our Values",
        decription: "Community and environmental health are our top priorities. We emphasize teamwork, transparency, and a commitment to serving the needs of the local population."
    },
]

const aboutText = "Abali Energy is a leading provider of comprehensive energy solutions, specializing in the oil and gas, renewable energy, and broader energy sectors. With a commitment to innovation and sustainability, we deliver a wide range of services, including consulting, brokerage, and import-export operations, tailored to meet the unique needs of our clients. Our team of industry experts combines deep market knowledge with a global network, enabling us to offer strategic insights and practical solutions that drive efficiency, profitability, and growth. Whether navigating the complexities of the oil and gas industry or pioneering new paths in renewable energy, Abali Energy is dedicated to empowering our clients to achieve their energy goals with confidence and success."

const About = () => {
    return (
        <div className="flex flex-col  font-asap -mt-10 justify-start items-center gap-3 px-14 pb-20">
            <div className="flex flex-col md:flex-row w-full h-full md:px-20 gap-8 md:gap-0">
                <div className="md:w-1/2 h-1/2 md:h-full w-full flex flex-col gap-5">
                    <div className="h-1/2 w-full flex flex-col justify-start items-center ">
                        <div className="flex flex-row">
                            <motion.div 
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0, transition: {duration: 1, ease: "easeInOut"}}}
                            viewport={{once: true}}
                            className="h-40 w-40 flex justify-center rounded-full border-2 border-black overflow-hidden">
                                <Image
                                    src="https://media.istockphoto.com/id/1452806002/photo/beautiful-dusk-sky-over-an-offshore-oil-drilling-close-to-huntington-beach.webp?b=1&s=612x612&w=0&k=20&c=Kl0jWgMjqASGk0_wmMwpgaWP1skIVrRemjWM2T8LHHE="
                                    alt="Abali Energy"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </motion.div>
                            <motion.div
                            initial={{opacity: 0, y: 100}}
                            whileInView={{opacity: 1, y: 0, transition: {duration: 0.4, ease: "easeInOut"}}}
                            viewport={{once: true}}
                            className="h-28 w-28 flex justify-center  rounded-full border-2 border-black overflow-hidden mt-12 ml-2">
                                <Image
                                    src="https://media.istockphoto.com/id/1403978838/photo/oil-and-gas-refinery-production-factory-workers-in-safety-equipment-walking-by-gas-pipes-and.webp?b=1&s=612x612&w=0&k=20&c=mhmELl_6FYN98lSPdaLXcs2MliWuy2CyLGd7Z9yhxdQ="
                                    alt="Abali Energy"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                        <div>
                           <motion.div 
                           initial={{opacity: 0, y: 100}}
                           whileInView={{opacity: 1, y: 0, transition: {duration: 1.3, ease: "easeInOut"}}}
                           viewport={{once: true}}
                           className="h-32 w-32 flex justify-center  rounded-full border-2 border-black overflow-hidden -mt-3 ml-8">
                                <Image
                                    src="https://media.istockphoto.com/id/586921250/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B0%D1%80%D1%80%D0%B5%D0%BB%D0%B5%D0%B9-%D1%81%D1%8B%D1%80%D0%BE%D0%B9-%D0%BD%D0%B5%D1%84%D1%82%D0%B8.jpg?s=612x612&w=0&k=20&c=trM2jFinDKl4537O-Dlmi71XFnHVvc7o6qsE0q5msPo="
                                    alt="Abali Energy"
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                />
                            </motion.div>     
                        </div>
                    </div>
                    <div className="h-1/2 w-full flex flex-col justify-start items-center ">
                        <motion.p 
                        initial={{opacity: 0, x: -100}}
                        whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                        viewport={{once: true}}
                        className="text-center font-asap"
                        >{aboutText}</motion.p>
                    </div>
                </div>
                <motion.div 
                viewport={{once: true}}
                initial={{opacity: 0, x: 100}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1, ease: "easeInOut"}}}
                className="md:w-1/2 w-full flex flex-col justify-center items-center gap-5 md:pl-20">
                    {data.map((item) => (
                        <DropDownBox key={item.id} title={item.title} description={item.decription} />
                    ))}
                </motion.div>
            </div>
            <motion.div
            viewport={{once: true}}
            initial={{opacity: 0}}
            whileInView={{opacity: 1, transition: {duration: 1, ease: "easeInOut"}}}
            >
                <Link href="/about">
                    <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white hover:bg-secondary mt-5"
                    >
                        Learn More
                    </button>
                </Link>
            </motion.div>
        </div>
    )
}

export default About