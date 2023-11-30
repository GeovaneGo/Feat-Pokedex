import { useState } from "state-pool";
import BgFilter from "../../filter.png"
import {  DivRightBar, RightBarFooter, RightBarHeader, MenuBar } from "./rightBarFilter.styled";

export const RightBarFilter =({prop})=>{       
    const [righBarDisplay, setDisplay]=useState(prop);

    function ShowRightBar(){
        if(righBarDisplay === "-410px"){
            setDisplay("0px");
        } else {
            setDisplay("-410px");
        }
    }

    return (      
             <DivRightBar id="righBarDisplay"  right={righBarDisplay}>
                <MenuBar onClick={ShowRightBar} bgimage={BgFilter}></MenuBar>  
                <RightBarHeader>
                </RightBarHeader>        
                <div>                
                </div>
                <RightBarFooter>
                </RightBarFooter>
            </DivRightBar>

    )
}

export default RightBarFilter;