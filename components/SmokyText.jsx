import React from 'react'

const SmokyText = () => {

    return (

        <div className='h-screen w-full flex items-center justify-center '>
            <ul className='text-7xl flex hover:[&>*]:rotate-45 hover:[&>*]:transform hover:[&>*]:blur-sm  hover:[&>*]:-translate-y-[100px] hover:[&>*]:duration-500 hover:[&>*]:transition-all hover:[&>*]:opacity-0 odd:hover:[&>*]:duration-600'>
                <li className=''>S</li>
                <li className=''>M</li>
                <li className=''>O</li>
                <li className=''>K</li>
                <li className=''>Y</li>
            </ul>

        </div>
    )
}

export default SmokyText