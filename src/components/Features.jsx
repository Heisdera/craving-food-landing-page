import { motion } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { fadeIn } from "../utils/variants";

function Features() {
  return (
    <section className="mx-auto max-w-[1225px] px-4 py-10 sm:px-7 md:pb-24 md:pt-16">
      <h2 className="text-center text-xl font-extrabold">Our Features</h2>
      <p className="pb-6 text-center text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam
        nulla facere quod aut qui.
      </p>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-1 rounded-md border border-[#dddd] p-3"
        >
          <div className="flex flex-col rounded-lg bg-primary-color md:px-4 md:py-8">
            <div className="rounded-lg bg-white md:px-3 md:py-4">
              <h4 className="font-mediun text-[15px]">Order Details</h4>

              <div>
                <div className="flex h-16 items-center justify-between gap-1 px-[6px] md:h-20 md:border-b">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex gap-1">
                      <input className="" type="checkbox" />

                      <img
                        className="rounded-md bg-[#fafafa] px-2 py-1"
                        src="../../assets/small-burger.png"
                        alt="burger"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <span className="text-[11px] tracking-wide text-[#444]">
                        Chicken burger
                      </span>
                      <span className="w-fit rounded-full bg-green-500 px-2 py-[2px] text-[10px] tracking-wide text-white">
                        N4000
                      </span>
                    </div>
                  </div>

                  <div className="flex w-[85px] items-center justify-around rounded-2xl bg-custom-black-100 px-1 py-[3px] text-white">
                    <button className="w-[24px] self-stretch rounded-full bg-primary-color text-custom-black-50">
                      -
                    </button>
                    <span>1</span>
                    <button className="w-[24px] rounded-full bg-primary-color pb-[2px] text-custom-black-50">
                      +
                    </button>
                  </div>
                </div>

                <div className="hidden py-2 md:!block">
                  <div className="flex justify-between py-[2px] text-[11px] tracking-wide text-[#444]">
                    <span>Chicken burger</span>
                    <span>N2500</span>
                  </div>
                  <div className="flex justify-between py-[2px] text-[11px] tracking-wide text-[#444]">
                    <span>Delivery</span>
                    <span>N1500</span>
                  </div>
                  <div className="flex justify-between py-[2px] text-[11px] font-medium tracking-wide text-[#444]">
                    <span>Total price</span>
                    <span>N4000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:!block">
            <h3 className="pb-1 text-[18px] font-bold">Order Processing</h3>

            <p className="text-sm">
              Add a personal touch to your order. Customize ingredients, choose
              portion sizes, and make your meal truly yours.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-[6px] rounded-md border border-[#dddd] p-3"
        >
          <div className="h-full rounded-lg md:flex md:h-[276px] md:items-center md:bg-primary-color md:px-4 md:py-10">
            <span className="text-sm font-medium tracking-wide md:hidden">
              Track Order
            </span>
            <div className="h-[250px] w-full rounded-md md:h-full">
              <MapContainer
                center={[6.596, 3.34]}
                zoom={15}
                scrollWheelZoom={true}
                className="z-0"
                style={{ height: "100%", width: "100%", borderRadius: "8px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                  className=""
                />
                <Marker position={[6.5965, 3.34]}>
                  <Popup className="text-sm font-bold">
                    Estimated delivery time to IKEJA <br /> 15mins
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <div className="hidden md:!block">
            <h3 className="pb-1 text-[18px] font-bold">Track Order</h3>

            <p className="text-sm">
              Watch as your order is prepared, dispatched, and arrives at your
              doorstep. Real-time updates ensure you&apos;re always in the loop.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-[6px] rounded-md border border-[#dddd] md:col-span-2 md:p-3 lg:col-span-1"
        >
          <div className="flex flex-col rounded-lg md:flex-row md:gap-3 md:bg-primary-color md:px-4 md:pb-3 md:pt-8 lg:flex-col">
            <div className="mx-2 flex items-center gap-[10px] border-b bg-white px-2 py-4 md:mx-0 md:w-1/2 md:rounded-lg md:py-0 lg:w-full">
              <div className="relative">
                <img src="../../assets/john-samuel.png" alt="" />

                <div className="absolute left-3.5 top-11 flex items-center gap-[2px] rounded bg-[#f1f1f1] px-1 py-[3px]">
                  <img className="w-2" src="../../assets/star.svg" alt="" />
                  <span className="pt-[2px] text-[9px] leading-none">4.0</span>
                </div>
              </div>

              <div className="w-[85%] py-3">
                <span className="text-sm font-medium">John Samuel</span>

                <p className="text-[12px]">
                  Instant delivery and best customer services so far I enjoyed
                  eating their burger
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1 rounded-lg bg-white px-3 pb-3 pt-3 md:w-1/2 md:pb-1 lg:w-full">
              <h4 className="font-mediun text-[15px]">Write your review</h4>

              <div className="flex justify-between gap-[2px] md:flex-col md:justify-normal">
                <textarea
                  className="w-[90%] rounded-md bg-primary-color placeholder:pl-2 placeholder:pt-1 placeholder:text-sm"
                  cols="10"
                  rows="3"
                  placeholder="comment"
                ></textarea>

                <button className="self-end pl-2 text-sm text-green-400">
                  Send
                </button>
              </div>
            </div>
          </div>

          <div className="hidden md:!block">
            <h3 className="pb-1 text-[18px] font-bold">Reviews</h3>

            <p className="text-sm">
              Write down your reviews on your favorite restaurants, and we will
              appreciate how good the food was for you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
