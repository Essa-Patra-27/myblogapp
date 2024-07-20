import Link from 'next/link'
import React from 'react'

import { FaUser } from "react-icons/fa";
import { CgUserAdd } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import logo from "@/app/assets/logo1.png";
import Image from 'next/image';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link href="/pages/profile" className='link'>
          <FaUser  className="icon" />
        </Link>
        <Link href="/pages/addblog">
          <CgUserAdd className="icon" />
        </Link>
        <Link href="/pages/search">
          < BiSearchAlt className="icon" />
        </Link>
        </div>
      <div className='navbar-middle'>
        <Link href='/'>
          <Image
            className='logo'
            src={logo}
            alt="Picture of the company" />
        </Link>
      </div>
      <div className='navbar-right'>
        <Link href="/">Home</Link>
        <Link href="/pages/about">
          About
        </Link>
        <Link href="/pages/contact">Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar