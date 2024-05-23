"use client";
import { tabMenu } from '@/constant/constant';
import Image from 'next/image';
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TabCarousal = () => {
    const [slide, setSlide] = useState(0);

    const prevSlide = () => {
        setSlide((prev) => (prev === 0 ? tabMenu.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setSlide((prev) => (prev === tabMenu.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index) => {
        setSlide(index);
    };

    return (
        <div className='flex justify-center items-center w-full h-full p-2'>
            <div className='flex justify-center items-center w-[740px] h-[640px] relative'>
                <FaArrowLeft onClick={prevSlide} className='absolute w-8 h-8 text-white rounded-full left-6 cursor-pointer' />
                {tabMenu.map((item, index) => (
                    <Image
                        src={item.pic}
                        key={item.id}
                        alt={item.title}
                        width={700}
                        height={400}
                        className={slide === index ? "w-full h-full shadow-md" : "hidden"}
                    />
                ))}
                <FaArrowRight onClick={nextSlide} className='absolute w-8 h-8 text-white rounded-full right-6 cursor-pointer' />
                {/* This is for dots */}
                <div className='flex absolute bottom-8 space-x-2'>
                    {tabMenu.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-4 w-4 rounded-full ${slide === index ? "bg-white" : "bg-gray-700"}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TabCarousal;
