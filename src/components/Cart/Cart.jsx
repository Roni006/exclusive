import monitor from "../../assets/cart/monitor.png";
import consoles from "../../assets/cart/concole.png";
import arrowUp from "../../assets/cart/arrowUp.svg";
import arrowDown from "../../assets/cart/arrpwDown.svg";
import { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateQuantity } from "../../Redux/Slice/cartSlice";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { Bounce, toast } from "react-toastify";

const Cart = () => {
  const [counts, setCounts] = useState({
    button1: 1,
    button2: 1,
  });
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const incrementQuantity = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      }),
    );
  };
  const deccrementQuantity = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        }),
      );
    }
  };

  let subtotal = 0;
  cartItems.map((sub) => {
    subtotal += sub.price * sub.quantity;
  });

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
  return (
    <section className="pt-40 pb-28 ">
      <div className="container">
        <div className="ctitle pb-[50px]">
          <h1 className="text-[20px] font-poppins leading-6 text-[#000000]">
            Cart
          </h1>
        </div>
        <div className="titles grid grid-cols-4 py-6 px-10 shadow-md rounded-4 mb-10 ">
          <h2 className="text-[16px] text-[#000000] leading-6 font-poppins ">
            Product
          </h2>
          <h2 className="text-[16px] text-[#000000] leading-6 font-poppins text-center">
            Price
          </h2>
          <h2 className="text-[16px] text-[#000000] leading-6 font-poppins text-center">
            Quantity
          </h2>
          <h2 className="text-[16px] text-[#000000] leading-6 font-poppins text-end">
            Subtotal
          </h2>
        </div>

        {/* Product 1 */}
        {cartItems.length != 0 ? (
          cartItems.map((cart) => (
            <div className="titles grid grid-cols-4  justify-between py-6 px-10 shadow-md rounded-4 mb-10 ">
              <div className="flex items-center gap-5">
                <CiCircleRemove
                  onClick={() => handleRemove(cart.id)}
                  className="text-[40px] cursor-pointer hover:text-[#DB4444] duration-300 "
                />
                <img className="w-15" src={cart.image} alt="" />
                <h2 className="text-[16px] text-[#000000] leading-6 font-poppins ">
                  {cart.title}
                </h2>
              </div>

              <div className="flex  items-center gap-5 justify-center">
                <h2 className="text-[16px] text-[#000000] leading-6 font-poppins  ">
                  $ <span>{cart.price}</span>{" "}
                </h2>
              </div>

              <div className="flex items-center gap-5 justify-center">
                <div className="grid grid-cols-2 items-center gap-4 w-[72px] border border-[rgba(0,0,0,0.4)] rounded-sm py-1.5 px-3">
                  <div>
                    <span className="text-[16px] text-[#000000] leading-6 font-poppins">
                      {cart.quantity}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 cursor-pointer">
                    <MdKeyboardArrowUp
                      onClick={() => incrementQuantity(cart)}
                    />
                    <MdKeyboardArrowDown
                      onClick={() => deccrementQuantity(cart)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex  items-center gap-5 justify-end">
                <h2 className="text-[16px] text-[#000000] leading-6 font-poppins ">
                  $
                  <span>
                    {cart.quantity == 1
                      ? cart.price * cart.quantity
                      : cart.price * cart.quantity.toFixed(2)}
                  </span>
                </h2>
              </div>
            </div>
          ))
        ) : (
          <div className="my-[50px] ">
            <h2 className="mx-auto w-[350px] bg-[#DB4444] text-white text-[30px] font-poppins font-semibold text-center rounded-[5px_50px_5px_50px] py-2 px-1 ">
              Cart is empty
            </h2>
          </div>
        )}

        <div className="flex justify-between">
          <a
            href="#"
            className="text-[16px] leading-6 text-[#000000] font-poppins py-4 px-12 font-medium border rounded-sm hover:bg-[#DB4444] duration-300 hover:text-white hover:border-[#DB4444] "
          >
            Return To Shop
          </a>
          <a
            href="#"
            className="text-[16px] leading-6 text-[#000000] font-poppins py-4 px-12 font-medium border rounded-sm hover:bg-[#DB4444] duration-300 hover:text-white hover:border-[#DB4444] "
          >
            Update Cart
          </a>
        </div>

        <div className="flex justify-end pt-28">
          <div className="w-[470px] border-2 py-8 px-6 rounded-md ">
            <h2
              className="text-[20px] leadgin6
                     text-[rgba(0,0,0)] font-medium pb-6"
            >
              Cart Total
            </h2>

            <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 ">
              <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                Subtotal:
              </h3>
              <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 pt-4">
              <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                Shipping:
              </h3>
              <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                Free
              </span>
            </div>

            <div className="flex justify-between pb-4 pt-4">
              <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                Total:
              </h3>
              <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="text-center pt-4">
              <Link to="/checkout" className="gblbdtn">
                Procees to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
