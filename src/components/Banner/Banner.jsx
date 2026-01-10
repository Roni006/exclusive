import iphone from "../../assets/images/iphone.png";
import apple from "../../assets/images/apple.png";
import { IoArrowForward } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const Banner = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((result) => setCategories(result.data));
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex justify-center">
            <div className="category w-[20%] flex flex-col gap-4 pt-10 border-r border-[rgba(0,0,0,0.25)]">
              {categories.slice(0, 9).map((category) => (
                <Link href="#" className="capitalize">{category}</Link>
              ))}
            </div>
            <div className="w-[80%] mt-10 ps-[45px]">
              <Slider {...settings}>
                <div className="slick-slider">
                  <div className="bg-[#000000] flex items-center">
                    <div className="w-[40%] pt-[58px] ps-16 pb-12">
                      <div className="apple flex gap-6 items-center  pb-5">
                        <img src={apple} alt="apple image" />
                        <span className="text-white text-4 font-poppins leading-6">
                          iPhone 14 Series
                        </span>
                      </div>
                      <div className="text">
                        <h2 className="text-[48px] leading-15 text-[#FAFAFA] tracking-[4%] pb-[22px]">
                          Up to 10% off Voucher
                        </h2>
                      </div>
                      <div className="icon">
                        <p className="flex items-center gap-2">
                          <a
                            href="#"
                            className="text-[#FAFAFA] leading-6 font-poppins text-[16px] border-b border-[#FAFAFA] pb-[5px]"
                          >
                            Shop Now
                          </a>
                          <IoArrowForward className="text-[#FAFAFA]" />
                        </p>
                      </div>
                    </div>
                    <div className="w-[60%] pt-4">
                      <img src={iphone} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slick-slider">
                  <div className="bg-[#000000] flex items-center">
                    <div className="w-[40%] pt-[58px] ps-16 pb-12">
                      <div className="apple flex gap-6 items-center  pb-5">
                        <img src={apple} alt="apple image" />
                        <span className="text-white text-4 font-poppins leading-6">
                          iPhone 14 Series
                        </span>
                      </div>
                      <div className="text">
                        <h2 className="text-[48px] leading-15 text-[#FAFAFA] tracking-[4%] pb-[22px]">
                          Up to 10% off Voucher
                        </h2>
                      </div>
                      <div className="icon">
                        <p className="flex items-center gap-2">
                          <a
                            href="#"
                            className="text-[#FAFAFA] leading-6 font-poppins text-[16px] border-b border-[#FAFAFA] pb-[5px]"
                          >
                            Shop Now
                          </a>
                          <IoArrowForward className="text-[#FAFAFA]" />
                        </p>
                      </div>
                    </div>
                    <div className="w-[60%] pt-4">
                      <img src={iphone} alt="" />
                    </div>
                  </div>
                </div>

                <div className="slick-slider">
                  <div className="bg-[#000000] flex items-center">
                    <div className="w-[40%] pt-[58px] ps-16 pb-12">
                      <div className="apple flex gap-6 items-center  pb-5">
                        <img src={apple} alt="apple image" />
                        <span className="text-white text-4 font-poppins leading-6">
                          iPhone 14 Series
                        </span>
                      </div>
                      <div className="text">
                        <h2 className="text-[48px] leading-15 text-[#FAFAFA] tracking-[4%] pb-[22px]">
                          Up to 10% off Voucher
                        </h2>
                      </div>
                      <div className="icon">
                        <p className="flex items-center gap-2">
                          <a
                            href="#"
                            className="text-[#FAFAFA] leading-6 font-poppins text-[16px] border-b border-[#FAFAFA] pb-[5px]"
                          >
                            Shop Now
                          </a>
                          <IoArrowForward className="text-[#FAFAFA]" />
                        </p>
                      </div>
                    </div>
                    <div className="w-[60%] pt-4">
                      <img src={iphone} alt="" />
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
