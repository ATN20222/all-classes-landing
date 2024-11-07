import React from "react";
import Image from '../../Assets/Images/Works.svg'
const HowItWorksFirstSection = ()=>{
    return(
        <section className="HomeFirstSection mb-5">
            <div className="HomeFirstSectionContainer container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 HomeFirstSectionTextCol" data-aos='fade-right'>
                        <h1>
                            How It Works...
                            <br />
                            {/* {t('easy_life')} */}
                        </h1>
                        <span>
                        Want to get the most out of the app? Check out the tutorials below! they’ll guide you step-by-step and help you understand all the features the app offers.                        </span>
                        
                        {/* <div className="GoldBtnContainer">
                            <NavLink className="btn btn-danger GoldBtn" to="/Login">
                            {t('get_started')}
                            </NavLink>
                        </div> */}
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 Center" data-aos='fade-left'>
                        <img src={Image} width="80%" alt="" />
                    </div>
                    
                </div>
            </div>
        </section>
    );
}
export default HowItWorksFirstSection;