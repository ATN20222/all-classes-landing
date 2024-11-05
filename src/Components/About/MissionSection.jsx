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
                        <h3 className="p-0">We created All Classes</h3>
                        to have an easy communication between your community members. Our mission is to
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero quia aperiam iste exercitationem accusantium sint fuga delectus nihil sequi, doloremque nulla excepturi similique. Asperiores, consectetur? Ex earum sed repellat deserunt.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime harum incidunt ipsum veniam cumque commodi dolorem, illum odio? Debitis, possimus earum assumenda animi enim vero ducimus illo quidem in incidunt.
                    </div>
                    
                </div>
            </div>
        </section>
    
    );
}
export default MissionSection;