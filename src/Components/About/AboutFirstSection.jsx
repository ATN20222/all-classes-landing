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
                        Our app helps you communicate with people like you, share activities ,get offers and jobs 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo odit aut voluptatum? Vitae similique, est molestias nemo ipsa ipsum quia nesciunt obcaecati excepturi eveniet quo, totam laudantium, voluptates quisquam.   
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