import Link from "next/link"
import SingleBlog from "./SingleBlog"
import { describe } from "node:test"



const Blog = ({type}: {type: string}) => {
    let hearder
    let description
    let link
    let blogs: any

    if (type === "blogs") {
        hearder = "Abali Energy News"
        description = "Discover the latest Abali Energy news and updates, explore openings within our Careers, access a range of other available resources.",
        link = "/news"
        blogs = null
    } else if (type === "articles") {
        hearder = "Articles"
        description = "Read the latest Abali Energy articles, which cover a wide range of topics related to the energy industry, including energy news, industry trends, company news, and more.",
        link = "/news/articles"
        blogs = null
    } else if (type === "conferences") {
        hearder = "Conferences"
        description = "Explore the latest Abali Energy conferences, featuring industry leaders, speakers, and industry experts, as well as upcoming events and speakers.",
        link = "/news/conferences"
        blogs = null
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
                    {blogs !== null && blogs.map((blog: any, index: any) => (
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
                    { blogs === null && (
                        <p className="text-center text-lg font-asap">Coming Soon</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blog