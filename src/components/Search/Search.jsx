import { TiStarFullOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";

const Search = () => {
  const [loader, setLoader] = useState(true);
  const { slug } = useParams();
  const [visible, setVisible] = useState(4);
  const [product, setProducts] = useState([]);
  const { keyword } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${keyword}`)
      .then((result) => {
        const keywordLower = keyword.toLowerCase();
        const filteredProducts = result.data.products.filter((product) =>
          product.title.toLowerCase().includes(keywordLower)||
          product.description.toLowerCase().includes(keywordLower)||
          product.barnd.toLowerCase().includes(keywordLower),
        );
        setProducts(filteredProducts);
      });
  }, [keyword]);
  setTimeout(() => {
    setLoader(false);
  }, [2000]);
  return (
    <>
      <section className="pt-[50px]">
        <div className="container border-b border-[rgba(0,0,0,0.25)]">
          <div className="title pb-8">
            <h1 className="text-[#000000] text-[36px] font-inter font-semibold leading-12 tracking-[20%]  ">
              Seach Keywords: 
              <span className="capitalize text-[#db4444]"> {keyword}</span>
            </h1>
          </div>

          {loader ? (
            <div className="grid grid-cols-4 gap-x-[30px]">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div className="flex1 space-y-6 py-1">
                    <div className="h-62 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 rounded bg-gray-200"></div>
                        <div className="col-span-2 h-2 rounded- bg-gray-200"></div>
                        <div className="col-span-2 h-2 rounded- bg-gray-200"></div>
                        <div className="h-2 rounded bg-gray-200"></div>
                        <div className="h-2 rounded bg-gray-200"></div>
                        <div className="col-span-2 h-2 rounded- bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] items-center justify-between mb-[60px]">
              {product.slice(0, visible).map((product) => (
                <div className="product-item">
                  <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                    <Link to={`/details/${product.id}`}>
                      <img className="mx-auto" src={product.images} alt="" />
                    </Link>
                  </div>
                  <div className="details pt-4">
                    <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">
                      <Link to={`/details/${product.id}`}>{product.title}</Link>
                    </h2>

                    <div className="raring flex gap-2 items-center">
                      <div className="price">
                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2">
                          <span className=" text-[#DB4444]">
                            ${product.price}
                          </span>
                        </p>
                      </div>
                      <div className="star flex gap-1 items-center">
                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                        <FaStar className="text-[rgba(115,114,112,0.50)] text-[17px] " />
                        <FaStar className="text-[rgba(115,114,112,0.50)] text-[17px] " />
                      </div>
                      <div className="num">
                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {product.length === 0 && (
                <div>
                  <h2 className="text-center text-[24px] font-semibold">
                    No products found for "{keyword}"
                  </h2>
                </div>
              )}
            </div>
          )}

          {!loader && (
            <div className="text-center pt-[60px] pb-[75px]">
              {visible < product.length && (
                <a
                  onClick={() => setVisible(visible + 4)}
                  href="#"
                  className="bg-[#DB4444] text-white font-poppins text-[18px] py-4 px-12 rounded-sm font-medium "
                >
                  View More Products
                </a>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Search;
