import Link from "next/link";
export default function landing(){
    return (
        <div>
            <h1 className="text-center font-bold text-5xl">VASELSA</h1>
            <div className="flex flex-row space-x-20 flex justify-center">
            <div className="border "><Link href="/login">login</Link></div>
            <div className="border "><Link href="/signup">signup</Link></div>
            </div>
        </div>
        
    );

}