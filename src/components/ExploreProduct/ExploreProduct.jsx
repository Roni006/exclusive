import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
// import dogFood from "../../assets/exploreproduct/dogfood.png";
// import camera from "../../assets/exploreproduct/camera.png";
// import laptop from "../../assets/exploreproduct/laptop.png";
// import curology from "../../assets/exploreproduct/curology.png";
// import car from "../../assets/exploreproduct/car.png";
// import shoe from "../../assets/exploreproduct/sportsshoe.png";
// import consoles from "../../assets/exploreproduct/console.png";
// import jacket from "../../assets/exploreproduct/jacket.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slice/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

const ExploreProduct = () => {
  const [visible, setVisible] = useState(8);
  const [product, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((result) => setProducts(result.data.products));
  }, []);

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity,
      }),
    );

    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <> 
      <ToastContainer />
      <section className="pt-[150px]">
        <div className="container border-b border-[rgba(0,0,0,0.25)]">
          <div className="title pb-8">
            <h1 className="text-[#000000] text-[36px] font-inter font-semibold leading-12 tracking-[20%] text-center">
              Explore Our Products
            </h1>
          </div>

          <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] items-center justify-between mb-[60px]">
            {product.slice(0, visible).map((product) => (
              <div className="product-item">
                <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                  <Link to={`/details/${product.id}`}>
                    <img className="mx-auto" src={product.images} alt="" />
                  </Link>
                  <div>
                    <IoCartOutline
                      onClick={() => handleAddToCart(product)}
                      className="absolute top-5 left-5 cursor-pointer text-[30px] bg-[#df4444a3] hover:bg-[#df4444] duration-300 text-white p-[5px] rounded-sm  "
                    />
                  </div>
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
          </div>

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
        </div>
      </section>
    </>
  );
};

export default ExploreProduct;
