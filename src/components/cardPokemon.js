import { useEffect, useState } from "react";
import api from "../api/api";
import Capitalizer from "./capitalizer";
import {  DefaultImg, CardContainer, PokeIcons, PokeIconsBg, TypesGrid, PoketypesContainer, PokeNumber, CardTypeBg, PokeName } from "./cardPokemon.styles";
import LeftZero from "./leftZero";
import pokeballBg from "../pokeball.png";
import PokeType from "./pokeType";

const CardPokemon =({name, sprites})=>{
    const [pokeImg, setPokeImage]=useState("");
    const [pokeType, setPokeType]=useState([]);    
    const [pokeNumber, setPokeNumber]=useState("");
    const pokeInfo ={
        pokeType: pokeType,
        iconWidth: '15px',
        pokeIconHeigth: '24px'
    }

    useEffect(()=>{
        api.get(`pokemon/${name}`).then(res=>{
            console.log(res)
            setPokeImage(res.data.sprites.other.dream_world.front_default);
            setPokeType(res.data.types);
            setPokeNumber(res.data.id);
          })          
    },[])

    return( 
        <CardContainer> 
            <PokeName>
                <Capitalizer str={name}/>
            </PokeName>  
            <PoketypesContainer  bgimage={pokeballBg} href={"/pokemon/"+ name}>
                <DefaultImg src={pokeImg}></DefaultImg>
            </PoketypesContainer>
            <PokeType pokeInfo={pokeInfo}/>
            <CardTypeBg>     
                <PokeNumber>
                    #<LeftZero num={pokeNumber}/>
                </PokeNumber>
            </CardTypeBg>   
        </CardContainer>
    );
}

export default CardPokemon;