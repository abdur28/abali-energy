'use client';
import { Navigation, A11y, Autoplay, Parallax } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

import './slider.scss'

const Slider = ({slides}: any) => {
    const data = JSON.parse(slides)
    return (
        <Swiper 
        modules={[Navigation, A11y, Autoplay, Parallax]}
        speed={2000}
        parallax={true}
        // navigation={{
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',

        // }}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="mySwiper w-full h-full">
            {data.map((slide: any) => (
                <SwiperSlide className='flex items-center justify-center' key={slide.id}>
                    <div className="w-screen h-[calc(100vh-80px)] flex justify-center items-center lg:justify-start"
                    style={{
                        backgroundImage: `url(${slide.background})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                    >
                        <div className="flex flex-col justify-center lg:w-1/2 lg:pl-32 lg:justify-start lg:text-left lg:items-start items-center text-center gap-16 lg:gap-10 px-7">
                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start ">
                                <p className="text-primary italic font-semibold text-2xl"
                                data-swiper-parallax="-300"
                                data-swiper-parallax-duration="2000"
                                >Abali <span className="text-secondary">Energy</span></p>
                                <h1 className="text-white text-5xl font-semibold"
                                data-swiper-parallax="-100"
                                data-swiper-parallax-duration="2500"
                                >Servicing New Frontiers</h1>
                            </div>
                            <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start gap-5">
                                <h3 className="text-white text-3xl"
                                data-swiper-parallax="-100"
                                data-swiper-parallax-opacity="0"
                                data-swiper-parallax-duration="3000"
                                >{slide.caption}</h3>
                                <Link
                                href={slide.buttonLink}
                                >
                                    <button className="bg-primary px-4 py-2 rounded-lg text-lg text-white hover:bg-secondary"
                                    data-swiper-parallax-opacity="0"
                                    data-swiper-parallax-duration="3000"
                                    >
                                        {slide.buttonDescription}
                                    </button>
                                </Link>
                                {/* <div className="flex flex-row mt-10 justify-between w-full">
                                    <div className="next">
                                        <button className="button">
                                        <div className="button-box">
                                            <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                            </span>
                                            <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path
                                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                            </span>
                                        </div>
                                        </button>
                                    </div>
                                    <div className="previous">
                                        <button className="button">
                                        <div className="button-box">
                                            <span className="button-elem">
                                            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                            </span>
                                            <span className="button-elem">
                                            <svg viewBox="0 0 46 40">
                                                <path
                                                d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                                ></path>
                                            </svg>
                                            </span>
                                        </div>
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider
