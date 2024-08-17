'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const SingleBlog = ({ id, type, image, title, description, date }: { id: string; type: string; image: string; title: string; description?: string; date: string }) => {
    console.log(description)
    return (
        <div 
        className="bg-white w-[300px] h-[450px] rounded-lg border border-gray-300 shadow-[15px_18px_20px_-15px] shadow-gray-300"
        >
            <div className="w-full h-full flex flex-col">
                <div className="w-full h-2/5 justify-center items-center overflow-hidden">
                    <Image
                    src={image}
                    alt="blog"
                    width={300}
                    height={300}
                    className="object-cover"
                    />
                </div>
                <div className="w-full h-3/5 flex flex-col p-7 gap-1">
                    {!description && <p className="text-sm font-asap text-gray-500">{type}</p>}
                    <h1 className={`${description  ? "text-lg" : "text-2xl"} font-asap`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
                    <p className=" font-asap text-gray-600 italic text-sm">Aug 24, 2022</p>
                    {description && <p className="text-sm font-asap mt-2">{description.slice(0, 100) + "..."}</p>}
                    <div className="w-full h-full flex items-end">
                        <Link
                        href={`/news/${type.toLowerCase()}/${id}`}
                        >
                            <button className="bg-primary px-3 py-2 rounded-lg  text-white hover:bg-secondary">
                                Full Story
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog