"use client";

import { useState, useEffect } from "react";
import { sliderImages } from "@/public/assets/assets";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FooterSlider = () => {
  const router = useRouter();
  const sliderData = [
    {
      id: 1,
      title: "Grow Your Brand with Data-Driven Digital Marketing Solutions!",
      offer: "Boost your reach with expert SEO, social media & paid ads",
      buttonText1: " Explore Now",
      imgSrc: sliderImages.amplify,
    },
    {
      id: 2,
      title: "Build Trust & Visibility with Powerful Public Relations",
      offer: "Craft compelling stories and manage your brand reputation",
      buttonText1: " Explore Now",

      imgSrc: sliderImages.marketing,
    },
    {
      id: 3,
      title: "Turn Your Brand into a Story People Remember",
      offer: "Authentic storytelling that connects and inspires",
      buttonText1: " Explore Now",

      imgSrc: sliderImages.storytelling,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#bceaff] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-orange-500 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                {index < 2 && (
                  <button
                    onClick={() => router.push("/services")}
                    className="md:px-10 px-7 md:py-2.5 py-2 bg-[#261592] rounded-full text-white font-medium"
                  >
                    {slide.buttonText1}
                  </button>
                )}
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
                width={150}
                height={150}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-red-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default FooterSlider;
