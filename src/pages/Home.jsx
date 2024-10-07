import React from 'react'
import HeroSection from '../component/hero/HeroSection'
import CustomerAutoSlider from '../component/customers/CustomerAutoSlider'
import Products from '../component/products/Products'



const Home = () => {
    return (
        <>
            <div className='relative top-[-65x]'>
                <HeroSection />
                <Products />
                
                <CustomerAutoSlider />
            </div>
        </>

    )
}

export default Home
