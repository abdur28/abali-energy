import Header from "@/components/Header"
import SingleBlog from "@/components/SingleBlog"

const conferences = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
        date: "Aug 24, 2024",
        type: "Conference",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
        date: "Aug 15, 2024",
        type: "Conference"
    },
]

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
                    {conferences.map((conference, index) => (
                        <div className="m-5">
                            <SingleBlog
                            id={conference.id}
                            key={index}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    ))}
                    {conferences.map((conference, index) => (
                        <div className="m-5">
                            <SingleBlog
                            id={conference.id}
                            key={index}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    ))}
                    {conferences.map((conference, index) => (
                        <div className="m-5">
                            <SingleBlog
                            id={conference.id}
                            key={index}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    ))}
                    {conferences.map((conference, index) => (
                        <div className="m-5">
                            <SingleBlog
                            id={conference.id}
                            key={index}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    ))}
                    {conferences.map((conference, index) => (
                        <div className="m-5">
                            <SingleBlog
                            id={conference.id}
                            key={index}
                            type={conference.type}
                            image={conference.image}
                            title={conference.title}
                            description={conference.description}
                            date={conference.date}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Conferences