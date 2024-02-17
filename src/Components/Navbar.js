import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import Logo from "./Assets/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5"



const Navbar = () => {
    const [Showmobileview, setMobileView] = useState(false)
    return (
        <div className="main">

            <div className='logo'>
                <Link to="/">
                <img src={Logo} alt="My_logo" className='logoimg' />
                </Link>
            </div>

            <div className={Showmobileview ?  "mobile" : "navlinks"}>
                <ul onClick={()=>setMobileView(false)}>

                <Link to="/"><li>ABOUT</li> </Link>
                <Link to="/skill"><li>SKILLS</li> </Link>
                 <Link to ="/contact"><li>CONTACT</li> </Link>
                <Link to="/projects"><li>PROJECTS</li> </Link>

                </ul>
            </div>

            <div className='hamburger_icons'>
                {Showmobileview ? <IoCloseSharp onClick={()=>setMobileView(false)}/> :<GiHamburgerMenu  onClick={()=>setMobileView(true)}/>

                }

            </div>

        </div>
    )
}

export default Navbar