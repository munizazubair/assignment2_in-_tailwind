import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-[#f67a06] sm:h-[50px] h-[40px]">
      <ul className="flex justify-center items-center sm:text-xl sm:gap-6 text-lg gap-4 text-center pt-2">
        <Link href={"/"}> <li>Portfolio</li> </Link>
        <Link href={"/about"}> <li>About</li> </Link>
        <Link href={"/contact"}> <li>Contact Us</li> </Link>
      </ul>
    </div>
  );
}
