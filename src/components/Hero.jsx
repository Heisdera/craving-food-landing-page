import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";

function Hero() {
  return (
    <section className="mt-[78px] px-4 sm:px-7" id="home">
      <div className="mx-auto flex max-w-[1225px] flex-col justify-between rounded-2xl bg-primary-color pl-5 pr-5 pt-2 md:flex-row md:pl-12 md:pr-20">
        <div className="self-center">
          <div className="flex flex-col gap-3 pt-7 sm:w-[90%] md:pt-0 lg:w-[80%] xl:w-[70%]">
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView="visible"
              className="flex w-fit items-center justify-center gap-1 rounded-md bg-orange-100 px-2 py-1 text-sm text-custom-orange-100"
            >
              <p>Fast food delivery</p>
              <img src="../../assets/emoji-fire.png" alt="" />
              <img src="../../assets/emoji-rocket.png" alt="" />
            </motion.div>

            <motion.h1
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              whileInView="visible"
              className="text-3xl font-extrabold lg:text-4xl xl:text-[42px] xl:leading-[1.1]"
            >
              Enjoy Fresh Food in Your{" "}
              <span className="inline text-custom-orange-100">
                Healthy Life
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView="visible"
              className="pb-1 pt-2 text-sm xl:text-base"
            >
              Our commitment is to provide you with a menu that only satisfies
              your taste buds but also contributes to your overall well-being.
            </motion.p>

            <motion.div
              variants={fadeIn("left", 0.6)}
              initial="hidden"
              whileInView="visible"
              className="flex gap-3 pb-2"
            >
              <button className="flex w-fit items-center gap-2 rounded-md bg-custom-black-100 px-3 py-1 text-white">
                <img src="../../assets/apple.svg" alt="" />

                <p className="flex flex-col items-start tracking-wider">
                  <span className="text-[10px] leading-3">
                    Download on the{" "}
                  </span>
                  <span className="text-base font-medium leading-4">
                    App Store
                  </span>
                </p>
              </button>

              <button className="flex w-fit items-center gap-2 rounded-md bg-custom-black-100 px-3 py-1 text-white">
                <img src="../../assets/google-play.svg" alt="" />

                <p className="flex flex-col items-start">
                  <span className="text-[9px] leading-3">GET IT ON </span>
                  <span className="text-base font-medium leading-4">
                    Google Play
                  </span>
                </p>
              </button>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.7)}
              initial="hidden"
              whileInView="visible"
              className="flex gap-4"
            >
              <span className="text-[12px] tracking-wide">13k reviews</span>

              <div className="flex gap-[2px]">
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex justify-center pt-[50px] md:pt-[80px]">
          <motion.div
            variants={fadeIn("appear", 0.8)}
            initial="hidden"
            whileInView="visible"
          >
            <img
              className="absolute right-[-15px] top-[-10px] rotate-[135deg] scale-75 sm:top-[40%] md:right-[90%] md:top-[50%] md:rotate-0 lg:right-[110%] lg:top-[55%] lg:scale-100"
              src="../../assets/animated-arrow.gif"
            />
          </motion.div>

          <motion.img
            variants={fadeIn("appear", 1.2)}
            initial="hidden"
            whileInView="scale"
            className="absolute bottom-[83%] right-[7%] w-[12px] scale-[3] animate-pulse sm:bottom-[15%] sm:right-[90%] md:right-[115%]"
            src="../../assets/group-sparkles.png"
            alt=""
          />

          <motion.img
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView="visible"
            src="../../assets/mobile-mockup-1.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
