import { IoIosArrowDown } from "react-icons/io";
import logo from "../../assets/images/logo.png";
import { LuSearch } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { Link, useLocation } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authinfo } from "../../Redux/Slice/authSlice";
import { CiCircleRemove } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { clearCart, removeCart } from "../../Redux/Slice/cartSlice";

const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  console.log(location.pathname);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const auth = getAuth();
  const dispatch = useDispatch();
  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          authinfo({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
      }
    });
    return () => unsub();
  }, []);

  const handleRemove = (id) => {
    dispatch(removeCart(id));
    toast.success("Product removed from cart", {
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

  const handleClearCart = () => {
    dispatch(clearCart());
    if (clearCart.length > 1) {
      toast.success("Removed all items from cart", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <nav className="border-b border-[rgba(0,0,0,0.25)]">
        <div className="bg-[#000000]">
          <div className="container">
            <div className="flex items-center py-3">
              <div className=" w-[80%] text-end">
                <p className="text-[#ffffff] text-[14px] font-poppins leading-[21px] ">
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                  <a href="#" className="font-semibold leading-6 underline">
                    Shop Now
                  </a>
                </p>
              </div>
              <div className="w-[20%] text-end">
                <div className="flex justify-end gap-[9px] items-center">
                  <div class="relative w-22">
                    <select class="appearance-none w-full px-3 outline-0 font-popins text-[14px] leading-[21px] text-[#FAFAFA] font-normal cursor-pointer">
                      <option className="text-black">English</option>
                      <option className="text-black">Bangla</option>
                    </select>
                    <span class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                      <IoIosArrowDown className="text-[18px] text-[#FAFAFA] mt-1" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="pt-10 pb-4 flex items-center">
            <div className="w-[10%]">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="w-[60%]">
              <ul className="menus flex justify-center gap-10">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="signup">Sign Up</Link>
                </li>
              </ul>
            </div>
            <div className="w-[30%] flex items-center justify-end gap-6">
              <div className="W-[243px] relative">
                <input
                  className="outline-0 bg-[#F5F5F5] py-2.5 ps-4 pe-10 w-full text-[12px] leading-[18px rounded-sm font-poppins"
                  type="text"
                  placeholder="What are you looking for ?"
                />
                <LuSearch
                  for="search"
                  className="absolute top-[50%] translate-y-[-50%] right-4 cursor-pointer"
                />
              </div>

              {currentLocation != "/signup" && currentLocation != "/login" && (
                <div className="flex justify-center items-center gap-4">
                  <div className="w-8 h-8 hover:hover:bg-[#DB4444] duration-200 flex justify-center items-center rounded-full  group">
                    <Link to="wishlist">
                      <IoMdHeartEmpty className="text-[18px] text-[#000000] group-hover:text-white duration-200 cursor-pointer " />
                    </Link>
                  </div>

                  <div className="w-8 h-8 hover:hover:bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer group">
                    <IoCartOutline
                      onClick={() => setOpenCart(true)}
                      className="text-[18px] text-[#000000] group-hover:text-white duration-200 "
                    />
                  </div>

                  <div className="w-8 h-8 hover:hover:bg-[#DB4444] flex justify-center items-center rounded-full cursor-pointer group">
                    <Link to="user">
                      <LuUser className="text-[18px] text-[#000000] group-hover:text-white duration-200 " />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* cart/side bar */}
      {openCart && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpenCart(false)}
            className="fixed inset-0 bg-black/60 z-40"
          />

          {/* Cart */}
          <div
            className="max-w-[500px] bg-[#b8a8a888] h-full rounded-sm pb-5 shadow-md border border-[#df4444] fixed z-50 top-12 right-0 duration-300 transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-between py-4 px-2 ">
              <a
                onClick={handleClearCart}
                className="absolute left-5 top-5 bg-[#df4444] text-white px-2 rounded-md cursor-pointer"
              >
                clearCart
              </a>
              <h2 className="text-[30px] font-semibold mt-10 text-center mx-auto px-10">
                Shopping Cart
              </h2>

              <CiCircleRemove
                onClick={() => setOpenCart(false)}
                className="absolute top-2 right-3 text-[40px] text-white cursor-pointer hover:text-[#df4444] duration-300 "
              />
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex bg-[#afabab] mb-3 items-center justify-between px-2 py-2 mx-2 rounded-md gap-20"
              >
                {cartItems.length !== 0 ? (
                  <div className="flex items-center gap-2">
                    <img className="w-[50px]" src={item.image} alt="" />
                    <h3 className="text-[16px] font-medium w-[150px] ">
                      {item.title} x {item.quantity}
                    </h3>
                    <div>
                      <RiDeleteBin6Line
                        onClick={() => handleRemove(item.id)}
                        className="text-[25px] text-white cursor-pointer hover:text-[#df4444] duration-300"
                      />
                    </div>
                  </div>
                ) : (
                  "none"
                )}
              </div>
            ))}

            <div className="text-center mt-8 mb-5">
              <Link
                to="/cart"
                className="text-white bg-[#df4444] py-3 px-6 rounded-sm font-medium hover:bg-transparent hover:border border-[#df4444] hover:text-[#df4444] duration-300"
              >
                View Cart Page
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
