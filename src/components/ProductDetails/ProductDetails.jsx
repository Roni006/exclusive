import { useState } from "react";
import preview from "../../assets/product-details/preview.png";
import console1 from "../../assets/product-details/controler1.png";
import console3 from "../../assets/product-details/controler3.png";
import star from "../../assets/product-details/star.svg";
import { IoMdHeartEmpty } from "react-icons/io";
//! image
import gamigConsole from "../../assets/images/product/gconsole.png";
import keyboard from "../../assets/images/product/keyboard.png";
import monitor from "../../assets/images/product/monitor.png";
import cooler from "../../assets/sellingproduct/cooler.png";
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";

// import { TiStarHalfOutline, TiTabsOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
const ProductDetails = () => {
  const [qunatity, setQuantity] = useState(1);
  const sizes = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
  ];
  const colors = [
    { id: 1, bgcolor: "#A0BCE0" },
    { id: 2, bgcolor: "#E07575" },
  ];
  const gallery = [
    { thumb: preview },
    { thumb: console1 },
    { thumb: console3 },
  ];

  const reletedProdcuts = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      disPrice: 120,
      price: 160,
      image: gamigConsole,
      rating: 88,
      discount: 40,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      disPrice: 960,
      price: 1160,
      image: keyboard,
      rating: 75,
      discount: 35,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      disPrice: 370,
      price: 400,
      image: monitor,
      rating: 99,
      discount: 30,
    },
    {
      id: 4,
      name: "RGB Liquid CPU Cooler",
      disPrice: 160,
      price: 170,
      image: cooler,
      rating: 65,
    },
  ];
  const [previewImg, setPreviewImg] = useState(preview);

  const rating = 4;

  return (
    <section className="pt-[110px] pb-15">
      <div className="container">
        <div className="flex gap-[70px] ">
          <div className="w-[60%]">
            <div className="flex gap-[30px]">
              <div className="w-[30%] flex flex-col gap-4 items-center">
                {gallery.map((gallery) => (
                  <div
                    onClick={() => setPreviewImg(gallery.thumb)}
                    className="bg-[#f5f5f5] py-3 px-6 rounded-sm cursor-pointer"
                  >
                    <img src={gallery.thumb} alt="gallery thumb" />
                  </div>
                ))}
              </div>
              <div className="bg-[#f5f5f5] flex items-center py-3 px-6 rounded-sm">
                <img src={previewImg} alt="" />
              </div>
            </div>

            <div className="mt-[92px]">
              <div className="item1">
                <h2 className="text-[36px] leading-10 font-poppins font-bold text-[#111827] ">
                  Havic HV G-92 Gamepad
                </h2>
                <p className="text-[16px] leading-6 font-poppins text-[#4B5563] font-normal mt-4 w-[725px]">
                  The St. Louis Meramec Canoe Company was founded by Alfred
                  Wickett in 1922. Wickett had previously worked for the Old
                  Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                  wooden canoes in Valley Park, Missouri ceased in 1978.
                </p>
              </div>

              <div className="item1 mt-6">
                <h2 className="text-[24px] leading-8 font-poppins font-bold text-[#111827] ">
                  Havic HV G-92 Gamepad
                </h2>
                <p className="text-[16px] leading-6 font-poppins text-[#4B5563] font-normal mt-4 w-[725px]">
                  The St. Louis Meramec Canoe Company was founded by Alfred
                  Wickett in 1922. Wickett had previously worked for the Old
                  Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                  wooden canoes in Valley Park, Missouri ceased in 1978.
                </p>
              </div>

              <div className="item1 mt-6">
                <h2 className="text-[24px] leading-8 font-poppins font-bold text-[#111827] ">
                  Keywords
                </h2>
                <div className="flex items-center gap-2">
                  <div className="mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl">
                    <img src={star} alt="star" />
                    <p className="text-3 text-[#4b5563] leading-4 font-poppins font-normal">
                      men's fashion
                    </p>
                  </div>

                  <div className="mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl">
                    <img src={star} alt="star" />
                    <p className="text-3 text-[#4b5563] leading-4 font-poppins font-normal">
                      men's fashion
                    </p>
                  </div>

                  <div className="mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl">
                    <img src={star} alt="star" />
                    <p className="text-3 text-[#4b5563] leading-4 font-poppins font-normal">
                      men's fashion
                    </p>
                  </div>

                  <div className="mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl">
                    <img src={star} alt="star" />
                    <p className="text-3 text-[#4b5563] leading-4 font-poppins font-normal">
                      men's fashion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%]">
            <h2 className="text-[24px] font-inter font-semibold text-[#000000] leading-6 tracking-[3%] mb-4">
              Havic HV G-92 Gamepad
            </h2>

            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <TiStarFullOutline
                  key={i}
                  className={
                    i < rating
                      ? "text-[#FFAD33] text-[20px] "
                      : "text-gray-300 text-[20px]"
                  }
                />
              ))}
              <span className="ml-2 text-[rgba(16,3,3,0.5)] font-poppins font-normal leading-3.5 ">
                (150 Reviews)
              </span>
            </div>
            <h3 className="font-inter font-normal leading-6 text-[#000000] tracking-[%3] text-[24px] pt-4 pb-6">
              {" "}
              $192.00
            </h3>
            <p
              className="font-poppins font-normal text-[#000000] leading-[21px] text-[14px] w-[373px] border-b-2 border-[rgba(0,0,0,0.5)] pb-6
                        "
            >
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <div className="color pt-6 flex gap-6">
              <div>
                <p className=" items-center  text-[20px] leading-5 text-[#000000] tracking-[3%] font-poppins">
                  Colors:{" "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {colors.map((color) => (
                  <div>
                    <input
                      type="radio"
                      name="radio"
                      id={`color${color.id}`}
                      className="hidden color"
                    />
                    <label
                      htmlFor={`color${color.id}`}
                      className=" cursor-pointer "
                    >
                      <span
                        style={{ backgroundColor: color.bgcolor }}
                        className="w-5 h-5 inline-block rounded-full "
                      ></span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="size pt-6 flex gap-6 items-center">
              <div>
                <p className=" items-center  text-[20px] leading-5 text-[#000000] tracking-[3%] font-poppins">
                  Size:{" "}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {sizes.map((size) => (
                  <div>
                    <input
                      type="radio"
                      name="radio"
                      id={`size${size.id}`}
                      className="hidden size"
                    />
                    <label
                      htmlFor={`size${size.id}`}
                      className=" cursor-pointer "
                    >
                      <span className="font-poppins text-[14px] text-[#000] font-medium w-8 h-8 inline-block rounded-sm border-2 border-[#808080] text-center leading-[30px]">
                        {size.name}
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            {/* increment decrement functionality */}
            <div className="qunatity flex pt-6 items-center gap-4">
              <div className="w-[32%] h-11 flex items-center">
                <div
                  onClick={() =>
                    setQuantity((qunatity) => (qunatity > 1 ? qunatity - 1 : 1))
                  }
                  className="border-2 border-[rgba(0,0,0,0.5)] h-11  w-15 flex justify-center items-center rounded-[6px_0px_0px_6px] cursor-pointer"
                >
                  <FaMinus className="cursor-pointer" />
                </div>

                <div className="w-20 h-11 border-t-2 border-b-2 border-[rgba(0,0,0,0.5)] text-center">
                  <span className="text-[20px] font-poppins font-medium text-[#000000] leading-11 ">
                    {qunatity}
                  </span>
                </div>
                <div
                  onClick={() => setQuantity((qunatity) => qunatity + 1)}
                  className="bg-[#DB4444] text-white  h-11  w-15 flex justify-center items-center rounded-[0px_6px_6px_0px] cursor-pointer"
                >
                  <GoPlus className="cursor-pointer text-[22px]" />
                </div>
              </div>
              <div classname="w-[45%] ">
                <a
                  href="#"
                  className="bg-[#DB4444] text-white font-poppins text-[18px] py-3 px-12 rounded-sm font-medium "
                >
                  Add to cart
                </a>
              </div>
              <div classname="w-[10%]">
                <div className="w-10 h-10 border border-[rgba(0,0,0,0.5)] rounded-sm flex items-center justify-center">
                  <a href="#">
                    <IoMdHeartEmpty className="text-[32px] text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-[30px] items-center justify-between mt-15 ">
          {reletedProdcuts.map((related) => (
            <div className="product-item">
              <div className=" bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                <img src={related.image} alt="" />
                <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                  <span className="text-[12px] text-[#FAFAFA] ">
                    -{related.discount}%
                  </span>
                </div>
              </div>
              <div className="details pt-4">
                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                  {related.name}
                </h2>
                <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                  <span className=" text-[#DB4444]">${related.disPrice}</span>
                  <del className="text-[rgba(0,0,0,0.5)]">
                    {" "}
                    ${related.price}
                  </del>
                </p>
                <div className="raring flex gap-1">
                  <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                  <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                  <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                  <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                  <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                  <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                    ({related.rating})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
