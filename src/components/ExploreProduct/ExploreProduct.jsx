import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { FaStar } from "react-icons/fa";
import dogFood from "../../assets/exploreproduct/dogfood.png"
import camera from "../../assets/exploreproduct/camera.png";
import laptop from "../../assets/exploreproduct/laptop.png";
import curology from "../../assets/exploreproduct/curology.png"
import car from "../../assets/exploreproduct/car.png";
import shoe from "../../assets/exploreproduct/sportsshoe.png";
import console from "../../assets/exploreproduct/console.png"
import jacket from "../../assets/exploreproduct/jacket.png"

const ExploreProduct = () => {
    return (
        <>
            <section className="pt-[150px]">
                <div className="container border-b border-[rgba(0,0,0,0.25)]">
                    <div className="title pb-8">
                        <h1 className='text-[#000000] text-[36px] font-inter font-semibold leading-12 tracking-[20%] text-center'>Explore Our Products</h1>
                    </div>

                    <div className="grid grid-cols-4 gap-x-[30px] gap-y-[60px] items-center justify-between mb-[60px]">

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={dogFood} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Breed Dry Dog Food</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$100</span>
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
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(35)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={camera} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">CANON EOS DSLR Camera</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$360</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <FaStar className="text-[rgba(115,114,112,0.50)] text-[17px] " />
                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(95)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={laptop} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">ASUS FHD Gaming Laptop</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$700</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />


                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(95)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={curology} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Curology Product Set </h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$700</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <FaStar className="text-[rgba(115,114,112,0.50)] text-[20px] " />


                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(145)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={car} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Kids Electric Car</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$960</span>
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
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(85)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={shoe} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Jr. Zoom Soccer Cleats</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$1160</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(85)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={console} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">GP11 Shooter USB Gamepad</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$660</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarHalfOutline className="text-[#FFAD33] text-[20px] " /> 
                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(55)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={jacket} alt="" />
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Quilted Satin Jacket</h2>

                                <div className="raring flex gap-2 items-center">
                                    <div className="price">
                                        <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                            <span className=" text-[#DB4444]" >$660</span>
                                        </p>
                                    </div>
                                    <div className="star flex gap-1 items-center">
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarFullOutline className="text-[#FFAD33] text-[20px] " /> 
                                        <TiStarHalfOutline className="text-[#FFAD33] text-[20px] " /> 
                                    </div>
                                    <div className="num">
                                        <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(55)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className="text-center pt-[60px] pb-[75px]">
                        <a href="#" className="gblbtn">
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExploreProduct