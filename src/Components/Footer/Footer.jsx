import React from "react";
import './Footer.css'
// import Logo from '../../Assets/Images/Logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Logo from '../../Assets/Images/AllClassesLogo.svg'
import GooglePlay from '../../Assets/Images/GetItOnGooglePlay.svg'
import Apple from '../../Assets/Images/Apple.svg'
import { Link } from "react-router-dom";
const Footer = ()=>{
    return( 
        <section className="FooterSection">
                <div className="">
                <footer>
                    <div className="container">
                    <div className="row FooterRow">
                            <div className="col-lg-3 FooterCol">
                                <div className="Footerlogo">
                                    {/* <img src={Logo} width="130px" alt="" /> */}
                                    <div className="LogoContainer">
                                        <div className="LogoNavContainer">
                                            {/* <FontAwesomeIcon icon={faHandshake} />  */}
                                            <img src={Logo} width="60%" alt="" srcset="" />
                                        </div>
                                    </div>
                                </div>
                                <span className="FooterLogoText">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos modi ipsam vitae facere libero porro dolorum a doloremque molestias quis quisquam ab nobis officiis corporis voluptatum repudiandae quod, commodi sequi.
                                </span>
                            </div>

                            <div className="col-lg-4 FooterCol">
                                <span className="FooterContactTitle">Contact info</span>
                                <br />
                                <div className="FooterContactItem">
                                    <b>Adress: </b><span>8 Mohammed tawfik diab Cairo , Egypt.</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Phone: </b><span>(+202) 22746241</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Dubai WhatsApp: </b><span>(+971) 503365403</span>
                                </div>
                                <div className="FooterContactItem">
                                    <b>Email: </b><span>info@all-classes.com</span>
                                </div>

                             
                            </div>
                            <div className="col-lg-3 FooterCol ">
                                {/* <span className="FooterEventsTitle">Download App</span> */}
                                <div className="GetOnGoogle">
                                    <img src={GooglePlay} width="230px" alt="" />
                                </div>
                                <div className="GetOnGoogle">
                                    <img src={Apple} width="200px" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                       
                </footer>
                    <div className="row PrivacyRow">
                    <div className="col-lg-9 PrivacyCol">©MIND for information technology & media. All Rights Reserved.</div>
                    <div className="col-lg-3 PrivacyCol">
                            <div className="FooterSocial">
                                <Link className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                                </Link>
                                <Link className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faXTwitter} />
                                </Link>
                                <Link className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                                <Link className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faTiktok} />
                                </Link>
                                <Link className="FooterIcon" href="">
                                <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
        </section>
    );
}
export default Footer;