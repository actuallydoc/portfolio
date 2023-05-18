import React from 'react'
export default function Tooltip({ children, text }: { children: React.ReactNode, text: string }) {
    return (
        <div className="">
            <div className="parent">
                {children}
                <div className="tooltip-slide">
                    {text}
                </div>
            </div>
        </div>
    )
}
