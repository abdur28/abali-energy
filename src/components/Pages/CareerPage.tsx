import Image from "next/image"
import Link from "next/link"

const CareerPage = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 font-asap">
            <div className="flex flex-col md:flex-row w-full h-full justify-center items-center gap-10">
                <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                    <div className=" h-[300px]  lg:h-[400px] overflow-hidden  lg:p-10">
                        <Image src={"https://media.istockphoto.com/id/1971882990/photo/mechanical-engineer-working-and-holding-tablet-to-checking-and-inspection-gas-pipeline-system.jpg?s=612x612&w=0&k=20&c=qMRBURPNTwkpWVCKI3l6MKG1BoCaGragg0FGVdHbaEs="}
                        alt="service" width={500} height={500} className="w-full h-full object-cover rounded-2xl"/>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center font-asap gap-3">
                    <h1 className="text-3xl font-semibold text-center mb-2">Explore Our Vacancies</h1>
                    <p className="text-center md:text-left lg:px-10 text-lg">Start your journey with Abali Energy. Be part of a dynamic team that is shaping the energy sector. At Abali Energy, we believe in empowering our employees to take ownership of their work and provide them with the necessary resources to excel. Our company culture is built on the principles of integrity, teamwork, and innovation.</p>
                    <p className="text-center md:text-left lg:px-10 text-lg"> We are committed to creating a positive and inclusive work environment that fosters professional growth and development. We are an equal opportunity employer and welcome applications from all qualified candidates. If you are passionate about the energy sector and want to be part of a team that is making a difference, then we want to hear from you.</p>
                </div>
            </div>
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="w-full h-full md:w-1/2 flex flex-col justify-center items-center">
                    <h3 className="text-2xl font-semibold text-center">Available Vacanies</h3>
                    <ul className="list-disc list-inside">
                        <li>Mechanical Engineer</li>
                        <li>Electrical Engineer</li>
                        <li>Fuel Pump Attendant</li>
                    </ul>
                </div>
                <div className="w-full h-full md:w-1/2 flex justify-center items-center">
                    <Link href="/contact">
                        <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white  hover:bg-secondary transition-colors">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CareerPage