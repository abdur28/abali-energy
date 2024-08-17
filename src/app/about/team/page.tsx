import Header from "@/components/Header"
import Image from "next/image"
import Link from "next/link"

const TeamPage = () => {
    const team = [
        {
            id: 1,
            name: "John Doe",
            role : "Chief Executive Officer",
            image: "https://media.istockphoto.com/id/991802392/photo/with-unfaltering-dedication-you-can-go-far-too.jpg?s=612x612&w=0&k=20&c=sc9aOuRFix1omGDain7gFo-DnC7yoxM-7To5Ve4H7dM=",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam tempore dolor perferendis omnis debitis delectus eum aliquam vitae alias. Dolorum, eum. Maxime eius voluptatem possimus aperiam! Laudantium, nemo suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique facere adipisci cupiditate doloribus totam eum ducimus, nihil alias labore rerum earum repellendus corrupti? Adipisci quod accusamus officiis consequatur iusto quidem?" 
        },
        {
            id: 2,
            name: "Jane Doe",
            role : "Chief Operating Officer",
            image: "https://media.istockphoto.com/id/1299077558/photo/lead-yourself-to-a-life-of-success.jpg?s=612x612&w=0&k=20&c=OQZPSnM1Eq-4Xx8bxJE8KQ5olJFfRw_YMc29aQ0Au6U=",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam tempore dolor perferendis omnis debitis delectus eum aliquam vitae alias. Dolorum, eum. Maxime eius voluptatem possimus aperiam! Laudantium, nemo suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique facere adipisci cupiditate doloribus totam eum ducimus, nihil alias labore rerum earum repellendus corrupti? Adipisci quod accusamus officiis consequatur iusto quidem?" 
        },
        {
            id: 3,
            name: "John Smith",
            role : "Chief Technology Officer",
            image: "https://media.istockphoto.com/id/936278022/photo/executive-senior-businessman-portrait.jpg?s=612x612&w=0&k=20&c=LIfPCNAtOrdL3PnDZRSzNU3myXVtt9shfJerzh4Wwdg=",
            info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam tempore dolor perferendis omnis debitis delectus eum aliquam vitae alias. Dolorum, eum. Maxime eius voluptatem possimus aperiam! Laudantium, nemo suscipit? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique facere adipisci cupiditate doloribus totam eum ducimus, nihil alias labore rerum earum repellendus corrupti? Adipisci quod accusamus officiis consequatur iusto quidem?" 
        },
    ]
    

    return (
        <div>
            <Header text="About Us" backgroundImage="https://media.istockphoto.com/id/177743945/photo/offshore-rig-in-twilight.jpg?s=612x612&w=0&k=20&c=xB4_3xsxLqD6s4e6dZaBgSmpC0BW_0nNpkf62j6Evd0="/> 
            <div className="flex flex-col w-full h-full p-10 font-asap gap-10">
                <div className="w-full h-full flex flex-col items-center justify-center ">
                    <h1 className="text-3xl font-semibold">Meet Our Team</h1>
                </div>

                {team.map((member) => (
                <div key={member.id} className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10 lg:px-10">
                    <div className="w-full md:w-1/2 px-10 lg:p-20 flex h-full  items-center  justify-center">
                        <Image
                            src={member.image}
                            alt="Abali Energy"
                            width={500}
                            height={500}
                            className="object-cover aspect-square rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start gap-5 text-center ">
                        <div className="flex flex-col w-full h-full justify-center items-center ">
                            <h1 className="text-3xl font-semibold">{member.name}</h1>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                        <p className="te">
                            {member.info}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )   
}

export default TeamPage