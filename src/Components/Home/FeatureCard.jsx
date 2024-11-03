import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const FeatureCard = ({id ,icon , title ,description})=>{
    return(
        <div className="FeatureCard" data-aos={`${(id===2)||(id===5)?'flip-left':'fade-up'}`}>
            <div className="FeatureCardLeftSide">
                <h3><FontAwesomeIcon icon={icon}/> {title} </h3>
                <span>{description}</span>
            </div>
        </div>
    );
}
export default FeatureCard;