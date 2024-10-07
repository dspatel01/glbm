import React from 'react'
import fac1 from '../assets/imgs/facility.png'
import fac2 from '../assets/imgs/facility1.png'
import fac3 from '../assets/imgs/facility2.png'

const Gallery = () => {
    return (
        <>
            <div className='w-full h-[50vh] backgroundImage mt-[-80px] mb-20'>
                <div className='w-full h-[100%] flex justify-end items-center flex-col overlayOtherPage '>
                    {/* <h1 className='text-[7vmax] font-bold text-white text-justify textShadow mb-0'>Our<span className='text-red-900'> Product</span></h1> */}
                </div>
            </div>

            <p className="ml-16 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-0 capitalize">OUR FACILITY</p>
      <div className='h-fit pb-5 flex justify-center items-center  flex-wrap mb-5 px-5'>
        <div className='xl:w-[45%] md:w-[95%]'>
          <img className='w-full h-[320px] mt-5 mr-5' src={fac1} alt="GLBM" />
        </div>
        <div className='xl:w-[45%] md:w-[95%]'>
          <img className='w-full h-[320px] mt-5 ml-5' src={fac2} alt="GLBM" />
        </div>
      </div>

      <div className='w-full h-[50vh] flex justify-center items-center mb-10 px-2'>
        <img className='xl:w-[80%] md:w-[95%] h-[100%]' src={fac3} alt="" />
      </div>
        </>
    )
}

export default Gallery
