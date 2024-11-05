import React from "react";
import HowItWorksFirstSection from "../../Components/HowItWorks/HowItWorksFirstSection";
import TutorialsSection from "../../Components/HowItWorks/TutorialsSection";
import './HowItWorks.css'
const HowItWorks = ()=>{
    return(
        <div className="HowItWorks">
            <HowItWorksFirstSection/>
            <TutorialsSection/>
        </div>
    );
}
export default HowItWorks;