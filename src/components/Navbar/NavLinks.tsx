'use client'

import { motion } from "framer-motion"
import { useState } from "react"
import NavPopUp from "./NavPopUp"
import Link from "next/link"

const NavLinks = () => {
    const [popUp, setPopUp] = useState('')
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
        <div className="flex items-center">
            <motion.ul className="flex flex-row gap-5">
                {links.map((link) => (
                    <motion.li
                    className="flex flex-row"
                    whileHover={{ scale: 1.1 }}
                    key={link.name}
                    onHoverStart={() => {
                        link.subItems && setPopUp(link.name)
                    }}
                    onHoverEnd={() => {
                        link.subItems && setPopUp('')
                    }}
                    >
                        <Link href={link.link} className="cursor-pointer hover:text-primary">{link.name.toUpperCase()}</Link>
                        {link.subItems && (
                            <div className="flex items-center justify-center -mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="5 3 37 37"
                                width="30" height="30" 
                                id="down-arrow"
                                ><path 
                                d="M22.782 13.8 17 19.582 11.218 13.8a1 1 0 0 0-1.414 1.414L16.29 21.7a.992.992 0 0 0 .71.292.997.997 0 0 0 .71-.292l6.486-6.486a1 1 0 0 0-1.414-1.414z"
                                ></path></svg>
                            </div>
                        )}
                        {popUp === link.name && link.subItems && <NavPopUp subItems={link.subItems}/>}
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
}

export default NavLinks