"use client";
import { useState, useRef } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import { ProductCardType } from "@/Types/products";
import ProductCardMax from "../product/ProductCardMax";

interface titleType {
  title1: string;
  title2: string;
}

function ProductsSliderCoverMax(props: titleType) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [activeBtn, setActiveBtn] = useState<string>("right");
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const [products, setProducts] = useState<ProductCardType[]>([
    {
      bg: "#fefce8",
      title: "Explore new arrivals",
      body: "Products from top brands",
      photo: "/products/5.webp",
    },
    {
      bg: "#fef2f2",
      title: "Digital gift cards",
      body: "Give the gift of choice",
      photo: "/products/2.webp",
    },
    {
      bg: "#e8eff8",
      title: "Hurry! Hurry!",
      body: "New stock\nIn the market",
      photo: "/products/7.webp",
    },
    {
      bg: "#f0fdf4",
      title: "Explore new arrivals",
      body: "Up to\n80% off retail",
      photo: "/products/8.webp",
    },
    {
      bg: "#f0fdf4",
      title: "Explore new arrivals",
      body: "Up to\n80% off retail",
      photo: "/products/6.webp",
    },
  ]);

  return (
    <div className="w-full p-4 min-h-[300px] pt-14 md:pt-24  pb-10  md:pl-20 ">
      <div className=" flex flex-col items-end  md:flex-row md:items-center md:justify-between mb-4 md:mb-14">
        <div className="">
          <span className="text-[#111827] text-[20px]  md:text-3xl font-bold mr-2">
            {props.title1}
          </span>
          <span className="text-[#6b7280] text-[20px]  md:text-3xl font-bold">
            {props.title2}
          </span>
        </div>
        <div className="flex">
          <span ref={prevRef}>
            <BsArrowLeft
              size={48}
              onClick={() => setActiveBtn("left")}
              className={` ${
                activeBtn === "left" ? "border" : ""
              } text-[#6b7280] mt-2 md:mt-0 mr-4 md:mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
            />
          </span>
          <span ref={nextRef}>
            <BsArrowRight
              size={48}
              onClick={() => setActiveBtn("right")}
              className={` ${
                activeBtn === "right" ? "border" : ""
              } text-[#6b7280] mt-2 md:mt-0 mr-2 md:mr-8 hover:cursor-pointer hover:border p-3 rounded-full border-[#a7acb6]`}
            />
          </span>
        </div>
      </div>
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
        modules={[Autoplay, Navigation]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        // onSwiper={(swiper) => console.log(swiper)}
        className="p-5 w-full   md:pb-16 "
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide
              key={index}
              className="pt-2 md:pt-3 pb-0 md:pb-3 px-0 md:px-3"
            >
              <ProductCardMax {...product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ProductsSliderCoverMax;
