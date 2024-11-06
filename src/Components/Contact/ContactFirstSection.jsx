import React from "react";
import ContactImage from '../../Assets/Images/Contact.svg'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";
const ContactFirstSection = ()=>{
    return(
        <section className="HomeFirstSection mb-5">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 HomeFirstSectionTextCol" data-aos="fade-right">
                        <h1>
                            Contact us 
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>
                        Have questions, feedback, or just want to chat? we're always here for you! Stay updated, join the conversation, and connect with us on social media.                        </span>
                        <div className="SocialContactLinks" data-aos="fade-up">
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faFacebook}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faWhatsapp}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link to='#' target="blank"><FontAwesomeIcon icon={faXTwitter}/></Link>
                        </div>
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 Center" data-aos="fade-left">
                        <img src={ContactImage} width="80%" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ContactFirstSection;