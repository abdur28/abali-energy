import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const aboutText = "Founded in 2022, Abali has quickly emerged as a leading regional oil marketing company in Africa. The company has made significant investments in the sourcing, transportation, storage, distribution, and marketing of fuels, kerosene, jet fuels, LPG, and lubricants for both industrial and automotive systems."
    return (
        <div className="w-full h-full bg-primary flex flex-col gap-5">
            <div className="flex flex-col md:flex-row justify-center text-white font-asap p-10 lg:mx-10 gap-5">
                <div className="md:w-1/3 w-full h-full flex flex-col justify-center gap-2 ">
                    <h1 className="text-2xl font-semibold">Abali Energy</h1>
                    <p className="">Founded in 2022, Abali Energy has become a leading regional oil marketing company in Africa. The company has heavily invested in the sourcing, transportation, storage, distribution, and marketing of fuels, kerosene, jet fuels, LPG, and lubricants for industrial and automotive systems.</p>
                </div>
                <div className="md:w-2/3 w-full h-full flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between md:pl-10">
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Company</h1>
                        <Link href="/about" className="hover:text-secondary">About</Link>
                        <Link href="/services"  className="hover:text-secondary">Services</Link>
                        <Link href="/products"  className="hover:text-secondary">Products</Link>
                        <Link href="/news" className="hover:text-secondary">News</Link>
                        {/* <Link href="/contact" className="hover:text-secondary">Contact</Link> */}
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Support</h1>
                        <Link href="/contact" className="hover:text-secondary">Contact</Link>
                        <Link href="/investors-partners" className="hover:text-secondary">Investors & Partners</Link>
                        <Link href="/career" className="hover:text-secondary">Career at Abali Energy</Link>
                        {/* <Link href="/privacy-policy" className="hover:text-secondary">Privacy Policy</Link>
                        <Link href="/terms-and-conditions" className="hover:text-secondary">Terms and Conditions</Link> */}
                    </div>
                    <div className="w-full h-full flex flex-col gap-2">
                        <h1 className="text-2xl font-semibold">Contact</h1>
                        <p>Osman Ahmed Roble Building, P.O.BOX 626, Makka Al Mukarama Road, Howl-Wadaag District, Mogadishu Somalia</p>
                        <a href="mailto:abalienergy@example.com" className="hover:text-secondary">info@abalienergy.com</a>
                        <div className="flex flex-col ">
                        <a href="tel:+252770766835" className="hover:text-secondary">+252 770 766 835</a>
                        <a href="tel:+254111628314" className="hover:text-secondary">+254 111 628 314</a>
                        </div>
                        <div className="flex flex-row gap-6 mt-2">
                            <Image src="/facebook.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/instagram.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/youtube.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/x.png" alt="" className="cursor-pointer" width={16} height={16} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-white"/>
            <div className="w-full flex justify-center items-center text-white font-asap mb-5 px-10 text-center">
                <p className="text-sm">Abali Energy © 2024. All rights reserved, Developed by <a className="underline" href="https://abdurrahmanidris.info">Aiadam</a></p>
            </div>
        </div>
    )
}

export default Footer