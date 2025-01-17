'use client';
import Image from "next/image";

export default function Home() {
  const products = [
    { id: 'tshirt1', name: 'Classic T-Shirt 1', price: 29.99, image: '/tshirt.jpg' },
    { id: 'tshirt2', name: 'Classic T-Shirt 2', price: 39.99, image: '/tshirt.jpg' },
    { id: 'tshirt3', name: 'Classic T-Shirt 3', price: 49.99, image: '/tshirt.jpg' },
    { id: 'tshirt4', name: 'Classic T-Shirt 4', price: 59.99, image: '/tshirt.jpg' },
  ];

  return (
    <div>
      {/* Logo Section */}
      <div className="mt-10 flex justify-center">
        <Image src="/body.jpg" alt="pic" width={350} height={100} />
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 flex flex-col items-center rounded-lg">
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
          </div>
        ))}
      </div>
    </div>
  );
}
