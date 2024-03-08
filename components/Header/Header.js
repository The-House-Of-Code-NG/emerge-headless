
export default function Header({
  title = 'Headless by WP Engine',
  description,
  menuItems
}) {

  return (
      <header className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden">
        <nav className="navbar flex justify-between items-center bg-white text-black py-[2.31rem]">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Emerge digital logo"/>
            <div className="hidden lg:flex">
              <ul className="flex flex-row items-center space-x-8 ml-[2.25rem]">
                <li>
                  <a href="#" className="text-black text-[15px] font-medium font-['Inter'] leading-normal">Services</a>
                </li>
                <li>
                  <a href="#"
                     className="text-black text-[15px] font-medium font-['Inter'] leading-normal">Technologies</a>
                </li>
                <li>
                  <a href="#" className="text-black text-[15px] font-medium font-['Inter'] leading-normal">Case Study</a>

                </li>
                <li>
                  <a href="#" className="text-black text-[15px] font-medium font-['Inter'] leading-normal">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-black text-[15px] font-medium font-['Inter'] leading-normal">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <button className="px-[14px] py-[6px] hidden rounded-[8px] text-white lg:block text-[18px] font-semibold  bg-[#000000] h-[50px]">
            Book a Meeting
          </button>
        </nav>
      </header>
  );
}
