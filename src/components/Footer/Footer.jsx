// !images
import footerlogo from "../../assets/images/footerlogo.png"
import qrcode from "../../assets/footerimg/Qrcode 1.png";
import apple from "../../assets/footerimg/apple.png";
import android from "../../assets/footerimg/android.png";

// ! icons 
import facebook from "../../assets/footer-icons/facebook.svg";
import twitter from "../../assets/footer-icons/twitter.svg";
import instagram from "../../assets/footer-icons/instagram.svg";
import linkedin from "../../assets/footer-icons/linkedin.svg"
const Footer = () => {
    return (
        <footer className='bg-black'>
            <div className="container">
                <div className='flex gap-[87px] justify-between  pt-20 pb-[100px]'>

                    <div className='w-[25%]'>
                        <a href="#">
                            <img src={footerlogo} alt="footer logo" />
                        </a>
                        <h2 className="text-[20px] font-medium font-poppins leading-7 text-[#fafafa] py-6">Subscribe</h2>
                        <p className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Get 10% off your first order</p>
                    </div>

                    <div className='w-[22%]'>
                        <h3 className="text-[20px] leading-7 font-medium font-poppins text-[#fafafa] pb-6">Support</h3>
                        <p className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>

                        <p className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa] py-4">exclusive@gmail.com</p>

                        <p className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">+88015-88888-9999</p>
                    </div>

                    <div className='w-[15%] '>
                        <h3 className="text-[20px] leading-7 font-medium font-poppins text-[#fafafa] pb-6">Account</h3>

                        <div className="fmenu flex flex-col gap-4">
                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">My Account</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Login / Register</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Cart</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Wishlist</a></div>
                    </div>

                    <div className='w-[15%] '>
                        <h3 className="text-[20px] leading-7 font-medium font-poppins text-[#fafafa] pb-6">Quick Link</h3>

                        <div className="fmenu flex flex-col gap-4">
                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Privacy Policy</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Terms Of Use</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">FAQ</a>

                            <a href="#" className="text-[16px] leading-6 font-poppins font-normal text-[#fafafa]">Contact</a></div>
                    </div>

                    <div className='w-[22%]'>
                        <h3 className="text-[20px] leading-7 font-medium font-poppins text-[#fafafa] pb-6">Quick Link</h3>

                        <div className="flex gap-2.5">
                            <a href="#">
                                <img src={qrcode} alt="qr code" />
                            </a>
                            <div className="anpple flex flex-col gap-[7px]">
                                <a href="#">
                                    <img src={apple} alt="apple store" />
                                </a>
                                <a href="#">
                                    <img src={android} alt="android playstore" />
                                </a>
                            </div>
                        </div>
                        <div className="fmenus icons flex justify-between gap-6 pt-6">
                            <a href="#">
                                <img src={facebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="#">
                                <img src={instagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={linkedin} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom border-t-2 border-[rgba(255,255,255,0.4)] pt-4 pb-6">
                <p className="text-[16px] font-poppins leading-6 text-[rgba(255,255,255,0.25)] text-center">&copy; Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer