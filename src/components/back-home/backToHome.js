import { useNavigate } from "react-router-dom";
import pokedexLogo from "../../logoPokedex.png"
import { PokeLogo } from "./backToHome.styled";
import { Tooltip } from "@mui/material";
import { useState, useEffect } from "react";

export const BackToHome =()=>{   
    const navigation = useNavigate(); 

    return ( 
        <Tooltip title={"Back to Home"} arrow>
            <PokeLogo src={pokedexLogo} onClick={()=> navigation("/")}></PokeLogo>
        </Tooltip>
    )
}

export default BackToHome;