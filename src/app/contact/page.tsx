import ContactForm from "@/components/ContactForm"
import Header from "@/components/Header"
import Image from "next/image"

const Page = () => {

    return (
        <>
        <Header text="Contact" backgroundImage="https://media.istockphoto.com/id/177743945/photo/offshore-rig-in-twilight.jpg?s=612x612&w=0&k=20&c=xB4_3xsxLqD6s4e6dZaBgSmpC0BW_0nNpkf62j6Evd0="/>
        <div className="w-full h-full flex flex-col justify-center items-center gap-10 p-10">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="w-full md:w-1/2 h-full flex flex-col gap-5 justify-center items-center text-center md:text-left md:items-start lg:px-10">
                    <h1 className="text-3xl font-semibold">Contact Us</h1>
                    <p className="text-lg ">Reach out to us using the contact information below</p>
                    <div className="w-full h-[1px] bg-gray-400 "/>
                    <div className="flex flex-row w-full h-full">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <Image src="/location.png" alt="location"  width={50} height={50} />
                        </div>
                        <div className="w-3/4 h-full flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Abali Energy HQ</h3>
                            <p >Osman Ahmed Roble Building, P.O.BOX 626, Makka Al Mukarama Road, Howl-Wadaag District, Mogadishu Somalia</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-400 "/>
                    <div className="flex flex-row w-full h-full">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <Image src="/working-hours.png" alt="working hours"  width={50} height={50} />
                        </div>
                        <div className="w-3/4 h-full flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
                            <p>Monday - Friday: 08:00 - 18:00</p>
                            <p>Saturday: 10:00 - 16:00</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-400 "/>
                    <div className="flex flex-row w-full h-full">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <Image src="/phone-call.png" alt="phone"  width={50} height={50} />
                        </div>
                        <div className="w-3/4 h-full flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                            <p>+252 770 766 835</p>
                            <p>+254 768 812 792</p>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-400 "/>
                    <div className="flex flex-row w-full h-full">
                        <div className="w-1/4 h-full flex justify-center items-center">
                            <Image src="/social-media.png" alt="phone"  width={50} height={50} />
                        </div>
                        <div className="w-3/4 h-full flex flex-col">
                            <h3 className="text-xl font-semibold mb-2">Social Media</h3>
                            <div className="flex flex-row w-full h-full justify-center items-center md:justify-start gap-6">
                            <Image src="/facebook.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/instagram.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/youtube.png" alt="" className="cursor-pointer" width={16} height={16} />
                            <Image src="/x.png" alt="" className="cursor-pointer" width={16} height={16} />
                        </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-full flex justify-center items-center lg:px-10">
                    <ContactForm />
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center  lg:p-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.2843972002215!2d45.32705565634459!3d2.0421177339337553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58431b6cddb8bd%3A0x5a569b3871597ba6!2sTayo%20Constructions%20%26%20Agro%20Services!5e0!3m2!1sen!2sru!4v1724179924045!5m2!1sen!2sru" width="100%" height="450" style={{border:0, borderRadius:"10px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
        
    )
}

export default Page