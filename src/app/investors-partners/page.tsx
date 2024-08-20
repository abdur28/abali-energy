import Header from "@/components/Header"
import InvestorsPartnersPage from "@/components/Pages/InvestorsPartnersPage"

const Page = () => {

    return (    
        <div>
            <Header text="Investors & Partners" backgroundImage="/investors-partners.jpg"/>
            <div className="w-full h-full flex justify-center items-center p-10">
                <InvestorsPartnersPage />
            </div>
        </div>
        
    )
}

export default Page