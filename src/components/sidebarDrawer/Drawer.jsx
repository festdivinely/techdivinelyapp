import React from 'react';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { PiSignIn } from "react-icons/pi";
import { IoHomeOutline } from "react-icons/io5";
import { useHomeStore } from '../../store';


function Drawer() {
    const setlogin = useHomeStore((state) => state.setLogin)
    const setsignup = useHomeStore((state) => state.setSignup)
    const setlanding = useHomeStore((state) => state.setLanding)
    return (
        <div className='block md:hidden z-20'>
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
                        <li onClick={setlanding}><a className='text-xl'><div><IoHomeOutline /> </div> Home</a></li>
                        <li onClick={setsignup}><a className='text-xl'><div><PiSignIn /></div> Signup</a></li>
                        <li onClick={setlogin}><a className='text-xl'><div><AiOutlineLogin /></div> Login</a></li>
                        <li><a className='text-xl'><div><IoMdContact /></div> Contact</a></li>
                        <li><a className='text-xl'><div><AiOutlineInfoCircle /></div> About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
