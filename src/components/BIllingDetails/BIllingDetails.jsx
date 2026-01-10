import console from "../../assets/cart/concole.png";
import monitor from "../../assets/cart/monitor.png"
const BIllingDetails = () => {
    return (
        <>
            <section className='pt-[140px] pb-[140px] '>
                <div className="container">
                    <div className="title">
                        <h3 className='text-[36px] leading-[30px] tracking-[4%] text-[#000000] font-medium font-inter '>BIlling Details</h3>
                    </div>
                    <div className='content flex items-center gap-[170px]'>
                        <div className='w-[470px] mt-12 '>
                            <form >
                                <label>First Name</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Company Name</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Street Address</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Aoartment, floor,etc. (optional)</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Town/City</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Phone Number</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />

                                <label>Email Address</label> <span className="text-red-500">*</span><br />
                                <input className='w-full bg-[#F5F5F5] py-4 px-2 outline-0 mt-2 mb-8 rounded-md' type="text" required />
                            </form>
                        </div>
                        <div className='w-[60%]'>
                            <div className="w-[80%] flex flex-col gap-8">

                                <div className="flex justify-between">
                                    <div className="flex items-center gap-6">
                                        <img src={console} alt="" />
                                        <h2 className='text-[16px] leading-6 text-[#000000] font-poppins font-normal '>H1 Gamepad</h2>
                                    </div>
                                    <div>
                                        <h1>$650</h1>
                                    </div>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex items-center gap-6">
                                        <img src={monitor} alt="" />
                                        <h2 className='text-[16px] leading-6 text-[#000000] font-poppins font-normal '>LCD Monitor</h2>
                                    </div>
                                    <div>
                                        <h1>$1100</h1>
                                    </div>
                                </div>

                                <div className="shipping-details">
                                    <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 ">
                                        <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Subtoal:</h3>
                                        <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">$1750</span>
                                    </div>

                                    <div className="flex justify-between border-b-2 border-[rgba(0,0,0,0.5)] pb-4 pt-4">
                                        <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Shipping:</h3>
                                        <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">$1750</span>
                                    </div>

                                    <div className="flex justify-between pb-4 pt-4">
                                        <h3 className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">Total:</h3>
                                        <span className="text-[16px] leading-6 text-[#000000] font-poppins font-normal">$1750</span>
                                    </div>
                                </div>

                                <div>
                                    
                                    <div className="flex items-center gap-4 mb-4">
                                       <input type="radio" id="fs" name="value1" className="accent-black w-5 h-5"/>
                                       <label htmlFor="fs" className="cursor-pointer text-[16px] font-poppins leading-6 font-normal">Strip</label>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mb-4">
                                       <input type="radio" id="fss" name="value1" className="accent-black w-5 h-5"/>
                                       <label htmlFor="fss" className="cursor-pointer text-[16px] font-poppins leading-6 font-normal">Cash On Delivey</label>
                                    </div>
                               
                                </div> 

                            </div>
                            <div className="flex justify-between items-center mt-8">
                                <input className="w-[60%] py-4 px-6 border border-[rgba(0,0,0,0.4)] rounded-sm outline-0 text-[16px] font-poppins font-normal leading-6 " type="text" placeholder="Coupon Code" />
                                <button className="gblbdtn cursor-pointer ">Apply Coupon</button>
                            </div>
                            <div className="mt-8">
                                <button className="gblbdtn">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BIllingDetails