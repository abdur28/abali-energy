'use client'

import { useState } from "react"
import ToggleButton from "./ToogleButton"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const variants = {
    open: {
        height: "auto",
        opacity: 1,
        transition: { 
            duration: 0.3 
        }
      },
      closed: {
        height: 0,
        opacity: 0,
        transition: { 
            duration: 0.3 
        }
      }
};

const linkVariants = {
    open: { 
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
    },
    closed: { 
        opacity: 0,
        y: 20,
        transition: { duration: 0.7 }
    }
}

const NavMobile = () => {
    const [open, setOpen] = useState(false)
    const [drop, setDrop] = useState('')
    const links = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
            subItems: [
                {
                    name: "Our Company",
                    link: "/about",
                },
                {
                    name: "Our Team",
                    link: "/about#team",
                },
                {
                    name: "Where We Operate",
                    link: "/about/location",
                },
            ]
        },
        {
            name: "Services",
            link: "/services",
        },
        {
            name: "Products",
            link: "/products",
        },
        {
            name: "News", 
            link: "/news",
            subItems: [
                {
                    name: "Media",
                    link: "/news#media",
                },
                {
                    name: "Articles",
                    link: "/news/articles",
                },
                {
                    name: "Conferences",
                    link: "/news/conferences",
                },
                {
                    name: "Career at Abali",
                    link: "/career",
                },
                {
                    name: "Investors & Partners",
                    link: "/investors-partners",
                }
            ]
        },
        {
            name: "Contact",
            link: "/contact",
        }
    ]

    return (
        <motion.div 
        className="flex flex-col mx-7 w-full"
        initial="closed" animate={open ? "open" : "closed"}>
            <motion.div className="h-20 w-auto flex justify-between items-center">
                <Link
                href={"/"}
                className="-ml-16"
                >
                    <Image
                    src="/logo.png"
                    alt="logo"
                    width={250}
                    height={250}
                    className="object-cover"
                    />
                </Link>
                <ToggleButton setOpen={setOpen} />
            </motion.div> 
            <motion.div 
            initial="closed" 
            animate={open ? "open" : "closed"} 
            variants={variants} 
            className="flex flex-col">
                <motion.div
                className="mb-7 "
                >
                {links.map((link) => (
                    <motion.div
                    variants={linkVariants}
                    animate={open ? "open" : "closed"}
                    key={link.name}
                    className="py-3 px-3 border-t-2 flex flex-row justify-between border-gray-300"
                    >
                        <div className="flex flex-col gap-2">
                            <motion.div
                            whileTap={{ scale: 0.9 }}
                            >
                                <Link href={link.link} className=""
                                onClick={() => setOpen(false)}
                                >{link.name.toUpperCase()}</Link>
                            </motion.div>
                            {drop === link.name && link.subItems && link.subItems.map((subItem) => (
                                <motion.div
                                key={subItem.name}
                                whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={subItem.link} className="text-sm"
                                    onClick={() => setOpen(false)}
                                    >{subItem.name}</Link>
                                </motion.div>
                            ))}
                        </div>
                        {link.subItems && (
                            <div onClick={() => {
                                setDrop(drop === link.name ? '' : link.name)
                            }} className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${drop === link.name ? 'rotate-180' : ''} w-6 h-6`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        )}
                    </motion.div>
                ))}      
                </motion.div>  
            </motion.div>    
        </motion.div>
    )
}   

export default NavMobile