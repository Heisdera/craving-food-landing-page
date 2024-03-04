import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

function currentYear() {
  const year = new Date().getFullYear();

  return year;
}

function Footer() {
  const text = "Craving".split("");

  return (
    <footer className="w-full bg-[#262626] px-4 py-4 text-[#f9fdfe] sm:px-7 md:bg-white md:py-6 md:text-custom-black-100">
      <div className="mx-auto flex max-w-[1050px] flex-col tracking-wider">
        <div className="flex flex-col justify-between gap-5 border-b-2 border-[#eee] py-3 tracking-wider md:flex-row md:border-custom-black-50">
          <div className="flex justify-between md:flex-col">
            <div className="flex">
              {text.map((letter, i) => (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                  className="text-[18px] font-semibold"
                  role="banner"
                >
                  {letter}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm">Customer service</p>
              <p className="text-[12px]">24/7 support by chat, email & calls</p>
            </div>
          </div>

          <div className="flex justify-between md:w-[35%]">
            <ul className="flex flex-col gap-[10px]">
              <li className="cursor-pointer text-sm font-semibold">Company</li>
              <li className="cursor-pointer text-sm">Products</li>
              <li className="cursor-pointer text-sm">Restaurants</li>
              <li className="cursor-pointer text-sm">About</li>
              <li className="cursor-pointer text-sm">Delivery</li>
            </ul>

            <ul className="flex flex-col gap-[10px]">
              <li className="cursor-pointer text-sm font-semibold">Support</li>
              <li className="cursor-pointer text-sm">Terms and Conditions</li>
              <li className="cursor-pointer text-sm">Privacy Policy</li>
              <li className="cursor-pointer text-sm">Blogs</li>
              <li className="cursor-pointer text-sm">Contact us</li>
            </ul>
          </div>

          <div className="flex items-center justify-between md:flex-col md:self-center md:border-none">
            <div className="flex gap-3">
              <motion.a
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.3,
                    ease: "linear",
                  },
                }}
                className="flex rounded-md bg-primary-color px-2.5 py-1.5 hover:bg-[#eee] md:bg-transparent"
                href=""
              >
                <img src="../../assets/facebook.svg" alt="" />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.5,
                    ease: "linear",
                  },
                }}
                className="flex rounded-md bg-primary-color px-[7px] py-1.5 hover:bg-[#eee] md:bg-transparent"
                href="https://twitter.com/Heisdera_Tech"
                target="_blank"
              >
                <img src="../../assets/twitter.svg" alt="" />
              </motion.a>
              <motion.a
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    type: "tween",
                    duration: 0.6,
                    delay: 0.7,
                    ease: "linear",
                  },
                }}
                className="flex rounded-md bg-primary-color px-2 py-1.5 hover:bg-[#eee] md:bg-transparent"
                href="https://instagram.com/heisdera"
                target="_blank"
              >
                <img src="../../assets/instagram.svg" alt="" />
              </motion.a>
            </div>

            <div className="flex items-center gap-1">
              <p className="whitespace-nowrap leading-none">Design credits:</p>
              <span>
                {" "}
                <motion.a
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      type: "tween",
                      duration: 0.6,
                      delay: 0.9,
                      ease: "linear",
                    },
                  }}
                  className="flex rounded-md bg-primary-color px-[7px] py-1.5 hover:bg-[#eee] md:bg-transparent"
                  href="https://twitter.com/mhiz_jeni/status/1750132003834405058"
                  target="_blank"
                >
                  <img src="../../assets/twitter.svg" alt="" />
                </motion.a>
              </span>
            </div>
          </div>
        </div>

        <div className="self-center py-2">
          <p>Copyright &copy; {currentYear()} Craving. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
