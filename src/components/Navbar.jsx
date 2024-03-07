import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import SideMenu from "./SideMenu";
import { Link } from "react-scroll";

function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [nav, setNav] = useState(false);
  const ref = useRef(null);
  const text = "Craving".split("");

  useEffect(function () {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setNav(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function handleActiveNav(nav) {
    setActiveNav(nav);
  }

  function handleToggleNav() {
    setNav((show) => !show);
  }

  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "Features",
      path: "features",
    },
    {
      link: "Groceries",
      path: "groceries",
    },
    {
      link: "Contact us",
      path: "contact",
    },
  ];

  return (
    <nav className="fixed top-0 z-30 w-full bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1290px] items-center justify-between gap-40 px-6 pt-3 backdrop-blur-sm">
        <div className="flex">
          {text.map((letter, i) => (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
              className="text-2xl font-bold"
              role="banner"
            >
              {letter}
            </motion.p>
          ))}
        </div>

        <div className="hidden w-[700px] items-center justify-between md:!flex">
          <ul className="flex gap-12">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                className={`${activeNav === path && "text-custom-orange-50"} cursor-pointer whitespace-nowrap text-sm hover:text-custom-orange-50`}
                onClick={() => handleActiveNav(path)}
              >
                {link}
              </Link>
            ))}
          </ul>

          <button className="hover:bg-opacity- mx-3 rounded-full bg-custom-orange-100 px-7 py-1 text-sm text-white hover:bg-opacity-85">
            Login
          </button>
        </div>

        <div className="z-50 md:hidden" ref={ref}>
          <MenuToggle toggle={handleToggleNav} nav={nav} />
          <SideMenu
            nav={nav}
            activeNav={activeNav}
            handleActiveNav={handleActiveNav}
            toggleNav={handleToggleNav}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
