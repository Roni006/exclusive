import phone from "../../assets/cate-icon/phone.svg";
import computer from "../../assets/cate-icon/computer.svg";
import watch from "../../assets/cate-icon/watch.svg";
import camera from "../../assets/cate-icon/camera.svg";
import headphone from "../../assets/cate-icon/headphone.svg";
import gaming from "../../assets/cate-icon/gaming.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
const BrowseCategory = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((result) => setCategories(result.data));
  }, []);

  //    const logos = [
  //     {
  //       logo: phone,
  //     },
  //     {
  //       logo: computer,
  //     },
  //     {
  //       logo: watch,
  //     },
  //     {
  //       logo: camera,
  //     },
  //     {
  //       logo: headphone,
  //     },
  //     {
  //       logo: gaming,
  //     },
  //   ];
  return (
    <>
      <section className="pt-20 pb-10">
        <div className="container border-b border-[rgba(0,0,0,0.5)]">
          <div className="title pb-[60px]">
            <h1 className="text-[36px] leading-12 text-[#000000] font-inter tracking-[4%] font-semibold">
              Browse By Category
            </h1>
          </div>
          <div className="catagory grid grid-cols-6 items-center justify-between gap-[30px] pb-[130px]">
            {categories.slice(0, 6).map((category) => (
              <Link to={`/category/product/${category.slug}`}>
                <div className="item">
                  <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-2 text-center cursor-pointer">
                    <img className="mx-auto" src={phone} alt="" />
                    <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">
                      {category.name}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {/* {logos.map((logo) => (
              <img className="mx-auto" src={logo.logo} alt="" />
            ))} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseCategory;
