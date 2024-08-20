import Header from "@/components/Header"
import SingleBlog from "@/components/SingleBlog"

let conferences: any = null

const Conferences = () => {
    return (
        <div>
            <Header text="News" backgroundImage="https://media.istockphoto.com/id/1220724113/photo/falling-crude-oil-prices.jpg?s=612x612&w=0&k=20&c=eYHcAOQSV1pD2SBTkjklHJ2XK2qOnMu4t8yIZUApV2U="/>
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 font-asap p-10">
                <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <h1 className="text-3xl font-semibold">Conferences</h1>
                    <p className="text-lg text-center md:px-20 lg:px-56 px-10">Explore the latest Abali Energy conferences, featuring industry leaders, speakers, and industry experts, as well as upcoming events and speakers.</p>
                </div>
                <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
                    {conferences ? conferences.map((conference: any, index: number) => (
                        <div key={index} className="m-5">
                            <SingleBlog
                            id={conference.id}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    )) : (
                        <div className="text-2xl">Coming Soon</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Conferences