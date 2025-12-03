import React from 'react'
import { Link } from 'react-router'

const NotFount = () => {
    return (
        <>
            <section className='pt-[241px] pb-[140px]'>
                <div className="container">
                    <div className="content text-center">
                        <h1 className='text-[110px] font-medium text-[#000000] leading-[115px] tracking-[3%] font-inter pb-10'>404 Not Found</h1>
                        <span className='text-[16px] leading-6 text-[#000000] font-poppins font-normal  '>Your visited page not found. You may go home page.</span>
                        <div className='pt-20'>
                            <Link to='/' className='gblbtn inline-block '>Back to home page</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFount