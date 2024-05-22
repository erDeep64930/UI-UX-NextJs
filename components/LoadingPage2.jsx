import React from 'react'

const LoadingPage2 = () => {
  return (
    <div className="h-screen w-screen bg-[url(/ai6.jpg)] flex justify-center items-center mx-auto ">
      {/* left part blur bg */}
      <div className='w-1/2 h-full backdrop-invert-0 relative bg-white/20'>
        <h3 className='top-0 right-0 text-[150px] text-right text-white '>Kode</h3>

      </div>
      {/* right part normal */}
      <div className='w-1/2 h-full relative'>
        <h3 className='top-0 left-0  text-[150px]'>rma</h3>
      </div>
    </div>
  )
}

export default LoadingPage2