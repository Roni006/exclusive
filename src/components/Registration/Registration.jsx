import loginImage from "../../assets/images/login.png"
import google from "../../assets/images/goggle.png"
import { Link } from "react-router"
const Registration = () => {
    return (
        <>
            <section>
                <div className="container">
                    <section>
                        <div className="container ">
                            <div className="login-details flex gap-[130px] items-center pt-[100px] pb-[220px]"> 
                                <div className="w-[662px]"> 
                                    <img src={loginImage} alt="login image" />
                                </div>
                                <div className="w-[371px]">
                                    <h2 className="text-[36px] leading-[30px] tracking-[4%] font-inter font-medium  text-[#000000]">Create an account</h2>
                                    <p className="leading-6 text-[16px] font-poppins text-[#000000] font-normal pt-6 pb-12">Enter Your Details Below</p>
                                    <form>

                                        <input className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins" type="text" placeholder="Name" />

                                        <input className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 font-poppins pt-12" type="email" placeholder="Email or Phone Number " />

                                        <input className="w-full border-b-2 border-[rgba(0,0,0,0.46)] pb-2 outline-0 pe-2 pt-12 font-poppins" type="password" placeholder="Password" />
                                        <div className="flex items-center justify-between">
                                            <button type="submit" className="gblbtn mt-10 cursor-pointer w-full">Login</button>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 py-4 px-[86px] border-2 border-[rgba(0,0,0,0.4)] rounded-md mt-4 ">
                                            <img src={google} alt="goggle image" />
                                            <a href="#" className="text-[16px] text-[#000000] leading-6 font-poppins font-normal ">Sign Up With Goggle</a>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 mt-8 ">
                                            <span className="text-[16px] text-[#000000] leading-6 font-poppins font-normal ">Already have account?</span>
                                            <Link to='/login' className="text-[16px] text-[#000000] leading-6 font-poppins font-bold ">Login</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}

export default Registration