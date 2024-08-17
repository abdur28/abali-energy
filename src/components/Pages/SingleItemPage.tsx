import Image from "next/image"

const SingleItemPage = ({itemToString}: {itemToString: string}) => {
    const item = JSON.parse(itemToString)

    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center p-10 gap-10">
            <div className="w-full h-full">
                <h1 className="text-3xl font-asap font-semibold">{item.name || item.title}</h1>
                {item.date &&  <p className="text-lg font-asap text-gray-600">Last updated: {item.date}</p>}
            </div>
            <p className="text-lg lg:px-20 font-asap">{item.description}</p>
            <div className="w-full h-full flex flex-row flex-wrap justify-center items-center">
                {item.image && (
                    <div className="w-[150px] md:w-[250px] h-full aspect-square p-2">
                        <Image src={item.image} alt="image" width={500} height={500} className="w-full h-full object-cover" />
                    </div>
                )}
                {item.optionalImages && item.optionalImages.map((image: any) => (
                    <div className="w-[150px] md:w-[250px] h-full aspect-square p-2 ">
                        <Image src={image} alt="image" width={500} height={500} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SingleItemPage