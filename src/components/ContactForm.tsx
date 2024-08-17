'use client'

import { useRef, useState } from "react"

const ContactForm = () => {
    const FormRef = useRef<any>()
    
    const [subject, setSubject] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [vacancy, setVacancy] = useState("")

    return (
        <div className="w-full h-full">
            <form 
            ref={FormRef}
            action=""
            className="flex flex-col w-full h-full  rounded-2xl bg-primary/30 shadow-inner shadow-gray-500 p-10 font-asap gap-3"
            >
                <h1 className="text-2xl font-semibold mb-5">Get in touch</h1>
                <select
                name="subject"
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                defaultValue=""
                onChange={(e) => setSubject(e.target.value)}
                required
                >
                    <option value="" disabled selected hidden >What is your inquery about?</option>
                    <option value="Career at Abali Energy">Career at Abali Energy</option>
                    <option value="Investors & Partners">Investors & Partners</option>
                    <option value="Others">Others</option>
                </select>
                {subject === 'Career at Abali Energy' && (
                    <select
                    name="vacancy"
                    className="w-full p-3 rounded-lg border-2 border-gray-400"
                    onChange={(e) => setVacancy(e.target.value)}
                    required
                    >
                        <option value="Mechanical Engineer">Mechanical Engineer</option>
                        <option value="Electrical Engineer">Electrical Engineer</option>
                        <option value="Fuel Pump Attendant">Fuel Pump Attendant</option>
                    </select>
                )}
                <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <textarea
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                rows={5}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                />
                <button
                type="submit"
                className="bg-primary px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default ContactForm