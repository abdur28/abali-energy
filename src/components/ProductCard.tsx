'use client'

import { motion } from "framer-motion"
import Link from "next/link"

const ProductCard = ({productToString}: {productToString: string}) => {
    const product = JSON.parse(productToString)
    return (
        <motion.div 
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        className="w-[250px] h-[250px] border-2 border-primary border-dashed hover:bg-primary hover:text-white">
            <Link
            href={`/products/${product.id}`}
            className="w-full h-full"
            >
                <div className="w-full h-full flex flex-col p-5 gap-5">
                    <div>
                        <h1 className="text-lg font-semibold font-asap">{product.name}</h1>
                    </div>
                    <div>
                        <p className="font-asap">{product.description}</p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default ProductCard