import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
    const [lang, setLang] = useState(false);
    const [value, setValue] = useState("English");

    // const handleValue = () => {
    //     setValue("Bangla");
    //     setLang(false);
    // }
    const handleValue = () => {
        setValue(value === 'English' ? 'Bangla' : 'English');
        setLang(false);
    }
    return (
        <>
            <nav className='bg-[#000000]'>
                <div className="container">
                    <div className="flex items-center py-3">
                        <div className=" w-[80%] text-end">
                            <p className="text-[#ffffff] text-[14px] font-poppins leading-[21px] ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                                <a href="#" className="font-semibold leading-6 underline">Shop Now</a></p>
                        </div>
                        <div className=" w-[20%] text-end">
                            <div className="flex justify-end gap-2.5 ">
                                <div className="flex flex-col p-1 rounded-[5px] relative">
                                    <a href="#" className="text-[#ffffff] text-[14px] font-poppins leading-[21px] ">{value}</a>

                                    {/* {
                                        lang &&
                                        <a href="#" className="absolute top-full left-0 px-2 bg-[#ef7d7d] text-[#ffffff] text-[14px] font-poppins leading-[21px] transition-all duration-200 opacity-100 scale-100 origin-top" 
                                        onClick={handleValue}>{value == 'Bangla' ? 'English' : 'Bangla'}</a>
                                    } */}
                                    <a
                                        href="#"
                                        onClick={handleValue}
                                        className={`
                                        absolute top-full left-0 px-2 bg-[#ef7d7d] text-[#ffffff] text-[14px] font-poppins leading-[21px] rounded-[5px] transition-all duration-200 origin-top
                                        ${lang ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
                                        `}
                                    >
                                        {value == 'Bangla' ? 'English' : 'Bangla'}
                                    </a>
                                    <IoIosArrowDown onClick={() => setLang(!lang)} className="text-white text-[18px] cursor-pointer absolute top-2 -right-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar