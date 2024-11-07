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
                        this app makes connecting with your community easy and fun, whether you're in a club, alumni group, or local organization, it brings everything together—events, job opportunities, buy-and-sell, and more—all in one place with real-time updates to keep you engaged.                        
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