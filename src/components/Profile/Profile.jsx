
const Profile = () => {
    return (
        <>
            <section className="pt-[180px] pb-[140px] ">
                <div className="container">
                    <div className="flex justify-between gap-[205px]">
                        <div className="user flex flex-col gap-3 w-[95px]">
                            <a href="#" className="">My Account</a>
                            <a href="#" className="">My Order</a>
                            <a href="#" className="">My Wishlist</a>
                        </div>
                        <div className="py-10 px-20 shadow-md w-[870px] rounded-md">
                            <h2 className="title text-[20px] leading-7 text-[#db4444] font-medium font-poppins mb-4 w-full ">
                                Edit Your Profile
                            </h2>
                            <form >

                                <div className="flex items-center gap-[50px] mb-6">
                                    <div className="w-[330px]">
                                        <label className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer " htmlFor="name">First Name</label><br />
                                        <input className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="text" id="name" placeholder="Md" />
                                    </div>

                                    <div className="w-[330px]">
                                        <label className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer  " htmlFor="lname">Last Name</label><br />
                                        <input className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="text" id="lname" placeholder="Rimel" />
                                    </div>
                                </div>

                                <div className="flex items-center gap-[50px]">
                                    <div className="w-[330px]">
                                        <label className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer " htmlFor="email">Email </label><br />
                                        <input className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="email" id="email" placeholder="info@gmail.com" />
                                    </div>

                                    <div className="w-[330px]">
                                        <label className="text-[16px] leading-6 text-[#000000] font-poppins font-normal cursor-pointer " htmlFor="address">Address </label><br />
                                        <input className="mt-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="text" id="address" placeholder="Kingston, 5236, United State" />
                                    </div>
                                </div>

                                <div className="reset-pass mt-6">
                                    <label htmlFor="pass" className="text-[#00000] font-poppins leading-6 text[16px] font-medium ">Password Change</label><br />
                                    <input className="mt-2 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="password" placeholder="Current Password" />

                                    <input className="mt-4 mb-4 py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full  " type="password" placeholder="New Password" />

                                    <input className="py-3 px-4 bg-[#F5F5F5] outline-0 rounded-md w-full " type="password" placeholder="Confirm New Password" />
                                </div>
                                <div className="btn flex items-center gap-8 justify-end mt-6">
                                    <button className="text-[16px] leading-6 text-[#000000] font-poppins font-normal ">Cancel</button>
                                    <button className="gblbtn">Save Changes </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile