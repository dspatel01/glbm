import React, { useState } from 'react'
import p1 from '../../assets/Jeans Denim/Boys/WhatsApp Image 2024-09-17 at 16.15.10.jpeg'
import p2 from '../../assets/Jeans Denim/Boys/WhatsApp Image 2024-09-17 at 16.16.47.jpeg'
import p3 from '../../assets/Jeans Denim/Boys/WhatsApp Image 2024-09-17 at 16.18.15.jpeg'
import p4 from '../../assets/Jeans Denim/Boys/WhatsApp Image 2024-09-17 at 16.19.31.jpeg'
import p5 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.13 (1).jpeg'
import p6 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.13 (2).jpeg'
import p7 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.13 (3).jpeg'
import p8 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.13.jpeg'
import p9 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.14 (1).jpeg'
import p10 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.14 (2).jpeg'
import p11 from '../../assets/Jeans Denim/Ladies/WhatsApp Image 2024-07-04 at 17.45.14.jpeg'


const Products = () => {
    const [subCategories, setCategosies] = useState(false)

    const handleSubCategosies = () => {
        !subCategories ? setCategosies(true) : setCategosies(false)
    }

    return (
        <>
            <div className='w-full mt-16 mb-10 bg-white'>
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-5 capitalize">Our Categories</p>
                <div className='w-full flex justify-center'>
                    <div className='flex items-start justify-around xl:w-[40%] md:[60%]'>
                        <div className='border border-gray-400 cursor-pointer w-40 text-center py-2' onClick={handleSubCategosies}> Men</div>
                        <div className='border border-gray-400 cursor-pointer w-40 text-center py-2' onClick={handleSubCategosies}> Womens</div>
                        <div className='border border-gray-400 cursor-pointer w-40 text-center py-2' onClick={handleSubCategosies}> Kids</div>
                    </div>
                </div>
               <div className={subCategories ? 'w-full flex justify-center mt-5':'hidden'}  >
                    <div className='flex items-start justify-around flex-wrap xl:w-[80%] md:w-[95%]'>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> Jeans</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> DENIM SHORTS</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> T-Shirt</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> PYJAMA</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> BERMUDA</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> TROUSERS</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> JOGGERS</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> JAMAICAN</div>
                        <div className='border border-gray-400 w-28 mt-1 text-center py-2 text-[14px]'> BERMUDA</div>
                    </div>
                </div>
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 mb-5 capitalize">Our Products</p>

                <div className='w-full flex justify-center  py-3 h-fit'>
                    <div className='xl:w-[95%] flex justify-center flex-wrap '>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p1} className='w-[92%]  h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p2} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p3} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p4} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p5} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p6} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p7} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p8} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p9} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p10} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                        <div className='w-52 h-52 my-2 border rounded-2xl flex justify-center hover:scale-105 hover:transition-all transition-all items-center bg-red-700 mx-3 shadow-xl'>
                            <img src={p11} className='w-[92%] h-[92%]  rounded-xl' alt="" />
                        </div>
                    
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
