import React from 'react'

const SmokyText = () => {
    const myStyle ={
        transitionProperty: 'transform',
        transitionDuration: '1s',
        transitionTimingFunction: 'ease-in-out',
        transitionDelay: '1s',
        backgroundColor:"blue",
        

    }
    return (
        
        <div className='h-screen w-full flex items-center justify-center '>
            <ul className='text-7xl flex '>
                <li className='rotate-45 transform translate-y-[200px]  hover:opacity-0 hover:blur-xl ' >S</li>
                <li className=''>M</li>
                <li className=''>O</li>
                <li className=''>K</li>
                <li className=''>Y</li>
            </ul>
            <h1 style={myStyle}>this is inline styling</h1>
        </div>
    )
}

export default SmokyText