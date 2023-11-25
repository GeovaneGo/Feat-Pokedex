import Capitalizer from "../capitalizer/capitalizer"
import { PokeIcons, PokeIconsBg, TypeLabel, TypesGrid } from "./pokeType.styled";

export const PokeType =({pokeInfo})=>{
    const pokeType = pokeInfo.pokeType;
    const iconWidth = pokeInfo.iconWidth;
    const pokeIconHeigth = pokeInfo.pokeIconHeigth;
    const pokeIconWidth = pokeInfo.pokeIconWidth || "110px";
    const fontZise = pokeInfo.fontSize || "15px"; 
    const typeColor = {
        normal: "gray",
        fire:"#f9a555d9",
        water:"#539ddfd9",
        grass:"#63bc5dd9",
        flying:"#a2bcead9",
        fighting:"#aa75ead9",
        poison:"#b667cdd9",
        electric:"#f1d85ad9",
        ground:"#d87c52d9",
        rock:"#c9bb8dd9",
        psychic:"#a0a29fd9",
        ice:"#79d0c1d9",
        bug:"#93bb3ad9",
        ghost:"#606fbad9",
        steel:"#5995a2d9",
        dragon:"#176cc5d9",
        dark:"#595761d9",
        fairy: "#ed93e4d9"
    };
    return (
        <TypesGrid>
            {pokeType?.map(pokeMon=>{
                return (
                    <div key={pokeMon.type.name}>
                        <PokeIconsBg  iconbgheight={pokeIconHeigth} iconbgwidth={pokeIconWidth} bgcolor={typeColor[pokeMon.type.name]}>                            
                            <PokeIcons iconwidth={iconWidth} src={require(`../../typeIcons/${pokeMon.type.name}.svg`)}></PokeIcons>
                            <TypeLabel fontSize={fontZise}>
                                <Capitalizer str={pokeMon.type.name}/>
                            </TypeLabel>
                        </PokeIconsBg>
                    </div>
                )
            })}
        </TypesGrid>
    )
}

export default PokeType;