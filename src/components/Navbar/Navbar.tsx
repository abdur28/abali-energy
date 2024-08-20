import Image from "next/image"
import NavLinks from "./NavLinks"
import NavMobile from "./NavMobile"
import Link from "next/link"

const NavBar = () => {
    return (
        <nav className="fixed top-0 bg-gray-100 w-full z-50">
            <div className="w-full hidden md:flex flex-col font-asap">
                <div className="h-10 w-full bg-primary/20 flex flex-row text-sm items-center justify-between md:px-10">
                    <div className="flex flex-row items-center gap-8 ">
                        <a href="mailto:info@abalienergy.com" className="flex flex-row items-center gap-2">
                            <Image
                            src="/email.png"
                            alt="email"
                            width={20}
                            height={20}
                            className="object-cover"
                            />
                            <p>info@abalienergy.com</p>
                        </a>
                        <a href="tel:+252770766835" className="flex flex-row items-center gap-2">
                            <Image
                            src="/phone-call.png"
                            alt="phone"
                            width={20}
                            height={20}
                            className="object-cover"
                            />
                            <p>+252 770 766 835</p>
                        </a>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-4 ">
                        <Image src="/facebook.png" alt="" className="cursor-pointer" width={16} height={16} />
                        <Image src="/instagram.png" alt="" className="cursor-pointer" width={16} height={16} />
                        <Image src="/youtube.png" alt="" className="cursor-pointer" width={16} height={16} />
                        <Image src="/x.png" alt="" className="cursor-pointer" width={16} height={16} />
                    </div>
                </div>
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
            </div>
            
            <div className="lg:hidden flex">
                <NavMobile />
            </div>
        </nav>
    )   
}

export default NavBar