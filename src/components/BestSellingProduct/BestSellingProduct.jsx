import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import jacket from "../../assets/sellingproduct/jacket.png"
import bag from "../../assets/sellingproduct/bag.png";
import cooling from "../../assets/sellingproduct/cooler.png";
import bookself from "../../assets/sellingproduct/bookself.png"
const BestSellingProduct = () => {
    return (
        <>
            <section className='pt-[70px]'>
                <div className="container">
                    <div className="title pb-[60px] flex justify-between items-center">
                        <h1 className='text-[36px] leading-12 text-[#000000] font-inter tracking-[4%] font-semibold'>Best Selling Products</h1>
                        <a href="#" className='gblbtn'>View All</a>
                    </div>

                    <div className="grid grid-cols-4 gap-[30px] items-center justify-between"> 
                       
                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={jacket}  alt="" /> 
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">HAVIT HV-G92 Gamepad</h2>
                                <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                    <span className=" text-[#DB4444]" >$120</span>
                                    <del className="text-[rgba(0,0,0,0.5)]"> $160</del>
                                </p>
                                <div className="raring flex gap-1">
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(65)</span>
                                </div>
                            </div>

                        </div>
                       
                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={bag} alt="" /> 
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Gucci duffle bag</h2>
                                <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                    <span className=" text-[#DB4444]" >$960</span>
                                    <del className="text-[rgba(0,0,0,0.5)]"> $1160</del>
                                </p>
                                <div className="raring flex gap-1">
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarHalfOutline  className="text-[#FFAD33] text-[20px] " />
                                    <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(65)</span>
                                </div>
                            </div>

                        </div>
                       
                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={cooling}  alt="" /> 
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">RGB liquid CPU Cooler</h2>
                                <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                    <span className=" text-[#DB4444]" >$160</span>
                                    <del className="text-[rgba(0,0,0,0.5)]"> $170</del>
                                </p>
                                <div className="raring flex gap-1">
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarHalfOutline className="text-[#FFAD33] text-[20px] " />
                                    <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(65)</span>
                                </div>
                            </div>

                        </div>
                       
                        <div className="product-item">
                            <div className="bg-[#F5F5F5] py-[35px] px-10 rounded-sm relative">
                                <img className="mx-auto" src={bookself}  alt="" /> 
                            </div>
                            <div className="details pt-4">
                                <h2 className="text-[18px] leading-6 font-poppins text-[#000000] font-medium">Small BookSelf</h2>
                                <p className="text-[16px] leading-6 font-poppins font-semibold flex gap-3 py-2" >
                                    <span className=" text-[#DB4444]" >$360</span> 
                                </p>
                                <div className="raring flex gap-1">
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <TiStarFullOutline className="text-[#FFAD33] text-[20px] " />
                                    <span className="text-[14px] leading-[21px] font-poppins font-semibold text-[rgba(0,0,0,0.5)] ">(65)</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSellingProduct