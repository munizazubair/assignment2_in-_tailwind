import Image from "next/image";
import image from "../app/public/image.jpg";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex sm:flex-row items-center justify-center sm:gap-8 sm:h-screen bg-black gap-12 flex-col h-screen pb-8">
        <div className="flex flex-col sm:gap-4 sm:h-[250px] gap-6 h-auto">
          <div className="font-extrabold text-white sm:text-3xl text-center text-2xl">
            Hey, My Name is <br />
            <span className="text-[#f67a06]">Muniza Zubair</span>
          </div>

          <div className="font-normal text-white sm:text-lg text-left text-base font-mono">
            I am a passionate frontend developer <br /> with expertise in
            TypeScript, <br />
            currently mastering Next.js.
          </div>
        </div>
        <Image src={image} className="sm:h-[150px] sm:w-[150px] rounded-full bg-azure h-[120px] w-[120px]" alt="my image" />
      </div>
      <Footer />
    </div>
  );
}
