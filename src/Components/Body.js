import React from 'react';
import {BiArrowToRight} from "react-icons/bi";

const Body = () => {
    return (
        <div className='flex flex-row justify-between space-x-24 pt-16'>
            <div>
                <img className='max-w-[450px] ml-20'
                    src="https://images.pexels.com/photos/45208/world-earth-planet-globe-45208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt='earth'/>
            </div>
            <div className='pl-10'>
                <h1 className='text-white text-4xl py-4 scale-y-150'>EARTH</h1>
                <p className='text-white py-4 font-thin text-sm w-3/4 text-gray-400 tracking-wider'>Third planet from the sun and the only planet known to harbor life. About 29.2% of the earth's
                    surface is land with the remaining 70.8% covered with water. Earth's distance from the sun, physical
                    properties and geological history has allowed life to evolve and thrive </p>
                <div className='flex items-center space-x-2 text-xs'>
                    <p className='text-white  font-thin text-gray-400'>Source:</p>
                    <div className='flex items-center space-x-1.5'><span className="text-white underline text-gray-400 ">Wikipedia</span> <span><a href='https://en.wikipedia.org/wiki/Earth'> <BiArrowToRight className='text-white hover:scale-y-150 hover:bg-purple-800' /></a></span></div>
                </div>

                <div className='flex flex-col pt-8'>
                    <div className='space-x-5 m-2 w-3/4 pl-6 pt-1.5 h-10 border border-gray-800 hover:bg-purple-800'><span className='text-white text-xs text-gray-400 '>01</span> <span className='text-white text-xs tracking-wider'>OVERVIEW</span></div>
                    <div className='space-x-5 m-2 w-3/4 pl-6 pt-1.5 h-10 border border-gray-800 hover:bg-purple-800'><span className='text-white text-xs text-gray-400 '>02</span> <span className='text-white text-xs tracking-wider'>INTERNAL STRUCTURE</span></div>
                    <div className='space-x-5 m-2 w-3/4 pl-6 pt-1.5 h-10 border border-gray-800 hover:bg-purple-800'><span className='text-white text-xs text-gray-400 '>03</span> <span className='text-white text-xs tracking-wider'>SURFACE GEOLOGY</span></div>
                </div>

            </div>
        </div>
    )
}

export default Body