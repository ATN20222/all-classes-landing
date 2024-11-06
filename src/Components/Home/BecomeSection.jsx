import React from "react";
import VendorsVector from '../../Assets/Images/VendorsVector.svg'
import CommunityVector from '../../Assets/Images/Community.svg'
import { Link } from "react-router-dom";
const BecomeSection = ()=>{
    return(
        <section className="AllSection BecomeSection" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3 className="Center SectionTitle">Integrate with us</h3>
                    </div>
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="row d-flex ">
                                <div className="col-lg-5 col-md-5 col-sm-5 Center LeftSideImage d-flex flex-column" data-aos="fade-right">
                                    <div className="BecomeVendorImage">
                                        <img src={VendorsVector} width="250px" alt="" />
                                    </div>
                                    <div className="BecomeVendorText">
                                        <h3>Become a Vendor</h3>
                                        <span>
                                        Unlock new opportunities by becoming a vendor on our platform. Whether you’re a small business or a larger brand, our app gives you direct access to a growing community of users eager to buy, sell, and connect. Gain visibility, offer exclusive deals, and expand your reach by tapping into a vibrant, engaged marketplace.
                                        </span>
                                        <div className="ReadMoreBtn mt-2">
                                            <a className="btn btn-danger ReadMoreBtn" href="mailto:info@mindholding.net">
                                                Join now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-2 Center">
                                    <div className="Separator" data-aos="fade-up"></div>
                                </div>
                                <div className="col-lg-5 col-md-5 col-sm-5 RightSideText" data-aos="fade-left">
                                    <div className="BecomeVendorImage">
                                        <img src={CommunityVector} width="250px" alt="" />
                                    </div>
                                    <div className="BecomeVendorText">
                                        <h3>Become a Community</h3>
                                        <span>
                                        Join our platform as a community and bring your members together in a space that fosters connection, collaboration, and growth. Whether you're a group, organization, or local network, We helps you share updates, promote events, offer exclusive deals, and connect with others inside your community.
                                        </span>
                                            
                                        <div className="ReadMoreBtn mt-2">
                                            <a className="btn btn-danger ReadMoreBtn" href="mailto:info@mindholding.net">
                                                Join now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default BecomeSection;