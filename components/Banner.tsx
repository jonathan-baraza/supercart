"use client"
import { useRef, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiSearchLine } from "react-icons/ri";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { motion, useInView } from "framer-motion";
function Banner() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };
  return (
    <div
      id="top"
      className="relative"
      style={{ minHeight: "", backgroundColor: "#e3ffe6" }}
    >
      <Swiper
        onInit={(swiper) => {
          if (swiper.params.navigation) {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        // onSwiper={(swiper) => console.log(swiper)}
        className="p-5 h-[60vh]  md:h-screen"
      >
        {/* Banner Slide 1 */}
        <SwiperSlide
          id="bannerSlider"
          className=" .banner-slider    "
          style={{ display: "flex" }}
        >
          {({ isActive }) => (
            <>
              <div
                className="bg-gray-100 bg-opacity-20 md:bg-opacity-0 flex flex-col space-y-6 md:space-y-10 m-0 items-start justify-center w-full md:w-3/4 p-6  md:p-20"
                style={{ zIndex: "30" }}
              >
                <motion.h3
                  animate={{ x: isActive ? 0 : -50, opacity: isActive ? 1 : 0 }}
                  initial={{ x: -50, opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0 }}
                  className=" text-base md:text-lg md:text-xl font-bold text-[#334155] "
                >
                  In this season, find the best 🔥
                </motion.h3>
                <motion.h1
                  animate={{ x: 0 }}
                  initial={{ x: -50 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="text-3xl md:text-6xl font-bold text-[#0f172a] "
                  data-aos="fade-up"
                >
                  Exclusive Collection for everyone
                </motion.h1>
                <motion.button
                  animate={{ x: 0 }}
                  initial={{ x: -50 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  style={{ marginTop: "50px" }}
                  className="flex items-center bg-[#0f172a] hover:bg-[#060b13] hover:scale-95 duration-100 text-slate-50 pt-3 pb-3 md:pt-4 md:pb-4 pl-6 pr-6 rounded-3xl "
                >
                  Explore now <RiSearchLine size={20} className="ml-2" />
                </motion.button>
              </div>
              <motion.div
                animate={{ scale: 1, opacity: 1 }}
                initial={{ scale: 1.2, opacity: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute w-full md:w-1/2  bottom-0 md:right-[20px] md:top-[5%]"
                exit={{ scale: 1.2, opacity: 0.5 }}
                // style={{
                //   width: "50%",
                //   position: "absolute",
                //   right: "20px",
                //   top: "5%",
                // }}
              >
                <img
                  className="w-full"
                  src={"/banner/bannerPic1.webp"}
                  alt="bannerPic"
                />
              </motion.div>
            </>
          )}
        </SwiperSlide>
        {/* Banner Slide 2 */}
        <SwiperSlide
          id="bannerSlider"
          style={{ display: "flex", minHeight: "" }}
        >
          <div
            className="bg-gray-100 bg-opacity-20 md:bg-opacity-0 flex flex-col space-y-6 md:space-y-10 m-0 items-start justify-center w-full md:w-3/4 p-6  md:p-20"
            style={{ zIndex: "30" }}
          >
            <motion.h3
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="text-base md:text-lg md:text-xl font-bold text-[#334155]"
            >
              Discover More. Shop Better 🌟
            </motion.h3>
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-3xl  md:text-6xl font-bold text-[#0f172a]"
            >
              Shop Smarter Today!
            </motion.h1>
            <motion.button
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{ marginTop: "50px" }}
              className="flex items-center bg-[#0f172a] hover:bg-[#060b13] hover:scale-95 duration-100 text-slate-50 pt-4 pb-4 pl-6 pr-6 rounded-3xl "
            >
              Explore now <RiSearchLine size={20} className="ml-2" />
            </motion.button>
          </div>
          <motion.div
            animate={{ scale: 0.9, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full md:w-1/2 bottom-0 md:right-[20px] md:top-[5%]"
            // style={{
            //   width: "50%",
            //   position: "absolute",
            //   right: "20px",
            //   top: "5%",
            // }}
          >
            <img
              className="w-full"
              src={"/banner/bannerPic2.webp"}
              alt="bannerPic"
            />
          </motion.div>
        </SwiperSlide>

        {/* Banner Slide 3 */}
        <SwiperSlide
          id="bannerSlider"
          style={{ display: "flex", minHeight: "" }}
        >
          <div
            className="bg-gray-100 bg-opacity-20 md:bg-opacity-0 flex flex-col space-y-6 md:space-y-10 m-0 items-start justify-center w-full md:w-3/4 p-6  md:p-20"
            style={{ zIndex: "30" }}
          >
            <motion.h3
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="text-base md:text-lg md:text-xl font-bold text-[#334155]"
            >
              In this season, find the best 🔥
            </motion.h3>
            <motion.h1
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-3xl md:text-6xl font-bold text-[#0f172a]"
            >
              Exclusive Collection for everyone
            </motion.h1>
            <motion.button
              animate={{ x: 0 }}
              initial={{ x: -50 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              style={{ marginTop: "50px" }}
              className="flex items-center bg-[#0f172a] hover:bg-[#060b13] hover:scale-95 duration-100 text-slate-50 pt-4 pb-4 pl-6 pr-6 rounded-3xl "
            >
              Explore now <RiSearchLine size={20} className="ml-2" />
            </motion.button>
          </div>
          <motion.div
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute w-full md:w-1/2 bottom-0 md:right-[20px] md:bottom-[0%]"
            // style={{
            //   width: "50%",
            //   position: "absolute",
            //   right: "20px",
            //   bottom: "0",
            // }}
          >
            <img
              className="w-full"
              src={"/banner/bannerPic3.webp"}
              alt="bannerPic"
            />
          </motion.div>
        </SwiperSlide>
      </Swiper>
      <span ref={prevRef}>
        <BsArrowLeft
          size={40}
          color={"black"}
          className=" swiper_prev_btn  swiper_btn rounded-circle p-2 bg-light absolute bottom-4 md:top-[50%] left-5 z-30 hover:cursor-pointer hover:border p-3 rounded-full hover:border-[#060b13]"
        />
      </span>
      <span ref={nextRef}>
        <BsArrowRight
          size={40}
          color={"black"}
          className=" swiper_next_btn  swiper_btn rounded-circle p-2 bg-light absolute bottom-4 md:top-[50%] right-5 z-30 hover:cursor-pointer hover:border p-3 rounded-full hover:border-[#060b13]"
        />
      </span>
    </div>
  );
}

export default Banner;
