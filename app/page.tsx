import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mt-10 flex justify-center">
        <Image src="/body.jpg" alt="pic" width={350} height={100} />
      </div>
      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {/* Card 1 */}
        <div className="bg-white  p-4 flex flex-col items-center">
          <img
            src="/tshirt.jpg"
            alt="T-shirt 1"
            className="w-full h-full object-cover "
          />
          <p className="text-lg font-semibold mt-4">Classic T-Shirt 1</p>
          <p className="text-sm text-gray-500 mt-1">INR 29.99</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white  p-4 flex flex-col items-center">
          <img
            src="/tshirt.jpg"
            alt="T-shirt 2"
            className="w-full h-full object-cover "
          />
          <p className="text-lg font-semibold mt-4">Classic T-Shirt 2</p>
          <p className="text-sm text-gray-500 mt-1">INR 39.99</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 flex flex-col items-center">
          <img
            src="/tshirt.jpg"
            alt="T-shirt 3"
            className="w-full h-full object-cover "
          />
          <p className="text-lg font-semibold mt-4">Classic T-Shirt 3</p>
          <p className="text-sm text-gray-500 mt-1">INR 49.99</p>
        </div>

        {/* Card 4 */}
        <div className="bg-white p-4 flex flex-col items-center">
          <img
            src="/tshirt.jpg"
            alt="T-shirt 4"
            className="w-full h-full object-cover "
          />
          <p className="text-lg font-semibold mt-4">Classic T-Shirt 4</p>
          <p className="text-sm text-gray-500 mt-1">INR 59.99</p>
        </div>
      </div>
    </div>
  );
}
