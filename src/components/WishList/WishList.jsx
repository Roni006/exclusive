// ! images
import bag from "../../assets/sellingproduct/bag.png";
import cooling from "../../assets/sellingproduct/cooler.png";
import console from "../../assets/exploreproduct/console.png"
import jacket from "../../assets/exploreproduct/jacket.png"
// ! react icon
import { IoTrashOutline } from "react-icons/io5";

const WishList = () => {
    return (
        <section className='pt-20 pb-[60px]'>
            <div className="container">
                <div>
                    <p className='text-[20px] text-[#000000] leading-6 font-poppins pb-[60px] '>Wishlist (4)</p>
                </div>
                <div className='grid grid-cols-4 gap-[30px] '>
                    <div className="product-item">
                        <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                            <img className="mx-auto" src={bag} alt="" />
                            <div className="discount bg-[#DB4444] w-[55px] h-[26px] text-center rounded-sm absolute top-3 left-3">
                                <span className="text-[12px] text-[#FAFAFA] ">-35%</span>
                            </div>
                            <div className="trash bg-white w-[34px] h-[34px] flex justify-center items-center p-2 rounded-full absolute top-3 right-3">
                                <IoTrashOutline className="icon text-2xl cursor-pointer" /> 
                            </div>
                        </div>
                        <div className="details pt-4">
                            <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Gucci duffle bag</h2>
                            <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                <span className=" text-[#DB4444]" >$960</span>
                                <del className="text-[rgba(0,0,0,0.5)]"> $1160</del>
                            </p>
                        </div>

                    </div>

                    <div className="product-item">
                        <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                            <img className="mx-auto" src={cooling} alt="" />
                            <div className="trash bg-white w-[34px] h-[34px] flex justify-center items-center p-2 rounded-full absolute top-3 right-3">
                                <IoTrashOutline className="icon text-2xl cursor-pointer" /> 
                            </div>
                        </div>
                        <div className="details pt-4">
                            <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">RGB liquid CPU Cooler</h2>
                            <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                <span className=" text-[#DB4444]" >$160</span>
                                <del className="text-[rgba(0,0,0,0.5)]"> $170</del>
                            </p>

                        </div>

                    </div>


                    <div className="product-item">
                        <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                            <img className="mx-auto" src={console} alt="" />
                            <div className="trash bg-white w-[34px] h-[34px] flex justify-center items-center p-2 rounded-full absolute top-3 right-3">
                                <IoTrashOutline className="icon text-2xl cursor-pointer" /> 
                            </div>
                        </div>
                        <div className="details pt-4">
                            <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">GP11 Shooter USB Gamepad</h2>

                            <div className="raring flex gap-2 items-center">
                                <div className="price">
                                    <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                        <span className=" text-[#DB4444]" >$660</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-item">
                        <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                            <img className="mx-auto" src={jacket} alt="" />
                            <div className="trash bg-white w-[34px] h-[34px] flex justify-center items-center p-2 rounded-full absolute top-3 right-3">
                                <IoTrashOutline className="icon text-2xl cursor-pointer" /> 
                            </div>
                        </div>
                        <div className="details pt-4">
                            <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Quilted Satin Jacket</h2>

                            <div className="raring flex gap-2 items-center">
                                <div className="price">
                                    <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                        <span className=" text-[#DB4444]" >$660</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WishList