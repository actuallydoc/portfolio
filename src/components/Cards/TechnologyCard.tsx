import Image from 'next/image'
import React from 'react'

interface TechnologyCardProps {
    name: string,
    image: string
}
const KnownTechnologies: TechnologyCardProps[] = [
    {
        name: 'React',
        image: '/react.png'
    },
    {
        name: 'Typescript',
        image: '/typescript.png'
    },
    {
        name: 'Rust',
        image: '/rust.png'
    },
    {
        name: 'Javascript',
        image: '/javascript.png'
    },
    {
        name: 'Nextjs',
        image: '/nextjs.svg'
    },
    {
        name: 'C++',
        image: '/cpp.png'
    },
    {
        name: 'Python',
        image: '/python.png'
    },
    {
        name: 'Nodejs',
        image: '/node.png'
    },
    {
        name: 'Tailwindcss',
        image: '/tailwind.png'
    },
    {
        name: "JWT",
        image: '/jwt.svg'
    },
    {
        name: 'Arduino',
        image: '/arduino.svg'
    },
    {
        name: 'supabase',
        image: '/supabase.jpg'
    },
    {
        name: 'NextAuth',
        image: '/nextauth.png'
    },
    {
        name: 'MaterialUI',
        image: '/mui.png'
    },
    {
        name: 'Prisma',
        image: '/prisma.png'
    }
]


const FutureTechnologies: TechnologyCardProps[] = [
    {
        name: 'Vue',
        image: '/vue.png'
    },
    {
        name: 'Svelte',
        image: '/svelte.png'
    },
    {
        name: 'Java',
        image: '/java.svg'
    },
    {
        name: 'Nestjs',
        image: '/nest.png'
    },
    {
        name: 'SolidJS',
        image: '/solid.jpg'
    },
    {
        name: 'Angular',
        image: '/angular.png'
    },
    {
        name: 'Trpc',
        image: '/trpc.svg'
    }
]




export default function TechnologyCard() {
    return (
        <div>
            {/* Make responsible because website is glitching and it goes outside the webpage on the right side */}
            <div className='flex flex-col items-center justify-center mt-5 p-5 space-y-5 bg-gradient-to-b from-[#1e1629] to-[#04061d] rounded-lg shadow-2xl'>
                <h4 className='text-2xl text-center text-slate-400'>Technologies i have tried</h4>
                <div className='sm:flex-col md:grid grid-cols-8 p-2 overflow-auto'>
                    {KnownTechnologies.map((tech, index) => (
                        <div key={index} className='flex items-center mx-1 my-1 justify-center w-16 h-16 bg-gray-800 rounded-full'>
                            <Image src={tech.image} className='rounded-full' alt='' width={50} height={50} />
                        </div>
                    ))}
                </div>
                <div>
                    <div className="site-divider"></div>
                    <div>
                        <h4 className='text-xl text-center text-slate-400'>Technologies i want to learn in the future!</h4>
                    </div>
                    <div className='sm:flex-col md:grid grid-cols-7 space-x-1 '>
                        {FutureTechnologies.map((tech, index) => (
                            <div key={index} className='flex items-center justify-center mx-1 my-1 w-16 h-16 bg-gray-800 rounded-full'>
                                <Image src={tech.image} className='rounded-full' alt='' width={50} height={50} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
