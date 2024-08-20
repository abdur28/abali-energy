'use client'

import { useEffect, useRef, useState } from "react"
import Alert from "./Alert"
import { useAlert } from "@/hooks/useAlert"
import { useFormState } from "react-dom"
import { sendEmail } from "@/lib/action"

const ContactForm = () => {
    const formRef = useRef<any>()
    const [state, formAction] = useFormState(sendEmail, undefined);
    const { show, showAlert, hideAlert, text, type } = useAlert();

    const [form, setForm] = useState({ name: "", email: "", message: "", phone: "", subject: "", vacancy: "" })

    const [loading, setLoading] = useState(false);

    const sendingEmail = () => {
        showAlert({
            show: true,
            text: "Sending emall...",
            type: "success",
        });
        const formData = new FormData(formRef.current);
        formData.append("name", form.name); 
        formData.append("email", form.email); 
        formData.append("message", form.message); 
        formData.append("phone", form.phone); 
        formData.append("subject", form.subject); 
        formData.append("vacancy", form.vacancy);
        formAction(formData);
    };

    const handleChange = (e: any): void => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setLoading(true);
        sendingEmail()
    };

    useEffect(() => {
        if (state) {
            hideAlert();
            if (state.status === "success"){
                showAlert({
                    text: "Thank you for your message 😃",
                    type: "success",
                    show: true
                });
                setTimeout(() => {
                hideAlert();
                setForm({
                    name: "",
                    email: "",
                    message: "",
                    phone: "",
                    subject: "",
                    vacancy: ""
                });
                }, 5000);
                setLoading(false);
            
            } else {

                    showAlert({
                        show: true,
                        text: state.message,
                        type: "danger",
                    });
                    setTimeout(() => {
                    hideAlert();
                    }, 5000);
                    setLoading(false);
                    // router.refresh()
            }
        }
    },[state])

    return (
        <div className="w-full h-full">
            {show && <Alert text={text} type={type} />}
            <form 
            ref={formRef}
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col w-full h-full  rounded-2xl bg-primary/30 shadow-inner shadow-gray-500 p-10 font-asap gap-3"
            >
                <h1 className="text-2xl font-semibold mb-5">Get in touch</h1>
                <select
                name="subject"
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                defaultValue=""
                value={form.subject}
                onChange={handleChange}
                required
                >
                    <option value="" disabled selected hidden >What is your inquery about?</option>
                    <option value="Career at Abali Energy">Career at Abali Energy</option>
                    <option value="Investors & Partners">Investors & Partners</option>
                    <option value="Others">Others</option>
                </select>
                {form.subject === 'Career at Abali Energy' && (
                    <select
                    name="vacancy"
                    // value={form.vacancy}
                    className="w-full p-3 rounded-lg border-2 border-gray-400"
                    onChange={handleChange}
                    required
                    >
                        <option value="Mechanical Engineer">Mechanical Engineer</option>
                        <option value="Electrical Engineer">Electrical Engineer</option>
                        <option value="Fuel Pump Attendant">Fuel Pump Attendant</option>
                    </select>
                )}
                <input
                type="text"
                value={form.name}
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <input
                type="email"
                value={form.email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <input
                type="tel"
                value={form.phone}
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <textarea
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                name="message"
                rows={5}
                className="w-full p-3 rounded-lg border-2 border-gray-400"
                required
                />
                <button
                type="submit"
                disabled={loading}
                className={`${loading ? "bg-secondary cursor-not-allowed" : "bg-primary"} px-4 py-2 rounded-lg text-lg text-white font-semibold hover:bg-secondary transition-colors`}
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    )
}

export default ContactForm