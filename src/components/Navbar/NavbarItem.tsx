import React from 'react'

export default function NavbarItem({ name }: { name: string }) {
    return (
        <div>
            <button className="text-white bg-gradient-to-b from-[#1e1629] to-[#0e197a] border-4 rounded-lg p-2 hover:scale-105 duration-150 transform mt-3 hover:text-gray-400">{name}</button>
        </div>
    )
}
