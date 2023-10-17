import purple from "../assets/images/Purple-Lens-Flare-PNG.png";
import hamburger from "../assets/images/Vector.png";
import { useState, useRef } from "react";

function Navbar({handleNavLinkClick}) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const handleMenuLinkClick = (section) => {
    toggleMenu();
    handleNavLinkClick(section);

    // Scroll to the clicked section
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <div className=" text-white border-b lg:block hidden border-gray-800 fixed xl:px-20 w-[100%] z-[99999999] bg-secondary-100 pb-5 pt-9">
        <nav className=" grid grid-cols-5">
          <div className=" col-span-2 text-left text-3xl font-bold ">
            <p className="ml-9">
              get<span className="text-secondary-300">linked</span>
            </p>
          </div>
          <div className="col-span-3 text-left font-medium">
            <a className=" xl:mx-8  text-sm cursor-pointer" onClick={() => handleNavLinkClick('Timeline')}>
              Timeline
            </a>
            <a className="mx-7 xl:mx-8 cursor-pointer text-sm"  onClick={()=> {handleNavLinkClick('Overview');toggleMenu();}}>
              Overview
            </a>
            <a className="mx-7 xl:mx-8 cursor-pointer text-sm"  onClick={() => handleNavLinkClick('FAQs')}>
              FAQs
            </a>
            <a className="mx-7 xl:mx-8 cursor-pointer text-sm" href="">
              Contact
            </a>

            <button className="px-10 py-3 primarys text-sm rounded-sm md:ml-10 xl:ml-16">
              Register
            </button>
          </div>
        </nav>
      </div>
      <div
        ref={menuRef} className={` text-white border-b  lg:hidden  border-gray-700 fixed   w-[100%] z-[99999999] bg-secondary-100 pb-7 pt-7`}
      >
        <nav className=" grid grid-cols-5 md:grid-cols-6 relative">
          <div className=" col-span-2 md:col-span-3 text-left text-xl pl-10 font-bold ">
            <p className="ml-5">
              get<span className="text-secondary-300">linked</span>
            </p>
          </div>
          <div className="col-span-2 md:col-span-2"></div>
          <div className={`menu-wrapper   col-span-1 pt-2 pl-2`}>
            <button onClick={toggleMenu}>
              {" "}
              <img src={hamburger} alt="" className="w-6" />
            </button>
            <div
              className={`menu left-0 right-0 top-0 w-[100%] h-[700px] bg-secondary-100 absolute ${
                isOpen
                  ? "transform translate-x-0 transition-transform duration-300 ease-in"
                  : "transform translate-x-full transition-transform duration-300 ease-out"
              } transition-all duration-00 px-7 ease-in-out transform`}
            >
              <span
                onClick={toggleMenu}
                className="rounded-full border-2 font-bold top-[15px] text-lg px-2 absolute right-[45px] border-secondary-300"
              >
                X
              </span>
              <p className="mb-5 font-bold mt-24 cursor-pointer" onClick={() => handleMenuLinkClick('Timeline')}>Timeline</p>
              <p className="mb-5 font-bold cursor-pointer" onClick={() => handleMenuLinkClick('Overview')}>Overview</p>
              <p className="mb-5 font-bold cursor-pointer" onClick={() => handleMenuLinkClick('FAQs') }>FAQs</p>
              <p className="mb-5 font-bold cursor-pointer">Contact</p>

              <button className=" px-12 font-semibold py-3 primarys text-sm mt-8 rounded-sm">
                Register
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
