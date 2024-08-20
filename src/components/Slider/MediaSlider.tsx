'use client';
import { Navigation, Pagination, A11y, Autoplay, Parallax } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

import './slider.scss'

const MediaSlider = ({slides}: any) => {
    const data = slides ? JSON.parse(slides) : []
    return (
        <>
        <Swiper 
        modules={[Navigation, A11y, Autoplay, Parallax, Pagination]}
        speed={2000}
        parallax={true}
        pagination={{ clickable: true }}
        navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
        }}
        loop={true}
        // autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="mySwiper  w-full h-full">
            {data.length > 0 ? data.map((slide: any) => (           
                <SwiperSlide className='flex flex-col items-center justify-center  md:px-20' key={slide.id}>
                    <div className="w-full h-full flex flex-col md:flex-row p-10 gap-10 ">
                        <div className="w-full md:w-2/3 h-full flex justify-center items-center">
                            <div className="h-[200px] w-[300px] md:h-[300px] md:w-[400px] lg:h-[400px] lg:w-[600px] overflow-hidden rounded-2xl">
                                <iframe src={slide.link} width="100%" height="100%" frameBorder="0"></iframe>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 h-full flex justify-center text-center items-center">
                            <div className="flex flex-col h-full w-full justify-center items-center overflow-hidden gap-5">
                                <h1 className="text-3xl">{slide.title}</h1>
                                <p className="text-sm ">{slide.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className=''></div>
                </SwiperSlide>
            )) : (
                <SwiperSlide className='flex flex-col items-center justify-center w-full h-full md:px-20' >
                    <div className="w-full h-full flex flex-col justify-center items-center md:flex-row p-10 gap-10 ">
                    <p className='text-2xl'>Coming Soon</p>
                    </div>
                    <div className=''></div>
                </SwiperSlide>
            )}
        </Swiper>
                    <div className="hidden lg:block relative z-30">
                        <div className="absolute h-full w-full top-[-16.1rem] left-5 prev-button">
                            <button type='button' className="button">
                                <div className="button-box">
                                    <span className="button-elem">
                                        <svg viewBox="0 0 46 40" fill='#000' xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="button-elem ">
                                        <svg viewBox="0 0 46 40" >
                                            <path
                                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div>                                            
                    </div>
                    <div className='hidden lg:block relative z-30'>
                        <div className="absolute  top-[-16.1rem] right-5 rotate-180 next-button">
                            <button type='button' className="button">
                                <div className="button-box">
                                    <span className="button-elem ">
                                        <svg viewBox="0 0 46 40" fill='#000' xmlns="http://www.w3.org/2000/svg">
                                            <path
                                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <span className="button-elem ">
                                        <svg viewBox="0 0 46 40" >
                                            <path
                                            d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"
                                            ></path>
                                        </svg>
                                    </span>
                                </div>
                            </button>
                        </div>      
                    </div>
        </>
    )
}

export default MediaSlider
