import React from "react";
import HowItWorksFirstSection from "../../Components/HowItWorks/HowItWorksFirstSection";
import TutorialsSection from "../../Components/HowItWorks/TutorialsSection";
import './HowItWorks.css'
import FAQ from "../../Components/HowItWorks/FAQ";
const HowItWorks = ()=>{
    return(
        <div className="HowItWorks">
            <HowItWorksFirstSection/>
            <TutorialsSection/>
            <FAQ/>
        </div>
    );
}
export default HowItWorks;