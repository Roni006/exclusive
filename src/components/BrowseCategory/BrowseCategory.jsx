import phone from "../../assets/cate-icon/phone.svg"
import computer from "../../assets/cate-icon/computer.svg"
import watch from "../../assets/cate-icon/watch.svg"
import camera from "../../assets/cate-icon/camera.svg"
import headphone from "../../assets/cate-icon/headphone.svg"
import gaming from "../../assets/cate-icon/gaming.svg"
const BrowseCategory = () => {
    return (
        <>
            <section className='pt-20 pb-10'>
                <div className="container border-b border-[rgba(0,0,0,0.5)]">
                    <div className="title pb-[60px]">
                        <h1 className='text-[36px] leading-12 text-[#000000] font-inter tracking-[4%] font-semibold'>Browse By Category</h1>
                    </div>
                    <div className="catagory grid grid-cols-6 items-center justify-between gap-[30px] pb-[130px]">

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={phone} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Phones</p>
                            </div>
                        </div> 

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={computer} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Computers</p>
                            </div>
                        </div> 

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px[35px] text-center cursor-pointer mx-auto">
                                <img className="mx-auto" src={watch} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4 ">SmartWatch</p>
                            </div>
                        </div> 

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[55px] text-center cursor-pointer">
                                <img className="mx-auto" src={camera} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Camera</p>
                            </div>
                        </div> 

                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[35px] text-center cursor-pointer">
                                <img className="mx-auto" src={headphone} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">HeadPhones</p>
                            </div>
                        </div> 
                        
                        <div className="item">
                            <div className="border-2 border-[rgba(0,0,0,0.3)] rounded-sm py-[25px] px-[55px] text-center cursor-pointer">
                                <img className="mx-auto" src={gaming} alt="" />
                                <p className="text-[16px] leading-6 text-[#000000] font-poppins font-normal pt-4">Gaming</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}

export default BrowseCategory