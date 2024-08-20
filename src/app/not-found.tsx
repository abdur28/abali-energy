import Link from "next/link"

const NotFound = () => {

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-5">
                <p className="text-4xl font-asap font-semibold">Page Not Found</p>
                <Link
                href="/"
                >
                    <button className="bg-primary px-3 py-2 rounded-lg  text-white hover:bg-secondary">
                        Home
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
