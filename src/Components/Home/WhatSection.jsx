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
                        It’s a close community app that will be fully branded with your name, offering job opportunities, buy-and-sell, and more. It streamlines communication, fosters collaboration, and keeps members connected with real-time updates on a trusted, community-driven platform.
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