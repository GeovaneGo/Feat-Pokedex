import { useEffect, useState } from "react";
import api from "../api/api";
import Capitalizer from "./capitalizer";
import {  DefaultImg, CardContainer, PokeIcons, PokeIconsBg, TypesGrid, PoketypesContainer, PokeNumber, CardTypeBg, PokeName } from "./cardPokemon.styles";
import LeftZero from "./leftZero";

const CardPokemon =({name})=>{
    const [pokeImg, setPokeImage]=useState("");
    const [pokeType, setPokeType]=useState([]);    
    const [pokeNumber, setPokeNumer]=useState("");
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

    useEffect(()=>{
        api.get(`pokemon/${name}`).then(res=>{
            console.log(res)
            setPokeImage(res.data.sprites.other.dream_world.front_default);
            setPokeType(res.data.types);
            setPokeNumer(res.data.id);
          })          
      },[])

    return( 
        <CardContainer bgColor={typeColor[pokeType[0]?.type.name]}>  
            <PokeName>
                <Capitalizer str={name}/>
            </PokeName>  
            <PoketypesContainer>
                <DefaultImg src={pokeImg}></DefaultImg>
            </PoketypesContainer>
            <TypesGrid>
                {pokeType?.map(item=>{
                    return (
                        <div key={item.type}>
                            <PokeIconsBg  bgColor={typeColor[item.type.name]}>
                                <PokeIcons  src={require(`../typeIcons/${item.type.name}.svg`)}></PokeIcons>
                                <Capitalizer str={item.type.name}/>
                            </PokeIconsBg>
                        </div>
                    )
                })}
            </TypesGrid>
            <CardTypeBg>     
                <PokeNumber>
                    Nº <LeftZero num={pokeNumber}/>
                </PokeNumber>
            </CardTypeBg>   
        </CardContainer>
    );
}

export default CardPokemon;