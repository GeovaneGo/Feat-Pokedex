import {  DivRightBar, RightBarFooter, RightBarHeader } from "./rightBar.styled";

export const RightBar =(prop)=>{
    return (
        <DivRightBar id="pokeInfo"  display={prop}>  
            <RightBarHeader>
            </RightBarHeader>        
            <div>                
            </div>
            <RightBarFooter>
            </RightBarFooter>
        </DivRightBar>
    )
}

/*
implement function if used:
    onClick={ShowRightBar}    

    const [righBarDisplay, setDisplay]=useState("none");

    function ShowRightBar(){
        if(document.getElementById("righBarDisplay") === ""){
            setDisplay("none");
        } else {
            setDisplay("block");
        }
    }
    
    <PokeInfo display={pokeInfo}>                
    </PokeInfo> 
*/
export default RightBar;