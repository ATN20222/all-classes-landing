import React from "react";
import './About.css'
import AboutFirstSection from "../../Components/About/AboutFirstSection";
import MissionSection from "../../Components/About/MissionSection";
import FeaturesSection from "../../Components/Home/FeaturesSection";
import GetTheAppSection from "../../Components/About/GetTheAppSection";
const About = ()=>{
    return(
        <section className="About">
            <AboutFirstSection/>
            <hr className="container mb-5"/> 
            <MissionSection/>
            <FeaturesSection/>
            <GetTheAppSection/>
        </section>
    );
}
export default About;