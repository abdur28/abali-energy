import Header from "@/components/Header"
import LocationPage from "@/components/Pages/LocationPage"

const Page = () => {
    const locations = [
        {
            id: 1,
            name: "Somalia",
            image: "/somalia.png",
        },
        {
            id: 2,
            name: "Djibouti",
            image: "/djibouti.png",
        },
        {
            id: 3,
            name: "Ethiopia",
            image: "/ethiopia.png",
        },
        {
            id: 4,
            name: "Kenya",
            image: "/kenya.png",
        },
        {
            id: 5,
            name: "Uganda",
            image: "/map.png",
        },
        {
            id: 6,  
            name: "Tanzania",
            image: "/tanzania.png",
        },
        {
            id: 7,
            name: "South Sudan",
            image: "/south-sudan.png",
        },
        {
            id: 8,
            name: "DRC Congo",
            image: "/drc-congo.png",
        }, 
    ]


    return (
        <div>
            <Header text="Where We Operate" backgroundImage="/globe.jpg"/> 
            <LocationPage locationsToString={JSON.stringify(locations)}/>
        </div>
    )
}

export default Page