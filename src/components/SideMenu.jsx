import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, pop, slide } from "../utils/variants";
import { Link } from "react-scroll";

function SideMenu({ nav, activeNav, handleActiveNav, toggleNav }) {
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
    <AnimatePresence>
      {nav && (
        <motion.div
          variants={menuSlide}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed right-0 top-0 h-screen w-[260px] bg-primary-color px-6 pt-[100px]"
        >
          <ul className="flex flex-col divide-y divide-[#e5e5e5] px-2">
            {navItems.map(({ link, path }, i) => (
              <motion.li
                variants={slide(i)}
                key={path}
                className={`${activeNav === path && "text-custom-orange-50"} cursor-pointer py-2 text-xl hover:text-custom-orange-50`}
              >
                <Link
                  to={path}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  className="flex"
                  onClick={() => {
                    handleActiveNav(path);
                    toggleNav();
                  }}
                >
                  {link}
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            variants={pop}
            className="mt-7 w-fit rounded-full bg-custom-orange-100 px-7 py-1 text-white hover:bg-opacity-85"
          >
            Login
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideMenu;
