import { useEffect, useState } from "react";
import preview from "../../assets/product-details/preview.png";
import star from "../../assets/product-details/star.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { TiStarFullOutline } from "react-icons/ti";
import { Link, useParams } from "react-router";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slice/cartSlice";
import { Bounce, toast, ToastContainer } from "react-toastify";

// demo related products images
import gamigConsole from "../../assets/images/product/gconsole.png";
import keyboard from "../../assets/images/product/keyboard.png";
import monitor from "../../assets/images/product/monitor.png";
import cooler from "../../assets/sellingproduct/cooler.png";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [previewImg, setPreviewImg] = useState(preview);
  const [proDetails, setProdetails] = useState({});
  const [tags, setTags] = useState([]);
  const [gallery, setGallery] = useState([]);

  const rating = 4;

  const colors = [
    { id: 1, bgcolor: "#A0BCE0" },
    { id: 2, bgcolor: "#E07575" },
  ];

  const sizes = [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
    { id: 5, name: "XL" },
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

  // fetch product
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((res) => {
      setProdetails(res.data);
      setTags(res.data.tags || []);
      setGallery(res.data.images || []);
      setPreviewImg(res.data.thumbnail);
    });
  }, [id]);

  // add to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: proDetails.id,
        title: proDetails.title,
        price: proDetails.price,
        image: proDetails.thumbnail,
        quantity,
      })
    );

    toast.success("Product added to cart", {
      position: "top-right",
      autoClose: 3000,
      theme: "colored",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer />

      <section className="pt-[110px] pb-15">
        <div className="container">

          <div className="flex gap-[70px]">

            {/* LEFT */}
            <div className="w-[60%]">
              <div className="flex gap-[30px]">

                {/* thumbnails */}
                <div className="w-[30%] flex flex-col gap-4">
                  {gallery.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setPreviewImg(img)}
                      className={`bg-[#f5f5f5] py-3 px-6 rounded-sm cursor-pointer
                        ${previewImg === img ? "ring-2 ring-[#DB4444]" : ""}`}
                    >
                      <img src={img} alt="thumb" />
                    </div>
                  ))}
                </div>

                {/* main image */}
                <div className="bg-[#f5f5f5] w-[70%] flex items-center py-3 px-6 rounded-sm">
                  <img className="w-full" src={previewImg} alt="preview" />
                </div>

              </div>

              {/* description */}
              <div className="mt-[92px]">
                <h2 className="text-[36px] font-bold">{proDetails.title}</h2>
                <p className="mt-4 text-gray-600">
                  {proDetails.description}
                </p>

                <h3 className="mt-6 text-xl font-bold">Keywords</h3>
                <div className="flex gap-2 mt-2">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 px-3 py-1 rounded-full flex gap-1 items-center"
                    >
                      <img src={star} alt="" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-[40%]">
              <h2 className="text-2xl font-semibold">{proDetails.title}</h2>

              <div className="flex items-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <TiStarFullOutline
                    key={i}
                    className={
                      i < rating ? "text-[#FFAD33]" : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-gray-500">(150 Reviews)</span>
              </div>

              <h3 className="text-2xl mt-4">$ {proDetails.price}</h3>

              {/* quantity */}
              <div className="flex items-center gap-4 mt-6">
                <div className="flex">
                  <div
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="border px-4 py-2 cursor-pointer"
                  >
                    <FaMinus />
                  </div>
                  <div className="border-t border-b px-6 py-2">
                    {quantity}
                  </div>
                  <div
                    onClick={() => setQuantity(q => q + 1)}
                    className="bg-[#DB4444] text-white px-4 py-2 cursor-pointer"
                  >
                    <GoPlus />
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="bg-[#DB4444] text-white px-8 py-3 rounded-sm"
                >
                  Add to Cart
                </button>

                <div className="border p-2">
                  <IoMdHeartEmpty size={26} />
                </div>
              </div>
            </div>
          </div>

          {/* RELATED */}
          <div className="grid grid-cols-4 gap-8 mt-20">
            {reletedProdcuts.map((item) => (
              <div key={item.id}>
                <img src={item.image} alt="" />
                <h3 className="mt-2">{item.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProductDetails;
