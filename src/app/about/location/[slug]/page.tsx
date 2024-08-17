import Header from "@/components/Header"
import { notFound } from "next/navigation"

const Page = ({ params: { slug } }: { params: { slug: string } }) => {
    const name = slug.replace("-", " ")

    const locations = [
        {
            id: 1,
            name: "Nigeria",
            image: "/nigeria.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 2,
            name: "Ghana",
            image: "/ghana.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 3,
            name: "South Africa",
            image: "/south-africa.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 4,
            name: "Kenya",
            image: "/kenya.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 5,
            name: "Uganda",
            image: "/map.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 6,
            name: "Ethiopia",
            image: "/ethiopia.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 7,
            name: "Egypt",
            image: "/egypt.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 8,
            name: "Chad",
            image: "/chad.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 9,
            name: "Sudan",
            image: "/sudan.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        },
        {
            id: 10,
            name: "Morocco",
            image: "/morocco.png",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71858.06033131605!2d37.44036788403392!3d55.748697451607775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5495b648241ed%3A0xd291561f220a6ca1!2sFili!5e0!3m2!1sen!2sru!4v1723864005574!5m2!1sen!2sru",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sunt labore reprehenderit dolor delectus rerum asperiores mollitia, error, laudantium nisi nesciunt unde minima quo molestias pariatur velit excepturi. Deserunt, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ipsa provident, nisi esse asperiores rem earum quia. Dolor perferendis tempora, qui pariatur impedit ad voluptatibus assumenda, velit placeat deserunt unde. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium rem repudiandae distinctio eos nihil repellendus debitis itaque quam. Esse iste dolorem ducimus delectus deleniti nisi mollitia. Nulla, nostrum! Fuga, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non minus voluptatibus impedit. Asperiores aliquam accusantium aut excepturi sed blanditiis nobis alias consequuntur ut non. Iure corrupti perspiciatis quasi repellat pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias voluptatum dicta, voluptates, unde atque hic neque itaque ipsum iure nostrum assumenda laboriosam modi numquam consequuntur! Aspernatur ratione sunt molestias praesentium."
        }
    ]

    const location = locations.find((location) => location.name.toLowerCase() === name.toLowerCase())

    if (!location) {
        notFound()
    }

    return (
        <div>
            <Header text="About Us" backgroundImage="https://media.istockphoto.com/id/177743945/photo/offshore-rig-in-twilight.jpg?s=612x612&w=0&k=20&c=xB4_3xsxLqD6s4e6dZaBgSmpC0BW_0nNpkf62j6Evd0="/> 
            <div className="w-full h-full flex flex-col justify-center items-center p-10 gap-10 font-asap">
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-5">
                    <h1 className="text-3xl font-semibold">{`Abali Energy, ${location.name}`}</h1>
                    <p className="text-lg lg:px-20">{location.description}</p>
                </div>
                <div className="w-full h-full flex justify-center items-center  lg:p-10">
                    <iframe src={location.location} width="100%" height="450" style={{border:0, borderRadius:"10px"}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Page