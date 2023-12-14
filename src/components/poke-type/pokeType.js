import { Tooltip } from "@mui/material";
import Capitalizer from "../capitalizer/capitalizer"
import { PokeIcons, PokeIconsBg, TypeLabel, TypesGrid } from "./pokeType.styled";
import { Colors } from "../utils/colors.js";

export const PokeType =({pokeInfo, setTtypeFilters})=>{
    const pokeType = pokeInfo.pokeType;
    const iconWidth = pokeInfo.iconWidth;
    const pokeIconHeigth = pokeInfo.pokeIconHeigth;
    const pokeIconWidth = pokeInfo.pokeIconWidth || "90px";
    const fontZise = pokeInfo.fontSize || "12px";
    const typeColor = Colors;

    return (      
        <TypesGrid>
            {pokeType?.map(pokeMon=>{
                return (
                    <div key={pokeMon.type.name}>
                        <Tooltip title={`Filter by ${pokeMon.type.name}`}>
                            <PokeIconsBg onClick={()=> setTtypeFilters([...pokeMon.type.name])} iconbgheight={pokeIconHeigth} iconbgwidth={pokeIconWidth} bgcolor={typeColor[pokeMon.type.name]}>                            
                                <PokeIcons iconwidth={iconWidth} src={require(`../../typeIcons/${pokeMon.type.name}.svg`)}></PokeIcons>
                                <TypeLabel fontSize={fontZise}>
                                    <Capitalizer str={pokeMon.type.name}/>
                                </TypeLabel>
                            </PokeIconsBg>
                        </Tooltip>
                    </div>
                )
            })}
        </TypesGrid>
    )
}

export default PokeType;