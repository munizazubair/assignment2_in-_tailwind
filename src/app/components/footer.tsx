import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#f67a06] sm:h-[30px] h-[40px] flex justify-center">
      <Link className="text-black sm:text-lg text-base" href={"mailto:munizazubairkhan@gmail.com"}>
        gmail: munizazubair...
      </Link>
    </div>
  );
}
