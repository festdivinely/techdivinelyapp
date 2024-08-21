import React from 'react';
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { PiSignIn } from "react-icons/pi";
import { Link } from 'react-router-dom';
import Drawer from '../sidebarDrawer/Drawer';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-100 p-0 mt-0">
                <Drawer />
                <div className="flex-1">
                    <Link to="/home" className="btn btn-ghost text-2xl">daisyUI</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="hidden md:flex items-center space-x-2">
                            <Link to="/about" className="text-xl"><div><AiOutlineInfoCircle /></div> About</Link>
                        </li>
                        <li className="hidden md:block items-center space-x-2">
                            <Link to="/contact" className="text-xl"><div><IoMdContact /></div> Contact</Link>
                        </li>
                        <li className="hidden md:block items-center space-x-2">
                            <a className="text-xl"><div><AiOutlineLogin /></div> Login</a>
                        </li>
                        <li className="hidden md:block items-center space-x-2">
                            <a className="text-xl"><div><PiSignIn /></div> Sign Up</a>
                        </li>
                        <li>
                            <details>
                                <summary className="text-xl">Theme</summary>
                                <ul className="bg-base-100 rounded-t-none p-2 ml-3 w-28">
                                    {/* List of themes with colored balls */}
                                    <li className="flex items-center mb-2">
                                        <span>Theme 1</span>
                                    </li>
                                    <li className="flex items-center mb-2">
                                        <span>Theme 2</span>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
