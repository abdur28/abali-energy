'use client'

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const LocationPage = ({ locationsToString }: { locationsToString: string }) => {
    const locations = JSON.parse(locationsToString)
    return (
                <div className="w-full h-full flex flex-col items-center justify-center gap-10 p-10">
                    <h1 className="text-3xl font-semibold text-center">Where We Operate</h1>
                    <div className="w-full h-full flex flex-row flex-wrap items-center justify-center">
                        {locations.map(( location: any, index: number) => (
                            <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            >
                                <Link
                                href={`/about/location/${location.name.toLowerCase().replace(' ', '-')}`}
                                className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] flex flex-col items-center justify-center border-2 border-primary p-5 m-2 md:m-5 hover:bg-primary">
                                    <div className="w-full h-2/3 flex flex-col items-center justify-center">
                                        <Image
                                            src={location.image}
                                            alt="Abali Energy"
                                            width={100}
                                            height={100}
                                            className="h-20 w-20 object-cover"
                                        />
                                    </div>
                                    <p className="text-center text-sm md:text-lg">{location.name}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
    )
}

export default LocationPage