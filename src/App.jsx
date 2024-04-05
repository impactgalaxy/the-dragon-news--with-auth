// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SlCalender } from "react-icons/sl";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <h1 className='text-3xl p-4'>Insight View</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,

                }}

                loop={true}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className='p-4'>
                        <img src="/1.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/2.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/3.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/1.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/2.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/3.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/1.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/2.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='p-4'>
                        <img src="/3.png" alt="" className='m-auto block object-cover' />
                        <div>
                            <h1 className='text-2xl font-bold'>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                            <div className='flex gap-1 items-center'>
                                <SlCalender></SlCalender> <span>12-12-2012</span>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    );
}
