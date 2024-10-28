import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img, date, rating }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-gradient-to-r from-blue-500 to-purple-500 transition-transform transform hover:scale-105'>
        <img src={quotes} alt="double quotes" className='w-[42px] h-[27px] object-contain' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
                <img src={img} alt={name} className='w-[48px] h-[48px] rounded-full' />
                <div className='flex flex-col ml-4'>
                    <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white'>{name}</h4>
                    <p className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite'>{title}</p>
                    <p className='font-poppins font-normal text-[14px] leading-[20px] text-dimWhite italic'>{date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                {Array.from({ length: 5 }, (_, index) => (
                    <svg
                        key={index}
                        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 .587l3.668 7.431 8.185 1.179-5.917 5.565 1.4 8.168L12 18.896l-7.336 3.846 1.4-8.168-5.917-5.565 8.185-1.179z" />
                    </svg>
                ))}
            </div>
        </div>
    </div>
);

export default FeedbackCard;
