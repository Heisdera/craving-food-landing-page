import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../data/customersReviewsData";
import { fadeIn } from "../utils/variants";

function PrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        zIndex: 10,
        left: "46%",
        top: "200px",
        transform: "scale(1.5)",
        background: "#eee",
      }}
      onClick={onClick}
    ></button>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        borderRadius: "50%",
        zIndex: 10,
        right: "46%",
        top: "200px",
        transform: "scale(1.5)",
        background: "#eee",
      }}
      onClick={onClick}
    ></button>
  );
}

function CustomersReview() {
  const settings = {
    focusOnSelect: true,
    infinite: false,
    speed: 500,
    arrow: true,
    swipeToSlide: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          infinite: false,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="w-full pb-3 pt-10">
      <motion.h2
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView="visible"
        className="text-center text-xl font-extrabold"
      >
        What customer says
      </motion.h2>
      <motion.p
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="visible"
        className="mx-auto w-[80%] pb-6 text-center text-sm"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione illo
        dolorem vitae aliquam exercitationem.
      </motion.p>

      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView="visible"
        className="flex h-[230px] flex-col gap-3 overflow-hidden"
      >
        <Slider {...settings}>
          {data.map((review) => (
            <div key={review.id}>
              <div className="mx-3 flex flex-col gap-3 rounded-md bg-primary-color p-4">
                <div className="flex items-center gap-[10px]">
                  <img
                    className="w-12"
                    src={review.image}
                    alt="darell steward"
                  />

                  <div>
                    <span className="whitespace-nowrap text-sm font-medium">
                      {review.name}
                    </span>
                    <span className="block text-[12px]">{review.status}</span>
                  </div>
                </div>

                <p className="text-[13px] leading-5">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </section>
  );
}

export default CustomersReview;
