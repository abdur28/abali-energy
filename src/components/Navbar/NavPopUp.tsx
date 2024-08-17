import Link from "next/link"

const NavPopUp = ({subItems}: any) => {
    return (
        <div className="absolute top-0 left-0 flex flex-col bg-gray-100 -ml-3 mt-7 pt-3"> 
            <ul>
                {subItems.map((item: any) => (
                    <li key={item.name} className="cursor-pointer px-3 py-2 text-nowrap border-t-[0.5px] border-gray-300 hover:bg-primary hover:text-white">
                        <Link href={item.link} className="inline-block">
                        {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>  
    )
}

export default NavPopUp