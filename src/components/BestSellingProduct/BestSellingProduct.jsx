import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import jacket from "../../assets/sellingproduct/jacket.png";
import bag from "../../assets/sellingproduct/bag.png";
import cooling from "../../assets/sellingproduct/cooler.png";
import bookself from "../../assets/sellingproduct/bookself.png";
import { useEffect, useState } from "react";
import axios from "axios";
const BestSellingProduct = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
    //   .get("https://dummyjson.com/products/category/smartphones")
      .then((result) => setProducts(result.data.products));
  }, []);
  return (
    <>
      <section className="pt-[70px]">
        <div className="container">
          <div className="title pb-[60px] flex justify-between items-center">
            <h1 className="text-[36px] leading-12 text-[#000000] font-inter tracking-[4%] font-semibold">
              Best Selling Products
            </h1>
            <a href="#" className="gblbdtn">
              View All
            </a>
          </div>

          <div className="grid grid-cols-4 gap-[30px] items-center justify-between">
            {product.slice(19,23).map((product) => (
              <div className="product-item">
                <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                  <img className="mx-auto" src={product.images} alt="" />
                </div>
                <div className="details pt-4">
                  <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                    {product.title}
                  </h2>
                  <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                    <span className=" text-[#DB4444]">${product.price}</span>
                    <del className="text-[rgba(0,0,0,0.5)]"> $160</del>
                  </p>
                  <div className="raring flex gap-1">
                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                    <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProduct;
