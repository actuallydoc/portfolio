import React from 'react'
import Image from 'next/image'
export default function ContactCard({ animate }: { animate: boolean }) {
    return (
        <div>
            <div className={`box-border w-96 h-auto ml-5 shadow-xl ${animate ? "animate-pulse" : ""}`}>
                <div className='flex flex-col  mt-5 p-5   rounded-2xl justify-center w-full h-full hover:translate-x-5 duration-150 bg-gradient-to-b from-[#1e1629] to-[#04061d]'>
                    <div className='flex  w-64 h-32  items-center justify-center'>
                        <div className='space-y-5'>
                            <div>
                                <h1 className='text-2xl mt-5 text-slate-400 font-bold bg-black p-2 rounded-full bg-gradient-to-b from-[#1e1629] to-[#04061d] '>Contact me📞</h1>
                            </div>
                            <div className='flex space-x-4 font-bold'>
                                <div className=''>
                                    <Image className='rounded-full' width={32} height={32} src='/discord.svg' alt='profile' />
                                </div>
                                <div>
                                    <p className='text-slate-400'>Discord: </p>
                                </div>
                            </div>

                        </div>
                        <div>
                        </div>
                    </div>
                    <div>
                        <div className="site-divider"></div>
                    </div>

                </div>
            </div>
        </div >
    )
}
