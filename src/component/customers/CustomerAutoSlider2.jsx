import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import udan from '../../assets/clientsImages/udan.png'
import flipKart from '../../assets/clientsImages/flipkart.webp'
import amazon from '../../assets/clientsImages/amazon.png'
import business99 from '../../assets/clientsImages/99business.png'

const CustomerAutoSlider2 = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="w-full my-10 ">
                <p className="ml-8 font-bold text-[18px] text-red-900 italic paraTextShadow mt-8 capitalize">Online Business B2B Plateform</p>
                <div className="flex justify-center w-full mt-5">
                    <div className="xl:w-[80%] lg:w-[80%] md:[80%] sm:w-[75%] w-[80%] flex justify-around">
                        {/* <Slider {...settings}> */}
                            <div className="w-52 h-28 object-contain px-2" >
                                <img src={udan} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-52 h-28 object-contain px-2" >
                                <img src={flipKart} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-52 h-28 object-contain px-2" >
                                <img src={amazon} className="w-[100%] h-[100%]" alt="" />
                            </div>
                            <div className="w-52 h-28 object-contain px-2" >
                                <img src={business99} className="w-[100%] h-[100%]" alt="" />
                            </div>
                        {/* </Slider> */}
                    </div>
                </div>
            </div>
        </>
    )

}

export default CustomerAutoSlider2
