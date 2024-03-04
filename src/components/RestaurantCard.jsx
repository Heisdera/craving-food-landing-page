import { motion } from "framer-motion";
import { populate } from "../utils/variants";

function RestaurantCard({ restaurant, i, displayItemsLength }) {
  const { name, image, menu, logo, location } = restaurant;

  return (
    <motion.div
      variants={populate(i)}
      initial="hidden"
      whileInView="visible"
      className={`${displayItemsLength === 4 && "lg:last-of-type:hidden"}`}
    >
      <div
        className={`group rounded-lg transition-all duration-300 hover:scale-[1.02] md:bg-white md:p-3 md:shadow-md`}
      >
        <div className="flex flex-col gap-2 md:border-b md:border-[#eee] md:pb-3">
          <div className="relative">
            <img className="w-full" src={image} alt={name} />
            <div className="absolute top-0 z-10 h-full w-full rounded-md bg-[#000] opacity-10 transition-all duration-300 hover:opacity-0 group-hover:opacity-0 md:bg-none"></div>
          </div>

          <h3 className="hidden pt-2 font-semibold leading-none tracking-wide md:!block">
            {name}
          </h3>
          <p className="hidden text-[12px] tracking-wide md:!block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum at
            dicta quibusdam quia placeat.
          </p>

          <div className="hidden justify-between md:!flex">
            <span className="rounded-2xl bg-primary-color px-3 py-1 text-[12px] tracking-wide">
              {menu[0]}
            </span>
            <span className="rounded-2xl bg-primary-color px-3 py-1 text-[12px] tracking-wide">
              {menu[1]}
            </span>
            <span className="rounded-2xl bg-primary-color px-3 py-1 text-[12px] tracking-wide">
              {menu[2]}
            </span>
            <span className="rounded-2xl bg-primary-color px-3 py-1 text-[12px] tracking-wide">
              {menu[3]}
            </span>
          </div>
        </div>

        <div className="hidden gap-2 pt-3 md:!flex">
          <img className="self-center" src={logo} alt={name} />

          <div className="flex flex-col gap-2">
            <p className="text-[12px] tracking-wider">{location}</p>

            <div className="flex gap-2">
              <p className="text-[12px] tracking-wider">
                Open at 7:00am - 11:00pm
              </p>

              <div className="flex gap-[2px]">
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
                <img src="../../assets/star.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default RestaurantCard;
