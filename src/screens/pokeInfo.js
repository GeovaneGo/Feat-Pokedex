import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../api/api';
import { 
    DefaultImg, 
    MainHeader, 
    Mainfooter, 
    PokeInfoContainer, 
    ResponsivDiv, 
    Root, 
    PokeContainer, 
    PokeLogo, 
    PokeInfo, 
    PokeStatusContainer,
    DefaultLabel, 
    StatusLabels, 
    StatusBar, 
    StatusProgressBar,
    StatusName,
    } from "./pokeInfo.styled";
import pokedexLogo from "../logoPokedex.png"
import pokeballBg from "../pokeball.png"
import pokeBanner from "../menu.png"
import Capitalizer from "../components/capitalizer";
import LeftZero from "../components/leftZero";
import PokeType from "../components/pokeType";

export const PokeInfoPage =()=>{
    let { pokeId } = useParams(); 
    const navigation = useNavigate();
    const [pokeImage, setPokemonImg]=useState('');
    const [pokeName, setPokeName]=useState('');
    const [pokeNumber, setPokeNumber]=useState('');
    const [pokeType, setPokeType]=useState([]);
    const [pokeStats, setPokeStats]=useState([]);
    const pokeInfo ={
        pokeType: pokeType,
        iconWidth: '30px',
        pokeIconHeigth: '48px',
        pokeIconWidth: "150px"
    }

    const getPokemon =()=>{
      api.get('pokemon/' + pokeId).then(res=>{
        setPokemonImg(res.data.sprites.other.dream_world.front_default);
        setPokeName(res.data.name);
        setPokeNumber(res.data.id);
        setPokeType(res.data.types)
        setPokeStats(res.data.stats);
        console.log(res.data);
      })
    }

    useEffect(()=>{
        if(!pokeImage){
            getPokemon();
        }
    },[])
    return (
        <Root>           
            <MainHeader>
                <PokeLogo src={pokedexLogo} onClick={()=> navigation("/")}></PokeLogo>                
            </MainHeader> 
            <PokeInfo bgimage={pokeBanner}>            
                <DefaultLabel textcolor={'#529bad'}>
                    #<LeftZero num={pokeNumber}/> 
                </DefaultLabel>
                <DefaultLabel  textmargin={"0 0 0 20px"}>
                  - <Capitalizer str={pokeName}/>
                </DefaultLabel>    
            </PokeInfo>
            <PokeContainer>
                <ResponsivDiv>
                    <PokeInfoContainer bgimage={pokeballBg}>
                        <DefaultImg src={pokeImage}>
                        </DefaultImg>
                    </PokeInfoContainer>
                    <PokeType pokeInfo={pokeInfo}/>
                </ResponsivDiv>
                <ResponsivDiv>
                    <PokeStatusContainer>
                        <StatusLabels fontsize={"50px"}>
                            Status
                        </StatusLabels>
                        {pokeStats?.map(stats=>{
                            return (     
                                <div>
                                    <StatusName>
                                        <Capitalizer str={stats.stat.name}/>
                                    </StatusName>                     
                                    <StatusBar>
                                        <StatusProgressBar percentual={stats.base_stat}></StatusProgressBar>
                                    </StatusBar>
                                </div>
                            )
                        })}
                    </PokeStatusContainer>
                </ResponsivDiv>
            </PokeContainer>
            <Mainfooter>                
            </Mainfooter>
        </Root>
       
    )
}

export default PokeInfoPage;