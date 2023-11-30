import { useNavigate } from "react-router-dom";
import pokedexLogo from "../../logoPokedex.png"
import { PokeLogo } from "./backToHome.styled";

export const BackToHome =()=>{
    
    const navigation = useNavigate();  
    return (
        <PokeLogo src={pokedexLogo} onClick={()=> navigation("/")}></PokeLogo>
    )
}

export default BackToHome;