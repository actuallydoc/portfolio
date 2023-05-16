import Image from 'next/image'
import React from 'react'

export default function AboutCard() {

    return (
        <div>
            <div className='box-border w-80 h-auto ml-5 shadow-xl '>
                <div className='flex flex-col  mt-5 items-center  rounded-2xl justify-center w-full h-full hover:translate-x-5 duration-150 bg-gradient-to-b from-[#1e1629] to-[#04061d]'>
                    <div className='flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-b from-[#1e1629] to-[#04061d]'>
                        <div>
                            <Image className='rounded-full' width={64} height={64} src='/githublogo.png' alt='profile' />
                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-2xl mt-5 text-slate-400 font-bold'>About me💻</h1>
                    </div>

                    <div className='flex flex-col items-center text-slate-400 justify-center w-64 h-64'>
                        <p className='text-center text-lg'>I am a self </p>
                        <p className='text-center text-lg'>taught programmer </p>
                        <p className='text-center text-lg'>who loves to </p>
                        <p className='text-center text-lg'>learn new </p>
                        <p className='text-center text-lg'>technologies and </p>
                        <p className='text-center text-lg'>build cool stuff. </p>
                    </div>
                </div>
            </div>
        </div >
    )
}
