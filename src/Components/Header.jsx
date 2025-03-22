import { useLocation } from "react-router-dom";
import { brainwave } from "../assets";
import { navigation } from "../Constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => {
    if (openNavbar) {
      setOpenNavbar(false);
      enablePageScroll();
    } else {
      setOpenNavbar(true);
      disablePageScroll();
    }
  };

  const HandleClick = () => {
    if (!openNavbar) return;
    enablePageScroll();
    setOpenNavbar(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b
     border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm
     ${openNavbar ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}
     `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a href="#hero" className="block w-[12rem] xl:mr-8 ">
          <img src={brainwave} width={190} height={40} alt="brainwave" />
        </a>

        <nav
          className={`fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex
         lg:mx-auto lg:bg-transparent 
         ${openNavbar ? "flex" : "hidden"}
         `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((link) => (
              <a
                href={link.url}
                key={link.id}
                onClick={HandleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 
                    transition-colors
                     hover:text-color-1 
                    ${link.onlyMobile ? "lg:hidden" : ""}
                    px-5 py-6  lg:-mr-0.25 lg:text-sm lg:font-semibold
                    ${
                      link.url === pathName.hash
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    }
                    lg:leading-5 lg:hover:text-n-1 xl:px-9 `}
              >
                {link.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className={"hidden lg:flex"} href={"#login"}>
          Sign in
        </Button>
        <Button
          className={"ml-auto lg:hidden "}
          px={"px-3"}
          onClick={toggleNavbar}
        >
          <MenuSvg openNavigation={openNavbar} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
