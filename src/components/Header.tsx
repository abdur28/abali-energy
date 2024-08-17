const Header = ({text, backgroundImage} : {text: string, backgroundImage: string}) => {
    return (
        <div className="h-[300px] font-asap relative top-0 left-0 w-full"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
           <div
           className="absolute top-0 left-0 h-full w-full"
           style={{
               backgroundColor: "#57993F",
               opacity: 0.3
           }}
           >
           </div>
           <div className="absolute top-0 left-0 h-full w-full z-10 ">
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <h1 className="text-4xl text-center text-white font-semibold">{text}</h1>
                </div>        
            </div>   
        </div>
    )
}

export default Header