import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

function FooterHero() {
  return (
    <div className="hidden w-full bg-[#262626] bg-footer-hero-pattern px-4 pt-8 text-white sm:px-7 md:!block">
      <div className="mx-auto grid max-w-[1050px] grid-cols-2 gap-5">
        <div className="flex flex-col justify-center gap-6">
          <motion.h2
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="visible"
            className="text-2xl font-semibold leading-none"
          >
            Place an order with our mobile app
          </motion.h2>

          <motion.p
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView="visible"
            className="text-sm"
          >
            Why wait in line or stress about dinner plans when you can have a
            gourmet experience delivered straight to your doorstep? Our mobile
            app makes it convenient for you to explore our diverse menu,
            customize your order, and track it in real-time.
          </motion.p>

          <motion.p
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-sm"
          >
            Complete your order swiftly and securely with our streamlined
            checkout process. Your satisfaction is our priority, and that
            includes making your transaction hassle-free.
          </motion.p>

          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col gap-4 pb-2 md:flex-row md:gap-3"
          >
            <button className="flex w-fit items-center gap-2 rounded-md bg-custom-black-100 px-3 py-1 text-white outline outline-2 outline-[#ddd]">
              <img src="../../assets/apple.svg" alt="" />

              <p className="flex flex-col items-start tracking-wider">
                <span className="text-[10px] leading-3">Download on the </span>
                <span className="text-base font-medium leading-4">
                  App Store
                </span>
              </p>
            </button>

            <button className="flex w-fit items-center gap-2 self-center rounded-md bg-custom-black-100 px-3 py-1 text-white outline outline-2 outline-[#ddd] md:self-start">
              <img src="../../assets/google-play.svg" alt="" />

              <p className="flex flex-col items-start">
                <span className="text-[9px] leading-3">GET IT ON </span>
                <span className="text-base font-medium leading-4">
                  Google Play
                </span>
              </p>
            </button>
          </motion.div>
        </div>

        <div className="mx-auto flex w-[100%] justify-center md:w-full md:justify-end">
          <div className="relative">
            <motion.div
              variants={fadeIn("appear", 0.8)}
              initial="hidden"
              whileInView="visible"
            >
              <img
                className="absolute bottom-[15%] right-[93%] scale-75 lg:right-[100%] lg:scale-100"
                src="../../assets/animated-arrow.gif"
              />
            </motion.div>
            <motion.img
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView="visible"
              src="../../assets/mobile-mockup-2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterHero;
