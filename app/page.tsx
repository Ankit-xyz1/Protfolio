import Mainpage from "@/components/Mainpage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-950">
      <div className=" w-full md:w-[50%]  p-1">
        <Mainpage/>
      </div>
    </div>
  );
}
