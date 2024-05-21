import React from 'react'

const LoadingPage1 = () => {
  return (
    <div className="h-screen w-screen bg-[url(/ai2.jpg)] flex justify-center items-center mx-auto ">
      <div className="w-[100px] h-[100px] backdrop-invert-0 bg-white/30 rounded-md flex items-center justify-center animate-loading perspective-200">

      <ul className='text-7xl flex hover:[&>*]:rotate-45 hover:[&>*]:transform hover:[&>*]:blur-sm  hover:[&>*]:-translate-y-[100px] hover:[&>*]:duration-500 hover:[&>*]:transition-all hover:[&>*]:opacity-0 odd:hover:[&>*]:duration-600'>
                <li className=''>S</li>
                <li className=''>M</li>
                <li className=''>O</li>
                <li className=''>K</li>
                <li className=''>Y</li>
            </ul>
      </div>
    </div>
  )
}

export default LoadingPage1