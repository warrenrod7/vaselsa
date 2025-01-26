'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const products = [
    { id: 'tshirt1', name: 'Classic T-Shirt 1', price: 29.99, image: '/tshirt.jpeg' },
    { id: 'tshirt2', name: 'Classic T-Shirt 2', price: 39.99, image: '/tshirt.jpeg' },
    { id: 'tshirt3', name: 'Classic T-Shirt 3', price: 49.99, image: '/tshirt.jpeg' },
    { id: 'tshirt4', name: 'Classic T-Shirt 4', price: 59.99, image: '/tshirt.jpeg' },
  ];

  return (
    <div>
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex justify-center"
      >
        <Image src="/body2.jpg" alt="pic" width={1920} height={1080} />
      </motion.div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white p-4 flex flex-col items-center "
          >
            <a href={`/collections/${product.id}`} className="w-full">
              <div className="w-full aspect-w-1 aspect-h-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-lg font-semibold mt-4">{product.name}</p>
              <p className="text-sm text-gray-500 mt-1">INR {product.price}</p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
