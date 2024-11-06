import React from "react";
import AboutImage from '../../Assets/Images/About.svg'
const AboutFirstSection = ()=>{
    return(
        <section className="HomeFirstSection mb-5">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 HomeFirstSectionTextCol" data-aos='fade-right'>
                        <h1>
                            Discover All Classes!
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>
                        Community apps that offer buying, selling, job opportunities, and event sharing help connect people and foster collaboration. They enable peer-to-peer transactions, local job postings, and promote events, keeping everyone informed. These features strengthen community bonds, enhance communication, and support personal and professional growth within the community.
                        
                        </span>
                        
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 Center" data-aos='fade-left'>
                        <img src={AboutImage} width="80%" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default AboutFirstSection;