import console1 from '../../assets/product-details/console1.png';
import consoleBig from '../../assets/product-details/console-big.png';
import star from '../../assets/product-details/star.svg';
const ProductDetails = () => {
    return (
        <section className='pt-[110px] pb-15'>
            <div className="container">
                <div className="main-content">
                    <div className="content1 flex items-center gap-[30px] ">
                        <div className='w-[170px]'>
                            <div className='bg-[#F5F5F5] py-3 px-6 rounded-sm'>
                                <img className='cursor-pointer' src={console1} alt="" />
                            </div>
                            <div className='bg-[#F5F5F5] py-3 px-6 rounded-sm mt-4 mb-4'>
                                <img className='cursor-pointer' src={console1} alt="" />
                            </div>
                            <div className='bg-[#F5F5F5] py-3 px-6 rounded-sm'>
                                <img className='cursor-pointer' src={console1} alt="" />
                            </div>
                        </div>
                        <div className='w-[500px] bg-[#F5F5F5] py-[65px] px-[25px]'>
                            <img src={consoleBig} alt="" />
                        </div>
                        <div></div>
                    </div>

                    <div className="details mt-[92px] w-[804px]">
                        <div className="item1">
                            <h2 className='text-[36px] leading-10 font-poppins font-bold text-[#111827] '>Havic HV G-92 Gamepad</h2>
                            <p className='text-[16px] leading-6 font-poppins text-[#4B5563] font-normal mt-4 w-[725px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                                previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                                wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                        </div>

                        <div className="item1 mt-6">
                            <h2 className='text-[24px] leading-8 font-poppins font-bold text-[#111827] '>Havic HV G-92 Gamepad</h2>
                            <p className='text-[16px] leading-6 font-poppins text-[#4B5563] font-normal mt-4 w-[725px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                                previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                                wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                        </div>


                    </div>
                    <div className="item1 mt-6 W-[804px]">
                        <h2 className='text-[24px] leading-8 font-poppins font-bold text-[#111827] '>Keywords</h2> 
                        <div className='flex items-center gap-2'> 
                            <div className='mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl'>
                                <img src={star} alt="star" />
                                <p className='text-3 text-[#4b5563] leading-4 font-poppins font-normal'>men's fashion</p>
                            </div>

                            <div className='mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl'>
                                <img src={star} alt="star" />
                                <p className='text-3 text-[#4b5563] leading-4 font-poppins font-normal'>men's fashion</p>
                            </div>

                            <div className='mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl'>
                                <img src={star} alt="star" />
                                <p className='text-3 text-[#4b5563] leading-4 font-poppins font-normal'>men's fashion</p>
                            </div>

                            <div className='mt-2 cursor-pointer border-2 border-[#E5E7EB]  py-2 px-3.5 flex gap-2 rounded-3xl'>
                                <img src={star} alt="star" />
                                <p className='text-3 text-[#4b5563] leading-4 font-poppins font-normal'>men's fashion</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails