'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const SingleService = ({image, name, description, id} : {image: string, name: string, description: string, id: string}) => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full px-10 lg:px-20 gap-10">
            <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-full flex items-center justify-center">
                <div className=" h-[300px]  lg:h-[400px] overflow-hidden  lg:p-10">
                    <Image src={image} alt="service" width={500} height={500} className="w-full h-full object-cover rounded-2xl"/>
                </div>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 1, ease: "easeInOut" } }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 h-auto flex flex-col justify-center items-center">
                <div className="flex flex-col gap-5 h-full w-full justify-center items-center md:items-start text-center md:text-left">
                    <h1 className="text-3xl">{name}</h1>
                    <p className="text-sm ">{description.slice(0, 700) + "..."}</p>
                    <Link href={`/services/${id}`}>
                        <button className="bg-primary px-3 py-2 rounded-lg  text-white hover:bg-secondary">
                            Read More
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}

export default SingleService