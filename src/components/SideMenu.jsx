import { motion, AnimatePresence } from "framer-motion";
import { menuSlide, pop, slide } from "../utils/variants";

function SideMenu({ nav, activeNav, handleActiveNav }) {
  const navItems = [
    {
      title: "Home",
      nav: "home",
    },
    {
      title: "Features",
      nav: "features",
    },
    {
      title: "Groceries",
      nav: "groceries",
    },
    {
      title: "Contact us",
      nav: "contact",
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
            {navItems.map(({ title, nav }, i) => (
              <motion.li
                variants={slide(i)}
                key={nav}
                className={`${activeNav === nav && "text-custom-orange-50"} cursor-pointer py-2 text-xl hover:text-custom-orange-50`}
                onClick={() => handleActiveNav(nav)}
              >
                {title}
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
