import Image from "next/image"
import NavLinks from "./NavLinks"
import NavMobile from "./NavMobile"
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="fixed top-0 bg-gray-100 w-full z-50">
            <div className="lg:mx-48 lg:flex hidden h-[5.5rem] font-asap items-center justify-between">
                <Link
                href={"/"}
                className="flex items-center ">
                    <Image
                    src="/logo.png"
                    alt="logo"
                    width={300}
                    height={300}
                    className="object-cover"
                    />
                </Link>
                <NavLinks />
            </div>
            <div className="lg:hidden flex">
                <NavMobile />
            </div>
        </nav>
    )   
}

export default NavBar