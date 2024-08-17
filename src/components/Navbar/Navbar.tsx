import Image from "next/image"
import NavLinks from "./NavLinks"
import NavMobile from "./NavMobile"

const NavBar = () => {
    return (
        <nav className="fixed top-0 bg-gray-100 w-full z-50">
            <div className="lg:mx-48 lg:flex hidden h-[5rem] font-asap items-center justify-between">
                <div className="flex items-center ">
                    <Image
                    src="/logo.png"
                    alt="logo"
                    width={200}
                    height={200}
                    className="object-cover"
                    />
                </div>
                <NavLinks />
            </div>
            <div className="lg:hidden flex">
                <NavMobile />
            </div>
        </nav>
    )   
}

export default NavBar