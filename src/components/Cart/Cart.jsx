import monitor from "../../assets/cart/monitor.png";
import console from "../../assets/cart/concole.png"
import arrowUp from "../../assets/cart/arrowUp.svg";
import arrowDown from "../../assets/cart/arrpwDown.svg"
import { useState } from "react";
import { Link } from "react-router";
const Cart = () => {
    const [price, setPrice] = useState({
        price1: 650,
        price2: 550
    })
    const [counts, setCounts] = useState({
        button1: 1,
        button2: 1,
    })
    const handleIncrement = (button) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [button]: prevCounts[button] + 1
        }))
    }
    const handleDecrement = (button) => {
        if (counts.button1 > 1 || counts.button2 > 1) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [button]: prevCounts[button] - 1
            }))
        }
    }

    const totalAmoutn = (price.price1*counts.button1) + (price.price2*counts.button2)

    return (
        <section className='pt-40 pb-28 '>
            <div className="container">
                <div className='ctitle pb-[50px]'>
                    <h1 className='text-[20px] font-poppins leading-6 text-[#000000]'>Cart</h1>
                </div>
                {/*todo:  not working => `shadow-(--shadow-cart)` */}
                <div className="titles grid grid-cols-4 py-6 px-10 shadow-md rounded-4 mb-10 ">
                    <h2 className='text-[16px] text-[#000000] leading-6 font-poppins '>Product</h2>
                    <h2 className='text-[16px] text-[#000000] leading-6 font-poppins text-center'>Price</h2>
                    <h2 className='text-[16px] text-[#000000] leading-6 font-poppins text-center'>Quantity</h2>
                    <h2 className='text-[16px] text-[#000000] leading-6 font-poppins text-end'>Subtotla</h2>
                </div>

                <div className="titles grid grid-cols-4  justify-between py-6 px-10 shadow-md rounded-4 mb-10 ">

                    <div className="flex items-center gap-5">
                        <img src={monitor} alt="" />
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins '>LCD Monitor</h2>
                    </div>

                    <div className="flex  items-center gap-5 justify-center">
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins  '>$ <span>{price.price1}</span> </h2>
                    </div>

                    <div className="flex items-center gap-5 justify-center">
                        <div className="grid grid-cols-2 items-center gap-4 w-[72px] border border-[rgba(0,0,0,0.4)] rounded-sm py-1.5 px-3">
                            <div>
                                <span className="text-[16px] text-[#000000] leading-6 font-poppins">{counts.button1}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 cursor-pointer">
                                <img onClick={() => handleIncrement('button1')} src={arrowUp} alt="Up arrow " />
                                <img onClick={() => handleDecrement('button1')} src={arrowDown} alt="Down arrow " />
                            </div>
                        </div>
                    </div>

                    <div className="flex  items-center gap-5 justify-end">
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins '>$<span>{price.price1 * counts.button1}</span> </h2>
                    </div>
                </div>

                <div className="titles grid grid-cols-4  justify-between py-6 px-10 shadow-md rounded-4 mb-10 ">

                    <div className="flex items-center gap-5">
                        <img src={console} alt="" />
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins '>LCD Monitor</h2>
                    </div>

                    <div className="flex  items-center gap-5 justify-center">
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins  '>$ <span>{price.price2}</span> </h2>
                    </div>

                    <div className="flex items-center gap-5 justify-center">
                        <div className="grid grid-cols-2 items-center gap-4 w-[72px] border border-[rgba(0,0,0,0.4)] rounded-sm py-1.5 px-3">
                            <div>
                                <span className="text-[16px] text-[#000000] leading-6 font-poppins">{counts.button2}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 cursor-pointer">
                                <img onClick={() => handleIncrement('button2')} src={arrowUp} alt="Up arrow " />
                                <img onClick={() => handleDecrement('button2')} src={arrowDown} alt="Down arrow " />
                            </div>
                        </div>
                    </div>

                    <div className="flex  items-center gap-5 justify-end">
                        <h2 className='text-[16px] text-[#000000] leading-6 font-poppins '>$<span>{price.price2 * counts.button2}</span> </h2>
                    </div>
                </div>
                <div className="flex justify-between">
                    <a href="#" className="text-[16px] leading-6 text-[#000000] font-poppins py-4 px-12 font-medium border rounded-sm hover:bg-[#DB4444] duration-300 hover:text-white hover:border-[#DB4444] ">Return To Shop</a>
                    <a href="#" className="text-[16px] leading-6 text-[#000000] font-poppins py-4 px-12 font-medium border rounded-sm hover:bg-[#DB4444] duration-300 hover:text-white hover:border-[#DB4444] ">Update Cart</a>
                </div>

                <div className="flex justify-end pt-28">
                    <div className="w-[470px] border-2 py-8 px-6 rounded-md ">
                        <h2 className="text-[20px] leadgin6
                     text-[rgba(0,0,0)] font-medium pb-6">Cart Total</h2>

                        <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 ">
                            <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Subtoal:</h3>
                            <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">${totalAmoutn}</span>
                        </div>

                        <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 pt-4">
                            <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Shipping:</h3>
                            <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Free</span>
                        </div>

                        <div className="flex justify-between pb-4 pt-4">
                            <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Total:</h3>
                            <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">${totalAmoutn}</span>
                        </div>
                        
                        <div className="text-center pt-4">
                            <Link to='/checkout' className="gblbtn">Procees to checkout</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Cart