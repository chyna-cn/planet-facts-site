import React from 'react';

const Footer=()=>{
    return(
        <div className='flex flex-row pt-24 justify-around w-3/4 mx-auto -space-x-64' >
            <div className='flex flex-col border border-gray-800 w-1/6 h-24 pl-4 pt-4  '>
                <span className='text-white text-[8px] tracking-widest text-gray-400 leading-[12px] mb-2'>ROTATION TIME</span>
                <span className='text-white text-xl tracking-wider text-light scale-y-150'>0.99 DAYS</span>
            </div>

            <div className='flex flex-col border border-gray-800 w-1/6 h-24 pl-4 pt-4 '>
                <span className='text-white text-[8px] tracking-widest text-gray-400 leading-[12px] mb-2'>REVOLUTION TIME</span>
                <span className='text-white text-xl tracking-wider text-light scale-y-150'>365.26 DAYS</span>
            </div>

            <div className='flex flex-col border border-gray-800 w-1/6 h-24 pl-4 pt-4 '>
                <span className='text-white text-[8px] tracking-widest text-gray-400 leading-[12px] mb-2'>RADIUS</span>
                <span className='text-white text-xl tracking-wider text-light scale-y-150'>6,371 KM</span>
            </div>

            <div className='flex flex-col border border-gray-800 w-1/6 h-24 pl-4 pt-4 '>
                <span className='text-white text-[8px] tracking-widest text-gray-400 leading-[12px] mb-2'>AVERAGE TEMP.</span>
                <span className='text-white text-xl tracking-wider text-light scale-y-150'>16°C</span>
            </div>
        </div>
    )
}
export default Footer