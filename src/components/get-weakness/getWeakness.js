import { useState, useEffect } from "react";
import api from "../../api/api";
import { PokeIcons, PokeIconsBg, TypeLabel, TypesGrid } from "./getWeaknes.styles";
import Capitalizer from "../capitalizer/capitalizer";

const GetWeakness =({pokeInfo})=>{
    const [weakness, setWeakness]=useState(null);
    const pokeType = pokeInfo.pokeType;
    const iconWidth = pokeInfo.iconWidth; 
    const pokeIconHeigth = pokeInfo.pokeIconHeigth;
    const pokeIconWidth = pokeInfo.pokeIconWidth || "90px";
    const fontZise = pokeInfo.fontSize || "12px"; 
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
    
    function getItens(types){
        let localItens = [];
        let halfDamages = [];
        let noDamage = [];

        types.map((item, index)=>{
            api.get(`type/` + item.type.name).then(res=>{
                res.data.damage_relations.half_damage_from.map(type=>{  
                    halfDamages.push(type.name);
                })
                
                res.data.damage_relations.no_damage_from.map(type=>{  
                    noDamage.push(type.name);
                }) 

                res.data.damage_relations.double_damage_from.map(type=>{
                    if(!localItens.find(getTypeNames => getTypeNames.name === type.name) &&
                        item.type.name !== type.name){                        
                        localItens.push({name: type.name}) ;
                    }
                })                
            
                if((types.length - 1) === index){
                    halfDamages.map(strong=>{
                        localItens.map((weakness, index)=>{
                            if(weakness.name === strong){
                                localItens.splice(index, 1);
                            }
                        })
                    })

                    noDamage.map(stronger=>{
                        localItens.map((weakness, index)=>{
                            if(weakness.name === stronger){
                                localItens.splice(index, 1);
                            }
                        }) 
                    })
                    setWeakness(localItens);
                }              
            })
        })
    }

    useEffect(()=>{
        pokeType && getItens(pokeType);
    },[pokeType])

    return (      
        <TypesGrid>
            {weakness?.map(type=>{
                return (
                    <div key={type.name}>
                        <PokeIconsBg  iconbgheight={pokeIconHeigth} iconbgwidth={pokeIconWidth} bgcolor={typeColor[type.name]}>                            
                            <PokeIcons iconwidth={iconWidth} src={require(`../../typeIcons/${type.name}.svg`)}></PokeIcons>
                            <TypeLabel fontSize={fontZise}>
                                <Capitalizer str={type.name}/>
                            </TypeLabel>
                        </PokeIconsBg>
                    </div>
                )
            })}
        </TypesGrid>
    )
}

export default GetWeakness;