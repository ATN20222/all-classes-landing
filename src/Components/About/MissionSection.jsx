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
                        We’re on a mission to make life easier, more fun, and super connected for everyone, our app is all about bringing people together—whether you're buying, selling, finding a job, or sharing cool events. We believe in creating vibrant communities where you can discover exciting deals, connect with local talent, and stay in the loop with what’s happening around you. We’re here to make your day-to-day a little more exciting and a lot more engaging. Let’s create a space where opportunities, good vibes, and fun come together to help you grow, connect, and thrive.

                    </div>
                    
                </div>
            </div>
        </section>
    
    );
}
export default MissionSection;