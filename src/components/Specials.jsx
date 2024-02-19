function Specials() {
  return (
    <div className="px-4 sm:px-7">
      <div
        className="hide-scrollbar mx-auto max-w-[1225px] overflow-x-scroll"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
        }}
      >
        <div className="flex min-w-[1050px] justify-between py-20">
          <div className="flex w-[320px] items-center gap-3">
            <img
              className="mt-2 self-start rounded-md bg-primary-color p-2 md:p-[10px]"
              src="../../assets/clock.svg"
              alt=""
            />

            <div>
              <span className="mb-[6px] block text-sm font-bold md:text-base">
                24hrs Fast Delivery
              </span>

              <p className="text-[12px] md:text-sm">
                Once the order is received, the business processes it, which
                involves preparing the products, packaging them and assigning
                the order to a delivery team.
              </p>
            </div>
          </div>

          <div className="flex w-[320px] items-center gap-3">
            <img
              className="mt-2 self-start rounded-md bg-primary-color p-2 md:p-[10px]"
              src="../../assets/securityuser.svg"
              alt=""
            />

            <div>
              <span className="mb-[6px] block text-sm font-bold md:text-base">
                Place An Order
              </span>

              <p className="text-[12px] md:text-sm">
                Customers place their orders through the business&apos;s
                website, mobile app, or other ordering platforms. They select
                the items they want to purchase and provide.
              </p>
            </div>
          </div>

          <div className="flex w-[320px] items-center gap-3">
            <img
              className="mt-2 self-start rounded-md bg-primary-color p-2 md:p-[10px]"
              src="../../assets/location.svg"
              alt=""
            />

            <div>
              <span className="mb-[6px] block text-sm font-bold md:text-base">
                Track Delivery
              </span>

              <p className="text-[12px] md:text-sm">
                Watch as your order is prepared, dispatched, and arrives at your
                doorstep. Real-time updates ensured.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specials;
