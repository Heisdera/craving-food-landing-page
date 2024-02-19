import { useState } from "react";
import { data } from "../data/restaurantsData";
import RestaurantCard from "./RestaurantCard";

function FeaturedRestaurants() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  function handleCollapse() {
    setIsCollapsed((show) => !show);
  }

  let displayItems = isCollapsed ? data.slice(0, 4) : data;

  const displayItemsLength = displayItems.length;

  return (
    <section className="mx-auto max-w-[1225px] bg-primary-color px-4 py-12 sm:px-7">
      <div className="flex items-center justify-between pb-6">
        <h2 className="w-[50%] text-xl font-extrabold lg:w-[15%]">
          Our featured restaurant <span className="md:hidden">dishes</span>
        </h2>
        <p className="hidden w-[30%] text-[12px] lg:!block">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam
          excepturi minima tempora perspiciatis. Totam distinctio quos aliquam
          commodi quo?
        </p>

        <button
          className={`rounded-full border border-[#d0ff00e8] px-5 py-1 text-[13px] text-yellow-400 ${!isCollapsed && "border-[#ff8800e8] bg-white text-red-400"} whitespace-nowrap font-medium hover:bg-white`}
          onClick={handleCollapse}
        >
          {isCollapsed ? "View all" : "View less"}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-x-[4px] gap-y-[3px] sm:grid-cols-2 md:gap-x-4 md:gap-y-4 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-5">
        {displayItems.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            displayItemsLength={displayItemsLength}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedRestaurants;
