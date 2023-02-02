import React, { useState } from 'react'

const Navbar = () => {
    const [showmenu, setShowmenu] = useState(false)

    return (
        <div className="nav_wrp ">
            <div className="container">

                <div className="nav_bar">
                    <div className='nav_bar_left'>
                        <div className="logo">
                            <a href="/">
                                <img
                                    loading="lazy"
                                    src="/images/logo.svg"
                                    className="block"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <ul id="myTopnav">
                            <li>
                                <a href="./">Find Workers</a>
                            </li>
                            <li>
                                <a href="./">Find Jobs</a>
                            </li>
                            <li>
                                <a href="./">About Us</a>
                            </li>
                            <li>
                                <a href="./">Resources</a>
                            </li>
                            <li>
                                <a href="./">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className='nav_bar_right'>
                        <ul>
                            <li> <a> login </a> </li>
                            <li> <button>
                                open account
                            </button> </li>
                        </ul>

                        <div className='menu_icon' onClick={() => setShowmenu(!showmenu)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div className={`mobile_menu ${showmenu ? 'active' : ''}`}>

                        <span className='close_menu' onClick={() => setShowmenu(!showmenu)}>  X </span>
                        <ul>
                            <li>
                                <a href="./">Find Workers</a>
                            </li>
                            <li>
                                <a href="./">Find Jobs</a>
                            </li>
                            <li>
                                <a href="./">About Us</a>
                            </li>
                            <li>
                                <a href="./">Resources</a>
                            </li>
                            <li>
                                <a href="./">Contact</a>
                            </li>
                            <li>
                                <a> login </a>
                            </li>
                            <li>
                                <a>
                                    open account
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar