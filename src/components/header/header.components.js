import React from 'react'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from  '../../assets/logo.svg'

const Header =()=>(
    <div className='header'>
     <Link className='logo-container' to="/">
        <Logo className='logo'></Logo>
     </Link>
     <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/shop'>CONTACT</Link>
        <Link className='option' to='/signin'>SignIn</Link>
     </div>
    </div>
)
export default Header;