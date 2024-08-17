import Link from "next/link"
import SingleBlog from "./SingleBlog"
import { describe } from "node:test"

const news = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
        date: "Aug 24, 2024",
        type: "Articles",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
        date: "Aug 15, 2024",
        type: "Conferences"
    },

]

const conferences = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
        date: "Aug 24, 2024",
        type: "Conferences",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
        date: "Aug 15, 2024",
        type: "Conferences"
    },
]

const ariticle = [
    {
        id: "1",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/507707436/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B1%D0%B5%D0%BD%D0%B7%D0%BE%D0%BA%D0%BE%D0%BB%D0%BE%D0%BD%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=0116wUGpAjcUXXSwoDEv1PdSbn1LppD4VmfwEbH8EeU=",
        date: "Aug 24, 2024",
        type: "Articles",
    },
    {
        id: "2",
        title: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, quibusdam veniam. Vero, eveniet velit alias voluptates ut quam eos! Doloremque, eligendi dicta labore soluta amet quia libero quidem eveniet quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum minus magni blanditiis. Aliquid vel tenetur, dolor necessitatibus perspiciatis beatae quibusdam iure distinctio cum quos, nam ex ratione accusamus laudantium officiis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab modi illum quidem corrupti, dicta laboriosam quos in temporibus! Unde, cupiditate illo? In consequuntur a exercitationem et, consectetur vel aliquid? Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sed? Perspiciatis vel, nostrum quidem accusamus minima molestias deserunt culpa modi saepe corporis possimus pariatur dolorem quaerat, similique maiores reiciendis quas.",
        image: "https://media.istockphoto.com/id/1224034151/photo/three-heavy-industry-engineers-stand-in-pipe-manufacturing-factory-use-digital-tablet.webp?b=1&s=612x612&w=0&k=20&c=UUnB3KFMDD-e_47-TxL79OrrgCkJDOMe_6Zk3ePbjaY=",
        date: "Aug 15, 2024",
        type: "Articles",
    },
]

const Blog = ({type}: {type: string}) => {
    let hearder
    let description
    let link
    let blogs

    if (type === "blogs") {
        hearder = "Abali Energy News"
        description = "Discover the latest Abali Energy news and updates, explore openings within our Careers, access a range of other available resources.",
        link = "/news"
        blogs = news
    } else if (type === "articles") {
        hearder = "Articles"
        description = "Read the latest Abali Energy articles, which cover a wide range of topics related to the energy industry, including energy news, industry trends, company news, and more.",
        link = "/news/articles"
        blogs = ariticle
    } else if (type === "conferences") {
        hearder = "Conferences"
        description = "Explore the latest Abali Energy conferences, featuring industry leaders, speakers, and industry experts, as well as upcoming events and speakers.",
        link = "/news/conferences"
        blogs = conferences
    }


    return (
        <div className="flex flex-col w-full">
            <div className="w-full h-full py-10 px-10 lg:px-20 flex flex-col md:flex-row gap-10 md:gap-0">
                <div className="md:w-1/3 w-full flex flex-col gap-10 justify-center text-center md:text-left items-center md:items-start">
                    <div className="flex flex-col items-center  md:items-start">
                        {type === "blogs" && <p className="text-sm font-asap text-gray-500">What&apos;s in the Press</p>}
                        <h1 className="text-4xl font-asap">{hearder}</h1>
                    </div>
                    <div className="">
                        <p>{description}</p>
                    </div>
                    <div>
                        {link && (
                            <Link href={link}>
                                <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white hover:bg-secondary">
                                    Read More
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
                <div className="md:w-2/3 w-full flex flex-col md:flex-row gap-10 items-center justify-center">
                    {blogs && blogs.map((blog, index) => (
                       <>
                       {type === "blogs" ? (
                            <SingleBlog
                            id={blog.id}
                            key={index}
                            type={blog.type}
                            image={blog.image}
                            title={blog.title}
                            // description={blog.description}
                            date={blog.date}
                        />
                       ): (
                            <SingleBlog
                            id={blog.id}
                            key={index}
                            type={blog.type}
                            image={blog.image}
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                        />
                       )}
                       </>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog