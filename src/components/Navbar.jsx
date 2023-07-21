import React from 'react'
import { useState } from 'react'
import './Navbar.css'
import nikeLogo from '../assets/nike-logo.png';
import LikedSVG from './LikedSVG';
import CartSVG from './CartSVG';
import SearchSVG from './SearchSVG';

const Navbar = ({searchQuery, onSearch}) => {
    const [isActiveHamburger, setIsActiveHamburger] = useState(false);
    const handleClick = () => {
        setIsActiveHamburger(!isActiveHamburger);
    }
  return (
    <nav className={isActiveHamburger ? 'hide' : ''}>
        <div className='logo'>
            <img src={nikeLogo} alt="NIKE logo" />
        </div>
        <div className={`menu ${isActiveHamburger ? 'active-menu' : ''}`}>
            <ul>
                <li><div><a href="/">All</a></div></li>
                <li><div><a href="/men's clothing">men's clothing</a></div></li>
                <li><div><a href="/women's clothing">women's clothing</a></div></li>
                <li><div><a href="/electronics">electronics</a></div></li>
                <li><div><a href="/jewelery">jewelery</a></div></li>
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