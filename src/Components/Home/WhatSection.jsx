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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quidem? Deserunt accusantium labore odio quis commodi animi, iure atque culpa assumenda, soluta autem! Harum ullam voluptatem at neque, assumenda eius.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit veniam aspernatur placeat unde quaerat fugit assumenda nihil similique quasi, culpa perspiciatis, quis veritatis ad nulla. Aperiam ab hic soluta?
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptas aliquam harum? Obcaecati maiores quos sunt vitae ipsam recusandae, porro, vel quis perferendis voluptatum dolorem ducimus? Recusandae quae inventore vero!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maiores dignissimos? Consequuntur soluta at eaque recusandae aliquam voluptates laborum repellendus voluptatibus! Sit deleniti labore ex expedita velit recusandae officia! Quaerat?
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quis, cumque hic ab obcaecati officiis est quo voluptatibus tenetur ad reiciendis vero officia molestias laudantium, asperiores nulla dicta dolorem alias.
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