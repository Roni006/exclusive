import gamigConsole from "../../assets/images/product/gconsole.png";
import keyboard from "../../assets/images/product/keyboard.png";
import chair from "../../assets/images/product/chair.png";
import monitor from "../../assets/images/product/monitor.png";
import { FaStar } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";

const NewArrival = () => {
  return (
    <section className="pt-[120px]">
      <div className="container border-b border-[rgba(0,0,0,0.25)]">
        <div className="title pb-8">
          <h1 className="text-[#000000] text-[36px] font-inter font-semibold leading-12 tracking-[20%]">
            New Arrivals
          </h1>
        </div>
        <div
          className="grid grid-cols-4 gap-[30px] items-center justify-between"
        >
          <div className="product-item">
            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
              <img src={gamigConsole} alt="" />
              <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                <span className="text-[12px] text-[#FAFAFA] ">-40%</span>
              </div>
            </div>
            <div className="details pt-4">
              <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                HAVIT HV-G92 Gamepad
              </h2>
              <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                <span className=" text-[#DB4444]">$120</span>
                <del className="text-[rgba(0,0,0,0.5)]"> $160</del>
              </p>
              <div className="raring flex gap-1">
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                  (88)
                </span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
              <img src={keyboard} alt="" />
              <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                <span className="text-[12px] text-[#FAFAFA] ">-40%</span>
              </div>
            </div>
            <div className="details pt-4">
              <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                AK-900 Wired Keyboard
              </h2>
              <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                <span className=" text-[#DB4444]">$960</span>
                <del className="text-[rgba(0,0,0,0.5)]"> $1160</del>
              </p>
              <div className="raring flex gap-1 items-center">
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <FaStar className="text-[rgba(115,114,112,0.50)] text-[16px] " />
                <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                  (75)
                </span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
              <img src={monitor} alt="" />
              <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                <span className="text-[12px] text-[#FAFAFA] ">-40%</span>
              </div>
            </div>
            <div className="details pt-4">
              <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                IPS LCD Gaming Monitor
              </h2>
              <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                <span className=" text-[#DB4444]">$370</span>
                <del className="text-[rgba(0,0,0,0.5)]"> $400</del>
              </p>
              <div className="raring flex gap-1">
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                  (99)
                </span>
              </div>
            </div>
          </div>

          <div className="product-item">
            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
              <img src={chair} alt="" />
              <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                <span className="text-[12px] text-[#FAFAFA] ">-40%</span>
              </div>
            </div>
            <div className="details pt-4">
              <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                S-Series Comfort Chair{" "}
              </h2>
              <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                <span className=" text-[#DB4444]">$375</span>
                <del className="text-[rgba(0,0,0,0.5)]"> $400</del>
              </p>
              <div className="raring flex gap-1">
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                <TiStarHalfOutline className="text-[#FFAD33] text-[20px] " />
                <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                  (99)
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center py-[102px]">
          <a href="#" className="gblbdtn">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
