import { useState } from "react";
import { BtnBackToTop, DefaultIcon, DefaultLabel } from "./btnBackTop.styled";
import pokeball from "../../pokeball.png";

export const BackToTop =()=> {
    const [displayInfo, setdisplayInfo]=useState("none");
    
    function FnBackToTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    window.onscroll = function(){
        if (document.documentElement.scrollTop > 20) {
            setdisplayInfo("block");
        } else {            
            setdisplayInfo("none");
        }
    }

    return (
        <BtnBackToTop display={displayInfo} onClick={FnBackToTop}>
            <DefaultIcon src={pokeball}></DefaultIcon>
            <DefaultLabel>                
                Go Up!
            </DefaultLabel>                
        </BtnBackToTop>
    )
};

export default BackToTop;