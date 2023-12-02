import { Tooltip } from "@mui/material";
import Capitalizer from "../capitalizer/capitalizer"
import { PokeIcons, PokeIconsBg, TypeLabel, TypesGrid } from "./pokeType.styled";
import { Colors } from "../usable-arrays/colors.js";
import { useState } from "react";

export const PokeType =({pokeInfo})=>{
    const [typeFilter, setTypeFilter]=useState([]);
    const pokeType = pokeInfo.pokeType;
    const iconWidth = pokeInfo.iconWidth;
    const pokeIconHeigth = pokeInfo.pokeIconHeigth;
    const pokeIconWidth = pokeInfo.pokeIconWidth || "90px";
    const fontZise = pokeInfo.fontSize || "12px";
    const typeColor = Colors;

    function FilterByType(){
        console.log(value)
    }

    return (      
        <TypesGrid>
            {pokeType?.map(pokeMon=>{
                return (
                    <div key={pokeMon.type.name}>
                        <Tooltip title={`Filter by ${pokeMon.type.name}`}>
                            <PokeIconsBg   onClick={FilterByType} iconbgheight={pokeIconHeigth} iconbgwidth={pokeIconWidth} bgcolor={typeColor[pokeMon.type.name]}>                            
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