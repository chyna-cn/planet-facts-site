import React from 'react';
import {AiOutlineMenu} from "react-icons/ai";

const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center w-full h-[70px] border-b border-b-gray-800'>
                <h1 className='text-white mx-6 py-6 font-serif font-bold text-3xl scale-y-150 md:text-center lg:text-2xl'> THE PLANETS </h1>
               <div className=''><AiOutlineMenu size={35} className='text-white mx-auto cursor-pointer md:hidden'/></div>
                <div className='hidden md:flex py-6 text-center space-x-3 mx-6 ' >
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>MERCURY</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>VENUS</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>EARTH</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>MARS</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>JUPITER</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>SATURN</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>URANUS</span>
                    <span className='text-white text-xs hover:scale-y-125 duration-300  hover:bg-purple-800'>NEPTUNE</span>
                </div>

            </div>

        </div>
    )
}
export default Header
