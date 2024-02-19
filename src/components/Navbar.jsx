import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [nav, setNav] = useState(false);
  const ref = useRef(null);

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

  return (
    <nav className="sticky top-0 z-30 w-full bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1290px] items-center justify-between gap-40 px-6 pb-4 pt-10 backdrop-blur-sm">
        <p className="text-2xl font-bold" role="banner">
          Craving
        </p>

        <div className="hidden w-[700px] items-center justify-between md:!flex">
          <ul className="flex gap-12">
            <li
              className={`${activeNav === "home" && "text-custom-orange-50"} cursor-pointer text-sm hover:text-custom-orange-50`}
              onClick={() => handleActiveNav("home")}
            >
              Home
            </li>
            <li
              className={`${activeNav === "features" && "text-custom-orange-50"} cursor-pointer text-sm hover:text-custom-orange-50`}
              onClick={() => handleActiveNav("features")}
            >
              Features
            </li>
            <li
              className={`${activeNav === "groceries" && "text-custom-orange-50"} cursor-pointer text-sm hover:text-custom-orange-50`}
              onClick={() => handleActiveNav("groceries")}
            >
              Groceries
            </li>
            <li
              className={`${activeNav === "contact" && "text-custom-orange-50"} cursor-pointer whitespace-nowrap text-sm hover:text-custom-orange-50`}
              onClick={() => handleActiveNav("contact")}
            >
              Contact us
            </li>
          </ul>

          <button className="mx-3 rounded-full bg-custom-orange-100 px-7 py-1 text-sm text-white">
            Login
          </button>
        </div>

        <div className="z-50 md:hidden" ref={ref}>
          <button
            className="flex rounded-md p-1 hover:bg-primary-color"
            onClick={handleToggleNav}
          >
            {nav ? (
              <svg
                fill="none"
                height="30"
                width="30"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            ) : (
              <svg
                fill="none"
                height="30"
                viewBox="0 0 24 24"
                width="30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
                  fill="currentColor"
                />
                <path
                  d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
                  fill="currentColor"
                />
                <path
                  d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>

          <div
            className={`${nav ? "fixed right-0 top-0 flex h-screen w-[280px] flex-col gap-8 bg-primary-color px-6 pt-[27px] ease-in-out md:hidden" : "fixed top-0 hidden h-screen w-[280px] gap-8 bg-primary-color px-4 pt-6 duration-500 ease-in-out md:hidden"}`}
          >
            <button
              className="flex self-end p-1 hover:bg-primary-color"
              onClick={handleToggleNav}
            >
              <svg
                fill="none"
                height="30"
                width="30"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" x2="6" y1="6" y2="18" />
                <line x1="6" x2="18" y1="6" y2="18" />
              </svg>
            </button>

            <div className="px-2">
              <ul className="flex flex-col">
                <li
                  className={`${activeNav === "home" && "text-custom-orange-50"} cursor-pointer border-b border-[#ddd] py-2 text-lg hover:text-custom-orange-50`}
                  onClick={() => handleActiveNav("home")}
                >
                  Home
                </li>
                <li
                  className={`${activeNav === "features" && "text-custom-orange-50"} cursor-pointer border-b border-[#ddd] py-2 text-lg hover:text-custom-orange-50`}
                  onClick={() => handleActiveNav("features")}
                >
                  Features
                </li>
                <li
                  className={`${activeNav === "groceries" && "text-custom-orange-50"} cursor-pointer border-b border-[#ddd] py-2 text-lg hover:text-custom-orange-50`}
                  onClick={() => handleActiveNav("groceries")}
                >
                  Groceries
                </li>
                <li
                  className={`${activeNav === "contact" && "text-custom-orange-50"} cursor-pointer text-lg hover:text-custom-orange-50`}
                  onClick={() => handleActiveNav("contact")}
                >
                  Contact us
                </li>
              </ul>

              <button className="mt-6 w-fit rounded-full bg-custom-orange-100 px-7 py-1 text-sm text-white hover:bg-[#ddd] hover:text-custom-orange-100">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
