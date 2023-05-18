import React from 'react'
import Image from 'next/image'
interface Project {
    title: string,
    description: string,
    image: string,
    link: string
}

const projects: Project[] = [
    {
        title: "Rust Invoicer",
        description: "Rust Invoicing tool written in Rust",
        image: "/rust_invoicer.png",
        link: "https://github.com/actuallydoc/Rust-Invoicer"
    },
    {
        title: "Hulu Clone",
        description: "Hulu clone made with a course on Youtube.",
        image: "/hulu_clone.png",
        link: "https://github.com/actuallydoc/Hulu-Clone-NextJs"
    },
    {
        title: "Web Invoicer",
        description: "Web invoicing NextJs application",
        image: "/web_invoicer.png",
        link: "https://github.com/actuallydoc/web-invoicer"
    },
    {
        title: "First Portfolio",
        description: 'My first "wannabe" portfolio🤣',
        image: "/first_portfolio.png",
        link: "https://github.com/actuallydoc/First-Portfolio"
    },
    {
        title: "C++ Invoicer",
        description: "C++ Invoicing Utility.",
        image: "/cpp_invoicer.png",
        link: "https://github.com/actuallydoc/ImGui-Invoicer"
    },
]


export default function ProjectLayout() {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 ml-5 ">
                {projects.map((project, index) => (
                    <div key={index} className="bg-slate-400 hover:scale-105 duration-150 w-96 space-y-3 rounded-lg shadow-lg p-4 bg-gradient-to-b from-[#1e1629] to-[#242038]">
                        <div className="flex justify-center">
                            <Image src={project.image} alt={project.title} className="bg-black" width={128} height={128} />
                        </div>
                        <div className="flex justify-center">
                            <h1 className="text-white text-2xl font-bold">{project.title}</h1>
                        </div>
                        <div className="flex justify-center">
                            <p className="text-white text-sm">{project.description}</p>
                        </div>
                        <div className="flex justify-center">
                            <a href={project.link} className="text-white bg-black rounded-lg p-2 text-sm">View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
