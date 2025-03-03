import Image from "next/image";
export default function success(){
    return(
        <div className="h-full items-center flex justify-center flex-col">
            <h1 className="text-4xl mt-8 mb-2">Order Placed</h1>
            <Image src="/success.png" height={200} width={150} alt="yess"/>
            <h3 className="text-4xl text-center mt-4">Your Items will be delivered shortly</h3>
        </div>
    );

}