import TypesPokemons from "../usable-arrays/typesPokemons";
import { useState } from "react";
import { PokeIcons, PokeIconsBg, TabPosition, TypeLabel } from "./tagFilter.styled";
import BgFilter from "../../bgFilter.png"
import Colors from "../usable-arrays/colors";
import Capitalizer from "../capitalizer/capitalizer";

export const TabFilter=({selectedType})=>{
    const [pokeTypes]= useState(selectedType);
    const colors = Colors;
    
    return (
        <TabPosition bgfilter={BgFilter}>
            {pokeTypes?.map(item=>{ 
                return(          
                    <PokeIconsBg  bgcolor={colors[item.name]}>                            
                        <PokeIcons src={require(`../../typeIcons/${item.name}.svg`)}></PokeIcons>
                        <TypeLabel>
                            <Capitalizer str={item.name}/>
                        </TypeLabel>
                    </PokeIconsBg>
                )               
            })}
        </TabPosition>
    )
}
