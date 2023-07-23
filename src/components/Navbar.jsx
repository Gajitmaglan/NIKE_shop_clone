import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import nikeLogo from '../assets/nike-logo.png';
import LikedSVG from './LikedSVG';
import CartSVG from './CartSVG';
import SearchSVG from './SearchSVG';
import { Link } from 'react-router-dom';

const Navbar = ({searchQuery, onSearch}) => {
    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const handleClick = () => {
        setIsActiveHamburger(!isActiveHamburger);
    }

    const closeActiveMenu = () => {
        if (isActiveHamburger)
            setIsActiveHamburger(false);
    }

  return (
    <nav className={isActiveHamburger ? 'hide' : ''}>
        <div className='logo'>
            <img src={nikeLogo} alt="NIKE logo" />
        </div>
        <div className={`menu ${isActiveHamburger ? 'active-menu' : ''}`}>
            <ul>
                <li><div><Link onClick={closeActiveMenu} to="/">All</Link></div></li>
                <li><div><Link onClick={closeActiveMenu} to="/mens-clothing">Men's Clothing</Link></div></li>
                <li><div><Link onClick={closeActiveMenu} to="/womens-clothing">Women's Clothing</Link></div></li>
                <li><div><Link onClick={closeActiveMenu} to="/electronics">Electronics</Link></div></li>
                <li><div><Link onClick={closeActiveMenu} to="/jewelery">Jewelery</Link></div></li>
            </ul>
        </div>
        <div className='functional'>
            <div className="search">
                <SearchSVG />
                <input
                    type="text"
                    placeholder='Search...'
                    value={searchQuery}
                    onChange={(e) => {
                        onSearch(e.target.value)
                    }}
                />
            </div>
            <div className="liked">
                {<LikedSVG />}
            </div>
            <div className="cart">
                <CartSVG />
            </div>
            <div className="hamburger-menu" onClick={handleClick}>
                <div className={`hamburger-lines ${isActiveHamburger ? 'active' : ''}`}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
