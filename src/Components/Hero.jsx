import React, { use, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const Hero = () => {
  const { user } = use(AuthContext);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/Banner1.png",
      title: "Find the Perfect Freelance Task—Fast & Easy!",
      desc: "Connect with clients and discover freelance jobs tailored to your skills. Whether you're a designer, developer, or writer, KajKori helps you find gigs that fit your style and schedule.",
    },
    {
      id: 2,
      image: "/Banner2.png",
      title: "One Platform, Endless Freelance Opportunities!",
      desc: "From quick gigs to long-term projects, KajKori offers a seamless way to manage your freelance work. Post tasks or pick jobs — all in one place with simple, secure transactions.",
    },
    {
      id: 3,
      image: "/Banner3.png",
      title: "Manage Your Freelance Work With Confidence",
      desc: "Track your projects, communicate with clients, and get paid securely. KajKori puts you in control of your freelance career with tools that simplify your workflow.",
    },
    {
      id: 4,
      image: "/Banner4.png",
      title: "Work Anywhere, Anytime — Freedom to Freelance",
      desc: "Log in from anywhere and find work that fits your lifestyle. KajKori empowers freelancers to work on their own terms, delivering quality gigs and building their reputation effortlessly.",
    },
  ];

  return (
    <div
      className="mb-16"
      onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
        slidesPerGroup={1}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[150px] md:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4 space-y-8 z-10">
                <h2 className="text-xl md:text-2xl lg:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-md">
                  {item.title}
                </h2>
                <p className="hidden md:block md:w-3/5 md:text-xl mt-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-sm">
                  {item.desc}
                </p>

                {user ? (
                  ""
                ) : (
                  <Link
                    to="/auth/register"
                    aria-label="Get Started"
                    className="hidden relative lg:inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-indigo-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                    <span className="relative z-10">Get Started</span>
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
