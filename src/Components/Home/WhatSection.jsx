import React from "react";
import Image from '../../Assets/Images/What.svg'
import { Link } from "react-router-dom";
const WhatSection = ()=>{
    return(
        <div className="WhatSection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 Center" data-aos='fade-right'>
                        <img src={Image} width="80%" alt="" srcset="" />
                    </div>  
                    <div className="col-lg-6 col-md-6  WhatSectionLeftText" data-aos='fade-left'>
                        <h3>What is All Classes ?</h3>
                        <span>
                        All classes provides services to communities, such as buying and selling, job opportunities, and sharing events or news, play a vital role in fostering local connections and enhancing collaboration. This app offer a seamless platform for individuals to engage with one another, facilitating peer-to-peer transactions where users can buy and sell items directly, often with added benefits like discounts from partnered brands. Additionally, they enable users to post job opportunities within their community, making it easier for members to find work or hire talent locally. Community-driven features also allow members to share and promote upcoming events, keeping everyone informed about gatherings, workshops, or social meetups. Furthermore, these apps help circulate news and updates within the community, ensuring that all members stay connected and well-informed. With these integrated tools, such apps strengthen community bonds, improve communication, and create a supportive ecosystem for personal and professional growth.
                        </span>
                        <div className="ReadMoreBtn mt-2">
                            <Link className="btn btn-danger ReadMoreBtn" to="/contactus">
                                Read More
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default WhatSection;