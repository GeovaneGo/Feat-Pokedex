import { useEffect, useState } from "react";
import api from "../../api/api";
import Capitalizer from "../capitalizer/capitalizer";
import {  DefaultImg, CardContainer, PoketypesContainer, PokeNumber, CardTypeBg, PokeName } from "./cardPokemon.styles";
import LeftZero from "../left-zero/leftZero";
import PokeType from "../poke-type/pokeType";
import { Tooltip } from "@mui/material";

const CardPokemon =({name, pokedata, setTtypeFilters})=>{
    const [pokeImg, setPokeImage]=useState('');
    const [pokeType, setPokeType]=useState([]);    
    const [pokeNumber, setPokeNumber]=useState('');
    const [pokeLoad, setPokeload]=useState(pokedata);
    const pokeInfo ={
        pokeType: pokeType,
        iconWidth: '15px',
        pokeIconHeigth: '24px'
    }
    const getPokemons =()=>{        
        api.get(`pokemon/${name}`).then(res=>{
            setPokeImage(res.data.sprites.other['official-artwork']['front_default'] || res.data.sprites.other.dream_world.front_default);
            setPokeType(res.data.types);
            setPokeNumber(res.data.id);
            setPokeload(true);
        })
    }

    useEffect(()=>{
        getPokemons();     
    },[])

    return(
        <Tooltip title={ `Inspec ${name}`} arrow placement="top">
            <CardContainer bgimage={"/cardbg.png"}>
                <PokeName>
                    <Capitalizer str={name}/>
                </PokeName>  
                    {!pokeLoad ?
                        <PoketypesContainer  pokename={name} bgimage={"pokeball.png"} rotate={"360deg"} href={"/pokemon/"+ name}>
                        </PoketypesContainer>
                        :
                        <PoketypesContainer  bgimage={"pokeball.png"} href={"/pokemon/"+ name}>
                            <DefaultImg src={pokeImg}></DefaultImg>
                        </PoketypesContainer>
                    }
                    <PokeType setTtypeFilters={setTtypeFilters} pokeInfo={pokeInfo}/>
                <CardTypeBg>     
                    <PokeNumber>
                        #<LeftZero num={pokeNumber}/>
                    </PokeNumber>
                </CardTypeBg>   
            </CardContainer>
        </Tooltip> 
        
    );
}

export default CardPokemon;