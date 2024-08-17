import Header from "@/components/Header"
import InvestorsPartnersPage from "@/components/Pages/InvestorsPartnersPage"

const Page = () => {

    return (    
        <div>
            <Header text="Investors & Partners" backgroundImage="https://media.istockphoto.com/id/1423051444/photo/double-exposure-of-business-handshake-and-oil-refinery-plant-business-people-shaking-hands-in.webp?b=1&s=612x612&w=0&k=20&c=LCXLXPyOGWpVPn5yhOxk3ecThkl-I8UYtxfs_gsdTkA="/>
            <div className="w-full h-full flex justify-center items-center p-10">
                <InvestorsPartnersPage />
            </div>
        </div>
        
    )
}

export default Page