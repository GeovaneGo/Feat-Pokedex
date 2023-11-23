import { useEffect,
         useState } from "react";
import { useParams,
         useNavigate } from "react-router-dom";
import api from '../../api/api';
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
    EvoContainer,
    EvoInfos,
    NextPrev,
    PokeNav,
    GridContainer,
    } from "./pokeInfo.styled";
import pokedexLogo from "../../logoPokedex.png"
import pokeballBg from "../../pokeball.png"
import pokeBanner from "../../menu.png"
import Capitalizer from "../../components/capitalizer/capitalizer";
import LeftZero from "../../components/left-zero/leftZero";
import PokeType from "../../components/poke-type/pokeType";
import BackToTop from "../../components/buttonn-back-top/btnBackTop";
import CardPokemon from "../../components/card-pokemon/cardPokemon";

export const PokeInfoPage =()=>{  

    let { pokeId } = useParams(); 
    const navigation = useNavigate();    
    const [hasPrev, setHasPrev]=useState(false);
    const [hasNext, setHasNext]=useState(false);
    const [prevValidade, setPrevValidate]=useState(false);
    const [nextValidade, setNextValidate]=useState(false);
    const [pokeImage, setPokemonImg]=useState('');
    const [pokeName, setPokeName]=useState('');
    const [pokeNumber, setPokeNumber]=useState('');
    const [pokeType, setPokeType]=useState([]);
    const [pokeStats, setPokeStats]=useState([]);    
    const [pokePrevName, setPrevName]=useState('');
    const [pokeNextName, setNextName]=useState('');
    const [evolutions, setEvolution]=useState([]);    
    const getEvolutionsNames = [];
    const pokeInfo ={
        pokeType: pokeType,
        iconWidth: '30px',
        pokeIconHeigth: '48px',
        pokeIconWidth: "150px",
        fontSize: "22px"
    }


    const getPokemon =()=>{
        api.get('pokemon/' + pokeId).then(res=>{
            console.log(res.data);
            setPokemonImg(res.data.sprites.other['official-artwork']['front_default'] || res.data.sprites.other.dream_world.front_default);
            setPokeName(res.data.name);
            setPokeNumber(res.data.id);
            setPokeType(res.data.types)    
            setPokeStats(res.data.stats)        

            if(!prevValidade){
                getPrevPokemon(res.data.id);
            }

            if(!nextValidade){
                getNextPokemon(res.data.id);
            }

            getEvoluitonChain(res.data.id);
        })        
    }

    function getEvoluitonChain(specieURL){
        api.get('pokemon-species/' + specieURL).then(res=>{
            console.log(res.data)
            getEvolutions(res.data.evolution_chain.url.split("/")[6]);
        })
    }

    function getEvolutions(chainId){
        api.get('evolution-chain/' + chainId).then(res=>{
            console.log(res.data)
            if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name == res.data.chain.species.name)){
                getEvolutionsNames.push({name: res.data.chain.species.name});
                setEvolution(getEvolutionsNames);
            }

            if(res.data.chain.evolves_to.length){
                if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name == res.data.chain.evolves_to[0].species.name)){
                    getEvolutionsNames.push({name: res.data.chain.evolves_to[0].species.name});  
                }            
            } else {                
                setEvolution(getEvolutionsNames);
                return;
            }

            if(res.data.chain.evolves_to[0].evolves_to.length){
                if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name == res.data.chain.evolves_to[0].evolves_to[0].species.name)){
                    getEvolutionsNames.push({name: res.data.chain.evolves_to[0].evolves_to[0].species.name})
                }
            } 

            setEvolution(getEvolutionsNames);
        })
    }

    function getPrevPokemon (pokeNumberId){ 
        setPrevValidate(true);  
        if(pokeNumberId > 1){
            api.get('pokemon/' + (pokeNumberId - 1)).then(res=>{     
                if(res.data.name){        
                    setHasPrev(true);
                    setPrevName(res.data.name);
                }
            })
        }
    }

    function getNextPokemon (pokeNumberId){
        setNextValidate(true);
        api.get('pokemon/' + (pokeNumberId + 1)).then(res=>{
            if(res.data.name){
                setHasNext(true);
                setNextName(res.data.name);    
            }
        })
    }

    function setMaxStat(baseStat){
        return (baseStat * 100) / 255;
    }   

    useEffect(()=>{
        if(!pokeNumber){
            getPokemon();
        }
    },[])

    return (
        <Root>           
            <MainHeader>
                <PokeLogo src={pokedexLogo} onClick={()=> navigation("/")}></PokeLogo>                
            </MainHeader> 
            <PokeInfo bgimage={pokeBanner}>    
                <div>
                    <DefaultLabel textcolor={'#529bad'}>
                        #<LeftZero num={pokeNumber}/> 
                    </DefaultLabel>
                    <DefaultLabel  textmargin={"0 0 0 20px"}>
                        -   <Capitalizer str={pokeName}/>
                    </DefaultLabel> 
                </div>             
            </PokeInfo>
            <PokeInfo margintop={"-32px;"}>                
                <PokeNav>                    
                    {  hasPrev &&
                        <div>                  
                            <NextPrev setfloat="left" href={"/pokemon/"+ pokePrevName}>
                                {`<`} #<LeftZero num={pokeNumber}/>  <Capitalizer str={pokePrevName}/>
                            </NextPrev>
                        </div>
                    }  
                    { hasNext  &&
                        <div>       
                            <NextPrev  setfloat="right"  href={"/pokemon/"+ pokeNextName}>
                                <Capitalizer str={pokeNextName}/> #<LeftZero num={pokeNumber}/>  {`>`}
                            </NextPrev>  
                        </div>
                    }
                </PokeNav> 
            </PokeInfo>
            <PokeContainer>
                <ResponsivDiv>
                    <PokeInfoContainer bgimage={pokeballBg}>
                        <DefaultImg src={pokeImage}>
                        </DefaultImg>
                    </PokeInfoContainer> 
                    <div style={{textAlign:"center",marginTop:"15px"}} >                                          
                        <StatusLabels>
                                Type:
                        </StatusLabels>
                    </div>
                    <PokeType pokeInfo={pokeInfo}></PokeType>
                </ResponsivDiv>
                <ResponsivDiv>
                    <PokeStatusContainer>
                        <StatusLabels>
                            Status
                        </StatusLabels>
                        {pokeStats?.map(stats=>{
                            return (     
                                <div>
                                    <StatusName>
                                        <Capitalizer str={stats.stat.name}/>
                                    </StatusName>                     
                                    <StatusBar>
                                        <StatusProgressBar percentual={setMaxStat(stats.base_stat)}></StatusProgressBar>
                                    </StatusBar>
                                </div>
                            )
                        })}
                    </PokeStatusContainer>                    
                    <div style={{textAlign:"center", marginTop:"15px"}} >                                          
                        <StatusLabels>
                                Weakness:
                        </StatusLabels>
                    </div>
                </ResponsivDiv>
            </PokeContainer>           
            <EvoContainer>
                <EvoInfos>   
                    {evolutions?.map(item=>{
                        return (
                            <GridContainer key={item.name}>
                                <CardPokemon name={item.name}/>
                            </GridContainer>
                        )
                    })}          
                </EvoInfos>
            </EvoContainer>
            <BackToTop></BackToTop>
            <PokeInfo bgimage={pokeBanner} rotate={"180"}/>  
            <Mainfooter>                
            </Mainfooter>
        </Root>       
    );
}

export default PokeInfoPage;