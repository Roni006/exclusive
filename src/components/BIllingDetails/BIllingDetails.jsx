import React from 'react'

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
                        <div className='w-[527px] '></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BIllingDetails