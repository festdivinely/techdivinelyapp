import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { PiSignIn } from "react-icons/pi";


function Drawer() {
    return (
        <div className='block md:hidden'>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */} 
                    <label htmlFor="my-drawer" className="drawer-button">
                        <IoMdMenu className="text-3xl" />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a className='text-xl'><div><IoMdMenu /> </div> Menu</a></li>
                        <li><a className='text-xl'><div><PiSignIn /></div> Signup</a></li>
                        <li><a className='text-xl'><div><AiOutlineLogin /></div> Login</a></li>
                        <li><a className='text-xl'><div><IoMdContact /></div> Contact</a></li>
                        <li><a className='text-xl'><div><AiOutlineInfoCircle /></div> About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
