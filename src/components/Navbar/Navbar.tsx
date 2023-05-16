import React, { useState } from 'react'
import { toast } from 'react-toastify';
import ToggleSwitch from '../ToggleSwitch';

const NavbarPortfolioItems: string[] = ["Home", "About", "Contact", "Projects", "Resume"]

let contactInterval: NodeJS.Timeout | null = null;
let aboutInterval: NodeJS.Timeout | null = null;
export default function Navbar({ animateContact, animateAbout }: { animateContact: React.Dispatch<React.SetStateAction<boolean>>, animateAbout: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [navState, setNavState] = React.useState<string>("Home")
    const [state, setState] = useState<boolean>(false)
    const handleNavItemClick = (index: number) => {
        setNavState(NavbarPortfolioItems[index] as string)
        switch (NavbarPortfolioItems[index]) {
            case "Home":
                break;
            case "Contact":
                animateContact(true)
                if (contactInterval) {
                    clearInterval(contactInterval);
                }
                contactInterval = setInterval(() => {
                    animateContact(false);
                    setNavState("Home");
                }, 3000);
                break;
            case "About":
                animateAbout(true)
                if (aboutInterval) {
                    clearInterval(aboutInterval);
                }
                aboutInterval = setInterval(() => {
                    animateAbout(false);
                    setNavState("Home");
                }, 3000);
                break;

        }
    }

    const handleSwitch = () => {
        setState(!state)
        toast.success("Theme switching not implemented yet!", {
            position: "top-right",
            autoClose: 2000,
        });
    }
    //!TODO Maybe make a sidebar for mobile devices and make the navbar a dropdown menu
    return (
        <div className='flex'>
            <div className='flex rounded-sm w-full p-3 space-x-3  pb-5 bg-gradient-to-b from-[#1e1629] to-[#04061d]'>
                {NavbarPortfolioItems.map((item, index) => (
                    <div key={index}>
                        <button onClick={() => {
                            handleNavItemClick(index)
                        }} key={index} className={`text-white pb-2 mt-3 ml-3 border-slate-400  rounded-xl p-2 hover:scale-105 duration-150  ${item === navState ? 'bg-[#1e1629] rounded-lg' : ''}`}>{item}</button>
                    </div>
                ))}
                <div className='flex justify-end items-center ml-auto' >
                    <div className='pt-5'>
                        <ToggleSwitch onClick={handleSwitch} state={state} />
                    </div>
                </div>

            </div>


        </div >
    )
}
