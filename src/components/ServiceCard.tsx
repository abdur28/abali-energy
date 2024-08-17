'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

const ServiceCard = ({serviceToString}: {serviceToString: string}) => {
    const [open, setOpen] = useState(0);
    const service = JSON.parse(serviceToString)

    return (
        <>
        <motion.div 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setOpen(service.id)}
        onHoverEnd={() => setOpen(0)}
        className={`w-[280px] h-[280px] hidden md:flex rounded-2xl cursor-pointer ${open === service.id ? "bg-secondary" : "bg-primary"}`}
        >
            <Link
            href={`/services#${service.id}`}
            className="w-full h-full"
            >
            {open !== service.id && (
                <div
                className="flex flex-col items-center  h-full w-full ">
                    <div className="w-full h-3/5 flex justify-center items-center">
                        <Image
                        src={service.icon}
                        alt="africa"
                        width={80}
                        height={80}
                        />
                    </div>
                    <div className="w-full h-2/5 flex flex-col items-center gap-1 text-center px-5">
                        <h1 className="text-2xl text-white font-asap">{service.name}</h1>
                        <p className="text-white font-asap">{service.shortDescription}</p>
                    </div>
                </div>
            )}
            {open === service.id && (
                <div
                className="flex flex-col items-center h-full w-full text-center p-5  ">
                    <div className="flex h-1/5 justify-center items-center">
                         <h1 className="text-2xl text-white font-asap">{service.name}</h1>
                    </div>
                    <div className="w-full h-4/5 justify-center items-center">
                        <p className="text-white font-asap">{service.description}</p>
                    </div>
                </div>
            )}
            </Link>
        </motion.div>

        {/* mobile */}
        <motion.div 
        whileTap={{ scale: 0.9 }}
        className={`w-[300px] h-[300px] rounded-2xl md:hidden cursor-pointer bg-primary `}
        >
            <Link
            href={`/services#${service.id}`}
            className="w-full h-full"
            >
                <div
                className="flex flex-col items-center h-full w-full ">
                    <div className="w-full h-3/5 flex justify-center items-center">
                        <Image
                        src={service.icon}
                        alt="africa"
                        width={80}
                        height={80}
                        />
                    </div>
                    <div className="w-full h-2/5 flex flex-col items-center gap-1 text-center px-5">
                        <h1 className="text-2xl text-white font-asap">{service.name}</h1>
                        <p className="text-white font-asap">{service.shortDescription}</p>
                    </div>
                </div>
            </Link>   
        </motion.div>
        </>

    )
}

export default ServiceCard