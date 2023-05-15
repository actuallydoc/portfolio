import React from 'react'

export default function ToggleSwitch({ onClick, state }: { onClick: () => void, state: boolean }) {

    return (
        <div>
            <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
                <input onClick={onClick} type="checkbox" name="toggle" id="toggle" className={` ${state ? 'translate-x-full duration-150' : 'translate-x-0 duration-150'}     toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer`} />
                <label htmlFor="toggle" className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer`}></label>
            </div>
        </div>
    )
}
