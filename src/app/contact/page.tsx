import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="h-screen bg-black text-white text-center flex flex-col justify-center sm:p-0 px-4">
        <h1 className="sm:text-3xl mb-4 text-2xl">Contact</h1>
        <p className="sm:text-lg text-base">
          For any inquiries, please contact us at:{" "}
          <Link href={"tel:(123) 456-7890"} className="text-[#f67a06]">
            [(123) 456-7890]
          </Link>
          <br />
          <br />
          ~MUNIZA ZUBAIR~
        </p>
      </div>
      <Footer />
    </div>
  );
}
