import React from "react";
import Logo from '../../Assets/Images/Logo.svg'
import LogoText from '../../Assets/Images/AllClassesText.svg'
const HomeFirstSection = ()=>{
    return(
        <section className="AllSection HomeFirstSection">
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-5 col-md-5 col-sm-5 Center LeftSideImage" data-aos="fade-right">
                        <img src={Logo} width="90%" alt="" />
                    </div>
                    <div className="col-lg-1 col-md-1 col-sm-1 Center">
                        <div className="Separator" data-aos="fade-up"></div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 RightSideText" data-aos="fade-left">
                        <img src={LogoText} width="70%" alt="" />
                        <span>All classes is designed to provide comprehensive and accessible services to individuals and groups, fostering greater efficiency, communication, and collaboration. Whether events , job opportunities , buy and sell or organizational settings, the app streamlines processes, supports real-time updates, and offers. </span>
                        {/* <span>Lorem ips um dolor sit amet, consectetur adipisicing elit. Quos saepe voluptatibus obcaecati dolor accusantium. Tempore modi hic omnis fugiat, eaque tempora laboriosam? Similique deserunt consectetur possimus, laborum tempore praesentium est!</span> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default HomeFirstSection;