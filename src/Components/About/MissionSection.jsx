import React from "react";
import MissionImage from '../../Assets/Images/Mission.svg';
const MissionSection = ()=>{
    return(
        <section className="AllSection MissionSection">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos='fade-up'>
                        <h3 className="Center SectionTitle">Our Mission</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 Center" data-aos='fade-right'>
                        <img src={MissionImage} width="80%" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 WhatSectionLeftText" data-aos='fade-left'>
                        <h3 className="p-0">At our core</h3>
                        Want to get the most out of the app? Check out the tutorials below! they’ll guide you step-by-step and help you understand all the features the app offers.
                    </div>
                    
                </div>
            </div>
        </section>
    
    );
}
export default MissionSection;