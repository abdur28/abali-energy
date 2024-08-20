import Header from "@/components/Header"
import SingleItemPage from "@/components/Pages/SingleItemPage"
import { notFound } from "next/navigation"

const Page = ({ params }: { params: { slug: string }}) => {
    const id = params.slug
    const services = [
        {
            id: 1,
            name: "Consulting Services",
            image: "/Consulting-Services.jpg",
            optionalImages: [
                "/Consulting-Services(1).jpg",
                "/Consulting-Services(2).jpg",
            ],
            description: "Abali Energy Consulting Services in the oil and gas industry offers strategic advisory and operational expertise to optimize your energy investments. We provide comprehensive solutions, including project management, risk assessment, regulatory compliance, and sustainability integration. Our team of industry veterans delivers insights on market trends, supply chain optimization, and technological advancements to enhance efficiency and profitability. Whether you're looking to expand operations, streamline processes, or transition to more sustainable practices, Abali Energy equips you with the knowledge and strategies needed to succeed in the ever-evolving oil and gas landscape.", 
        },
        {
            id: 2,
            name: "Brokerage Services",
            image: "/Brokerage-Services.jpg",
            optionalImages: [
                "/Brokerage-Services(1).jpg",
                "/Brokerage-Services(2).jpg",
            ],
            description: "Abali Energy Brokerage Services in the oil and gas industry offers expert facilitation of transactions, connecting buyers and sellers of oil, natural gas, and related commodities. We provide comprehensive market analysis, price negotiation, and contract management to ensure our clients secure optimal deals. With a deep understanding of global energy markets and regulatory environments, Abali Energy delivers tailored brokerage solutions that maximize value and minimize risk. Our extensive network and industry expertise enable us to navigate complex transactions efficiently, helping clients achieve their business objectives in the competitive oil and gas sector.", 
        }, 
        {
            id: 3,
            name: "Import and Export of crude oil",
            image: "/Import-Export-Services.jpg",
            optionalImages: [
                "/Import-Export-Services(1).jpg",
                "/Import-Export-Services(2).jpg",
            ],
            description: "Abali Energy Import and Export Services in the oil and gas industry specialize in the global trade of crude oil, facilitating seamless cross-border transactions. We offer end-to-end logistics management, including sourcing, transportation, customs clearance, and regulatory compliance, ensuring that your crude oil shipments reach their destinations efficiently and safely. Leveraging our extensive network and market expertise, Abali Energy secures competitive pricing and optimal trade routes, helping you navigate the complexities of international oil markets. Our commitment to reliability and transparency ensures that your import and export operations run smoothly, maximizing value and minimizing risk.", 
        },
    ]
    
    const service = services.find((service) => service.id.toString() === id)
    
    if (!service) {
        notFound()
    }

    return (
        <div>
            <Header text="Services" backgroundImage="https://media.istockphoto.com/id/1807044866/photo/engineer-survey-team-wear-uniform-and-helmet-stand-workplace-checking-blueprint-project-radio.jpg?s=612x612&w=0&k=20&c=94CwjoGL13_ywO8TzmIDrZkzn0jtIUAUtTIY5wEhVkw="/>
            <SingleItemPage itemToString={JSON.stringify(service)}/>
        </div>
    )
}

export default Page