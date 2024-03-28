import { useState } from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Link from "next/link";
import {motion} from 'framer-motion'
import { Container } from "../Container";
import MobileMenu from "../NavigationMenu/MobileMenu";
export default function Header({
  title = 'Emerge Digital',
  description,
  menuItems
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header className="font-Inter w-full px-[20px] lg:px-[128px] overflow-hidden">
        <nav className="navbar flex justify-between items-center bg-white text-black py-[36.96px]">
          <div className="flex items-center !sm:justify-between">
            <Link href="/">
              <img src="/logo.svg" alt="Emerge digital logo"/>
            </Link>
          <div className="hidden lg:flex">
            <NavigationMenu menuItems={menuItems} />
           </div>
           <motion.div
           className="lg:hidden absolute top-0 left-0 min-h-[30vh] pb-5 w-full bg-white"
              animate={isMenuOpen ? "open" : "closed"} 
              initial={{ opacity: 0 }} // Initially hidden
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: "-100%" },
              }}
              transition={{ duration: 0.4 }}
            >
              <Container>
                <div className="flex justify-between items-center w-full py-3">
                  <Link href="/">
                    <img src="/logo.svg" alt="Emerge digital logo"/>
                  </Link>
                  
                  <button onClick={toggleMenu} className="lg:hidden block">
                    <img src="/times.svg" alt="Menu Toggle" /> 
                  </button>
                </div>
              </Container>
              <div className="flex flex-col justify-center items-center h-full w-full">
                <Container>
                  <MobileMenu menuItems={menuItems} mobile />
                </Container>
                <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d62ba3"
              }}
              transition={{ duration: 0.5, yoyo: Infinity }}
              href='/#book-a-meeting' className="mt-5 px-[.875rem] py-[.375rem] font-Inter rounded-[.5rem] text-white lg:block text-[1.125rem] font-semibold flex items-center  bg-[#000000]">
              Book a Meeting
          </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="hidden lg:block">
          <motion.a
              whileHover={{
                scale: 1.1,
                backgroundColor: "#d62ba3"
              }}
              transition={{ duration: 0.5, yoyo: Infinity }}
              href='/#book-a-meeting' className="px-[.875rem] py-[.375rem] font-Inter hidden rounded-[.5rem] text-white lg:block text-[1.125rem] font-semibold flex items-center  bg-[#000000]">
              Book a Meeting
          </motion.a>
          </div>
          <button onClick={toggleMenu} className="lg:hidden block">
            <img src="/hamburger.svg" alt="Menu Toggle" /> 
          </button>
        </nav>
      </header>
  );
}
