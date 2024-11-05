import React, { useEffect, useState } from "react";
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLocationDot, faPhone, faTimes } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../Assets/Images/AllClassesLogo.svg';
import { Link, NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Nav = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
            setIsMenuOpen(false);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section>
            {/* <div className="TopNav">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 TopNavCol">
                           <div className="NavLocation">
                                <span>Address</span>
                                <div className="AddressNav">
                                    <FontAwesomeIcon icon={faLocationDot}/>  8 Mohammed Tawfik Diab, Nasr City, Cairo, Egypt.
                                </div>
                           </div>
                           <div className="NavCallUs">
                                <span>Call us</span>
                                <div className="AddressNav">
                                    <FontAwesomeIcon icon={faPhone}/> <span className="PhoneNumber">(+02)22746241</span> 
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={`MainNav ${isSticky ? 'sticky' : ''}`}data-aos="fade-down" >
                <div className="container">
                    <div className="row NavRow">
                        <div className="col-lg-2 col-md-2 col-2">
                            <div className="LogoContainer">
                                <Link to='/home' className="Nav-Link">
                                    <img src={Logo} width="120px" alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 LinksNav">
                            <ul className="list-list-unstyled">
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/home"
                                        onClick={scrollToTop} 
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    {/* <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/about"
                                        onClick={scrollToTop} 
                                    >
                                        Features
                                    </NavLink> */}
                                    <NavHashLink
                                        smooth
                                        // className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        className="Nav-Link"
                                        to="/home#features"
                                        // onClick={scrollToTop} 
                                    >
                                        Features
                                    </NavHashLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/howitworks"
                                        onClick={scrollToTop} 
                                    >
                                        How it Works
                                    </NavLink>
                                </li>
                                {/* <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/solutions"
                                        onClick={scrollToTop} 
                                    >
                                        Vendors
                                    </NavLink>
                                </li> */}
                                <li className="list-inline-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                                        to="/about"
                                        onClick={scrollToTop} 
                                    >
                                        About
                                    </NavLink>
                                </li>
                                <li className="list-inline-item">
                                    <NavLink className="btn btn-danger NavContactBtn" to="/contactus" onClick={scrollToTop}>
                                        Contact us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="MenuButtonCol col-md-1 col-1 d-md-none Center">
                            <button className="MenuButton" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className={`OverlayMenu ${isMenuOpen ? 'open' : ''}`}>
                <button className="CloseButton" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <ul className="OverlayLinks">
                    <li>
                        <NavLink to="/home" 
                            className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                        
                        onClick={() => { scrollToTop(); toggleMenu(); }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"
                            className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                        
                        onClick={() => { scrollToTop(); toggleMenu(); }}>About Us</NavLink>
                    </li>
                    <li>
                        <NavHashLink
                            smooth
                            // className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                            to="/home#features"
                            // onClick={scrollToTop} 
                        >
                            Features
                        </NavHashLink>
                        {/* <NavLink to="/f" onClick={() => { scrollToTop(); toggleMenu(); }}>Services</NavLink> */}
                    </li>
                    <li>
                        <NavLink to="/howitworks" onClick={() => { scrollToTop(); toggleMenu(); }}>How It Works</NavLink>
                    </li>
                    
                    <li>
                        <NavLink 
                            className={({ isActive }) => isActive ? "Nav-Link ActiveLink" : "Nav-Link"}
                        to="/contactus" onClick={() => { scrollToTop(); toggleMenu(); }}>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Nav;
