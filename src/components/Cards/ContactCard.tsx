import React from 'react'
import Image from 'next/image'
export default function ContactCard({ animate }: { animate: boolean }) {
    const handleOpenDiscord = () => {
        window.open("https://discord.com/users/actuallydoc#0001", "_blank")
    }
    const handleOpenGithub = () => {
        window.open("https://github.com/actuallydoc", "_blank")
    }
    const handleOpenTwitter = () => {
        window.open("https://twitter.com/actuallydoc", "_blank")
    }
    const handleOpenEmail = () => {
        window.open("mailto:actuallydoc@gmail.com", "_blank")
    }
    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/maj-knez-65ba6b246", "_blank")
    }

    return (
        <div>
            <div className={`box-border w-96 h-auto ml-5 shadow-xl ${animate ? "animate-pulse" : ""}`}>
                <div className='flex flex-col  mt-5 p-5   rounded-2xl justify-center w-full h-full hover:scale-105 duration-150 bg-gradient-to-b from-[#1e1629] to-[#04061d]'>
                    <div className='flex  w-64 h-32  items-center justify-center  '>
                        <div className='space-y-5 justify-center items-center'>
                            <div>
                                <h1 className='text-2xl mt-5 text-center justify-center pl-auto text-slate-400 font-bold p-2 rounded-full bg-gradient-to-b from-[#1e1629] to-[#04061d] '>Contact me</h1>
                            </div>
                            <div className='flex space-x-4 font-bold'>
                                <div className=''>
                                    <Image className='rounded-full  cursor-pointer hover:scale-105 duration-150 transform' onClick={handleOpenDiscord} width={38} height={50} src='/discord.svg' alt='profile' />
                                    {/* Maybe when a user hovers over the discord icon give a choice for joining the server or show discord tag */}
                                </div>
                                <div>
                                    <Image className='rounded-full cursor-pointer hover:scale-105 duration-150 transform' onClick={handleOpenGithub} width={33} height={32} src='/github.svg' alt='profile' />

                                </div>
                                <div>
                                    <Image className='rounded-full  cursor-pointer hover:scale-105 duration-150 transform' onClick={handleOpenEmail} width={50} height={50} src='/gmail.svg' alt='profile' />
                                </div>
                                <div>
                                    <Image className='rounded-full cursor-pointer hover:scale-105 duration-150 transform' onClick={handleLinkedIn} width={35} height={32} src='/linkedin.svg' alt='profile' />
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
