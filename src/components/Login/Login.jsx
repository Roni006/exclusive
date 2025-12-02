import loginImage from "../../assets/images/login.png"
const Login = () => {
    return (
        <>
            <section>
                <div className="container ">
                    <div className="login-details flex gap-[130px] items-center pt-[100px] pb-[220px]">
                        {/* <div className="w-[462px]"> */}
                        <div className="w-[662px]">
                            {/* <img className="w-full"  src={loginImage} alt="login image" /> */}
                            <img src={loginImage} alt="login image" />
                        </div>
                        <div className="w-[371px]">
                            <h2 className="text-[36px] leading-[30px] tracking-[4%] font-inter font-medium  text-[#000000]">Login in to Exclusive</h2>
                            <p className="leading-6 text-[16px] font-poppins text-[#000000] font-normal pt-6 pb-12">Enter Your Details Below</p>
                            <form>

                                <input className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins" type="text" placeholder="Email or Phone Number " />

                                <input className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-12 font-poppins" type="password" placeholder="Password" />
                                <div className="flex items-center justify-between">
                                    <button type="submit" className="gblbtn mt-10 cursor-pointer">Login</button>
                                    <a href="#" className="text-[#db4444] leading-6 text-[16px] font-poppins font-normal ">Forget Password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login