import Blog from "@/components/Blog"
import Header from "@/components/Header"
import MediaSlider from "@/components/Slider/MediaSlider"
import { describe } from "node:test"

// const media = [
//     {
//         id: 1,
//         title: "Abali Energy",
//         type: "video",
//         link: "https://www.youtube.com/embed/8YHsxXEVB1M",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sit facilis eligendi necessitatibus? Pariatur illo maxime repellendus, illum quod nemo quae repudiandae eos id facere nobis architecto nihil amet voluptatem!",
//     },
//     {
//         id: 2,  
//         title: "Kerosene Production",
//         type: "video",
//         link: "https://www.youtube.com/embed/8YHsxXEVB1M",
//         description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, provident. Modi, fugit sunt incidunt tempore eius recusandae, alias eaque nobis earum similique deserunt doloribus nam quae officiis est veritatis ipsum.",
//     }
// ]



const NewsPage = () => {

    return (
        <div>
            <Header text="News" backgroundImage="https://media.istockphoto.com/id/1220724113/photo/falling-crude-oil-prices.jpg?s=612x612&w=0&k=20&c=eYHcAOQSV1pD2SBTkjklHJ2XK2qOnMu4t8yIZUApV2U="/>
            <div className="w-full h-full flex flex-col justify-center items-center gap-10 font-asap py-10">
                <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                    <h1 className="text-3xl font-semibold px-10">Media Gallery</h1>
                    <p className="text-lg text-center md:px-20 lg:px-56 px-10">Feel free to peruse our selection of videos, where you will find an extensive array of content providing deeper insights and information about Abali Energy.</p>
                    <div className="w-full h-full mt-10  bg-primary/30">
                        <MediaSlider />
                    </div>
                    <div className="">
                        <Blog type="articles" />
                    </div>
                    <div className="">
                        <Blog type="conferences" />
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default NewsPage