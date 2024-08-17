import Image from "next/image"
import Link from "next/link"

const InvestorsPartnersPage = () => {
    return (
        <div className="flex flex-col md:flex-row w-full h-full justify-center items-center gap-10">
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center font-asap gap-3">
                {/* <h1 className="text-3xl font-semibold text-center">Investors & Partners</h1> */}
                <p className="text-center md:text-left lg:px-10 text-lg">
                    At Abali Energy, we believe that strategic partnerships are key to driving business growth and expansion. That&apos;s why we actively seek out and prioritize collaborations that foster mutually beneficial relationships, leading to long-term success and progress for all parties involved.
                </p>
                <p className="text-center md:text-left lg:px-10 text-lg">
                    Whether you are an investor or partner, we are here to support you on your journey. Join our community today and let us build a stronger financial foundation for our clients.
                </p>
                <div className="flex flex-col md:flex-row h-full w-full justify-center items-center lg:px-10 pt-10 gap-5 md:gap-10">
                    <p className="text-center font-semibold text-2xl">
                        Join Abali Energy today!
                    </p>
                    <Link href="/contact">
                        <button className="bg-primary px-3 py-2 rounded-lg  text-white hover:bg-secondary">
                            Get Started
                        </button>
                    </Link>
                </div>
                <div>

                </div>
            </div>
            <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                <div className=" h-[300px]  lg:h-[400px] overflow-hidden  lg:p-10">
                    <Image src={"https://media.istockphoto.com/id/2164057774/photo/engineer-professional-asian-male-standing-confident-happy-against-petroleum-refinery-industry.jpg?s=612x612&w=0&k=20&c=D_rV-tEa0Mmx6hDeNldPDplk3DkWzqsTqWZkuX8H65k="}
                     alt="service" width={500} height={500} className="w-full h-full object-cover rounded-2xl"/>
                </div>
            </div>
        </div>
    )
}

export default InvestorsPartnersPage