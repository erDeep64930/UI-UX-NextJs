"use client"

import Image from "next/image"
import { useState } from "react"
import { FaAddressBook, FaAlignLeft, FaArrowLeft, FaArrowRight, FaDoorClosed, FaHome, FaPhone } from "react-icons/fa"


const IdentityCard = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="h-screen w-screen justify-center items-center flex ">
            {/* this is for 1st div  */}
            <div className="flex p-2 border border-white/10 justify-center items-center space-x-4 ">

                <Image src="/ai4.png" alt="" width={40} height={40} className="rounded-full h-16 w-16" />

                <span>
                    <h2 className="text-3xl text-white">Deepak Kumar</h2>
                    <p className="text-md text-white/15">Web Developer</p>
                </span>
            </div>
            {/* this is for 2nd side div */}
            <div className="flex space-x-4 border border-white/10 p-6">
                <span className={`flex space-x-4 ${open ? "block" : "hidden"}`}  >
                    <FaHome className="text-3xl" />
                    <FaPhone className="text-3xl" />
                    <FaAddressBook className="text-3xl" />
                </span>
                {
                    open ? <FaArrowLeft className="text-3xl" onClick={() => setOpen(!open)} /> : <FaArrowRight className="text-3xl" onClick={() => setOpen(!open)} />
                }

            </div>
        </div>
    )
}

export default IdentityCard