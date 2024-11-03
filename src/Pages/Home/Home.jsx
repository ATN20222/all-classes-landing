import React from "react";
import './Home.css'
import HomeFirstSection from "../../Components/Home/HomeFirstSection";
import HomeCounters from "../../Components/Home/HomeCounters";
import FeaturesSection from "../../Components/Home/FeaturesSection";
import WhatSection from "../../Components/Home/WhatSection";
import VendorsSection from "../../Components/Home/VendorsSection";
import BecomeSection from "../../Components/Home/BecomeSection";
const Home  = ()=>{
    return(
        <div className="Home">
            <HomeFirstSection/>        
            <hr className="container mt-5"/> 
            <FeaturesSection/>
            <HomeCounters/>   
            <WhatSection/>
            <VendorsSection/>
            <BecomeSection/>
        </div>
    );
}
export default Home;    