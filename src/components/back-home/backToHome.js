import { useNavigate } from "react-router-dom";
import pokedexLogo from "../../logoPokedex.png"
import { PokeLogo } from "./backToHome.styled";
import { Tooltip } from "@mui/material";

export const BackToHome =(source)=>{
    const origin = source; 
    const navigation = useNavigate(); 

    function ResetSearch(){
        document.getElementById("searchField").value = "";
        document.getElementById("searchBtn").click();
    }
    
    return (
        <div style={{display:"flex"}}>
            {origin.source === "main" ?
                <PokeLogo src={pokedexLogo} onClick={ResetSearch}></PokeLogo>
                :
                <Tooltip title={"Back to Home"} arrow>
                    <PokeLogo src={pokedexLogo} onClick={()=> navigation("/")}></PokeLogo>
                </Tooltip>
            }
        </div>

    )
}

export default BackToHome;