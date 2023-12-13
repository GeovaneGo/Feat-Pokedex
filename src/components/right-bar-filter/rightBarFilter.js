import { useState } from "state-pool";
import {  DivRightBar, RightBarFooter, RightBarHeader, MenuBar } from "./rightBarFilter.styled";
import { Tooltip } from "@mui/material";

export const RightBarFilter =({prop})=>{       
    const [righBarDisplay, setDisplay]=useState(prop);
    const [menuTooltip, setTooltip]=useState("Open filters");

    function ShowRightBar(){
        if(righBarDisplay === "-350px"){
            setDisplay("0px");
            setTooltip("Close Filters");
        } else {
            setDisplay("-350px");
            setTooltip("Open filters");
        }
    }

    return (      
        <DivRightBar id="righBarDisplay"  right={righBarDisplay}>
            <Tooltip title={menuTooltip} placement="left" arrow>
                <MenuBar onClick={ShowRightBar} bgimage={"/filter.png"}></MenuBar>
            </Tooltip>
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