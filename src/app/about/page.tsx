import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="h-screen bg-black text-white text-center flex flex-col justify-center sm:p-0 px-4">
        <h1 className="sm:text-3xl mb-4 text-2xl">--About--</h1>
        <p className="sm:text-lg text-base">
          We are a passionate team, dedicated to <br />
          providing the best services to our customers. <br />
          Our goal is to ensure customer satisfaction and <br />
          continuous improvement in everything we do. <br />
          <br />
          ~MUNIZA ZUBAIR~
        </p>
      </div>
      <Footer />
    </div>
  );
}
