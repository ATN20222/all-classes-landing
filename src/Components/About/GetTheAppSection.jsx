import React from "react";
import AppImage from '../../Assets/Images/AllClassesImage.svg';
import GooglePlay from '../../Assets/Images/GetItOnGooglePlay.svg';
import Apple from '../../Assets/Images/Apple.svg';
const GetTheAppSection = ()=>{
    return(
        <section className="AllSection MissionSection mb-5">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12" data-aos='fade-up'>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 Center" data-aos='fade-right'>
                        <img src={AppImage} width="80%" alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 WhatSectionLeftText" data-aos='fade-left'>
                        <h3 className="p-0">Download The App</h3>
                        <span>
                            {/* all classes app is now available on google play and app store Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo maiores soluta ducimus rerum, quae laudantium dicta accusantium eaque tenetur ad quam animi quibusdam fugiat recusandae quo quod? Animi, vel odit! */}
                            Ready to start getting offers, connecting, buying, selling, and exploring endless opportunities? Download the app today from your preferred platform
                        </span>
                        <div className="d-flex" data-aos='fade-up'>
                                {/* <span className="FooterEventsTitle">Download App</span> */}
                                <div className="GetOnGoogle Center">
                                    <img src={GooglePlay} width="100%"  alt="" />
                                </div>
                                <div className="GetOnGoogle Center">
                                    <img src={Apple} width="90%" alt="" />
                                </div>
                            </div>
                    </div>

                    
                </div>
            </div>
        </section>
    );
}
export default GetTheAppSection;