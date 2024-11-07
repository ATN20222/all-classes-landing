import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const FAQItem = ({id , title , describtion})=>{
    const [isOpen,setIsOpen] = useState(false);
    return(
        <div className="FAQItem">
            <div className="FAQItemHeader"  onClick={()=>setIsOpen(!isOpen)}>
                <h5 className="m-0">{title}</h5><span><FontAwesomeIcon icon={isOpen?faChevronDown :faChevronRight}/></span>
            </div>
            {isOpen&&
                <div className="FAQDescribtion">
                    {describtion}
                </div>
            }
        
        </div>
    );
}
export default FAQItem;