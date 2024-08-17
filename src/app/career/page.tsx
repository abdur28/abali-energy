import Header from "@/components/Header"
import CareerPage from "@/components/Pages/CareerPage"

const Career = () => {

    return (
        <div>
            <Header text="Career at Abali Energy" backgroundImage="https://media.istockphoto.com/id/2008257024/photo/the-chemical-engineer-working-the-late-night-shift-at-the-petroleum-oil-refinery-in-an.webp?b=1&s=612x612&w=0&k=20&c=n03Kf8jukB5nTd_JNghbA9FecSINMVPGpQ8Fkrls4Ts="/>
            <div className="w-full h-full flex justify-center items-center p-10">
                <CareerPage />
            </div>
        </div>
    )
}

export default Career