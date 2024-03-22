import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Link from "next/link";

export default function Header({
  title = 'Emerge Digital',
  description,
  menuItems
}) {


  return (
      <header className="font-Inter w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
        <nav className="navbar flex justify-between items-center bg-white text-black py-[2.31rem]">
          <div className="flex items-center">
            <Link href="/">
              <img src="/logo.svg" alt="Emerge digital logo"/>
            </Link>
            <div className="hidden lg:flex">
              <NavigationMenu menuItems={menuItems} />
            </div>
          </div>
          <button className="px-[14px] py-[6px] hidden rounded-[8px] text-white lg:block text-[18px] font-semibold  bg-[#000000] h-[50px]">
            Book a Meeting
          </button>
        </nav>
      </header>
  );
}
