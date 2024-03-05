import { motion } from "framer-motion";

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
    <motion.div>
      <div
        className={`${nav ? "fixed right-0 top-0 flex h-screen w-[280px] flex-col gap-8 bg-primary-color px-6 pt-[27px] ease-in-out md:hidden" : "fixed top-0 hidden h-screen w-[280px] gap-8 bg-primary-color px-4 pt-6 duration-500 ease-in-out md:hidden"}`}
      >
        <div className="px-2 py-20">
          <ul className="flex flex-col divide-y divide-[#e5e5e5]">
            {navItems.map(({ title, nav }, i) => (
              <li
                key={nav}
                className={`${activeNav === nav && "text-custom-orange-50"} cursor-pointer py-2 text-xl hover:text-custom-orange-50`}
                onClick={() => handleActiveNav(nav)}
              >
                {title}
              </li>
            ))}
          </ul>

          <button className="mt-7 w-fit rounded-full bg-custom-orange-100 px-7 py-1 text-white hover:bg-opacity-85">
            Login
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default SideMenu;
