import { useEffect,
         useState } from "react";
import { useParams } from "react-router-dom";
import api from '../../api/api';
import { 
    DefaultImg, 
    MainHeader, 
    Mainfooter, 
    PokeInfoContainer, 
    ResponsivDiv, 
    Root, 
    PokeContainer, 
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
    BannerName,
    } from "./pokeInfo.styled";
import Capitalizer from "../../components/capitalizer/capitalizer";
import LeftZero from "../../components/left-zero/leftZero";
import PokeType from "../../components/poke-type/pokeType";
import BackToTop from "../../components/buttonn-back-top/btnBackTop";
import CardPokemon from "../../components/card-pokemon/cardPokemon";
import BackToHome from "../../components/back-home/backToHome";
import Skeleton from "../../components/skeleton-loading/skeletonLoading";
import GetWeakness from "../../components/get-weakness/getWeakness";

export const PokeInfoPage =()=>{  

    let { pokeId } = useParams();   
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
        iconWidth: '18px',
        pokeIconHeigth: '35px',
        pokeIconWidth: "100px",
        fontSize: "15px",
    }

    const getPokemon =()=>{
        api.get('pokemon/' + pokeId).then(res=>{
            setPokemonImg(res.data.sprites.other['official-artwork']['front_default'] || res.data.sprites.other.dream_world.front_default);
            setPokeName(res.data.name);
            setPokeNumber(res.data.id);
            setPokeType(res.data.types)    
            setPokeStats(res.data.stats);
            if(!prevValidade){
                getPrevPokemon(res.data.id);
            }

            if(!nextValidade){
                getNextPokemon(res.data.id);
            }

            getEvoluitonChain(res.data.species.name);
        })        
    }

    function getEvoluitonChain(specieURL){
        api.get('pokemon-species/' + specieURL).then(res=>{
            getEvolutions(res.data.evolution_chain.url.split("/")[6]);
        })
    }

    function getEvolutions(chainId){
        api.get('evolution-chain/' + chainId).then(res=>{
            if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name === res.data.chain.species.name)){
                getEvolutionsNames.push({name: res.data.chain.species.name});
                setEvolution(getEvolutionsNames);
            }

            if(res.data.chain.evolves_to.length){
                res.data.chain.evolves_to.map(specie =>{
                    if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name === specie.species.name)){
                        getEvolutionsNames.push({name: specie.species.name})
                    }
                })         
            } else {                
                setEvolution(getEvolutionsNames);
                return;
            }

            if(res.data.chain.evolves_to[0].evolves_to.length){
                res.data.chain.evolves_to[0].evolves_to.map(specie =>{
                    if(!getEvolutionsNames.find(getEvolutionsNames => getEvolutionsNames.name === specie.species.name)){
                        getEvolutionsNames.push({name: specie.species.name})
                    }
                })
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
    })

    return (
        <Root  pagebg={"/pagebg.jpg"}>           
            <MainHeader>
                <BackToHome/>                
            </MainHeader> 
            <PokeInfo height={"80px"}>    
                <BannerName  src={"/nameBackground.png"}>
                    <DefaultLabel textcolor={'#529bad'}>
                        #<LeftZero num={pokeNumber}/> 
                    </DefaultLabel>
                    <DefaultLabel  textmargin={"0 0 0 20px"}>
                        -   <Capitalizer str={pokeName}/>
                    </DefaultLabel> 
                </BannerName>             
            </PokeInfo>
            
            <PokeInfo margintop={"-7px"} height={"38px"}>                
                <PokeNav>                    
                    {  hasPrev &&
                        <div>                  
                            <NextPrev  toplradius={"105px 50px"} toprradius={"10px 10px"} bottomrradius={"10px 10px"} bottomlradius={"105px 50px"} position={"left"} setfloat="left" href={"/pokemon/"+ pokePrevName}>
                                {`<`} #<LeftZero num={pokeNumber -1}/>  <Capitalizer str={pokePrevName}/>
                            </NextPrev>
                        </div>
                    }  
                    { hasNext  &&
                        <div>       
                            <NextPrev toprradius={"105px 50px"} bottomrradius={"105px 50px"} position={"right"} setfloat="right"  href={"/pokemon/"+ pokeNextName}>
                                <Capitalizer str={pokeNextName}/> #<LeftZero num={pokeNumber + 1}/>  {`>`}
                            </NextPrev>  
                        </div>
                    }
                </PokeNav> 
            </PokeInfo>
            <PokeContainer>
                <ResponsivDiv bgimage={`url(${"/bgPokeInfo.png"})`}>
                    <PokeInfoContainer bgimage={"/pokeball.png"}>
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
                <ResponsivDiv bgimage={`url(${"/bgweakness.png"})`}>
                    <PokeStatusContainer>
                        <StatusLabels>
                            Stats
                        </StatusLabels>
                        {pokeStats?.map(stats=>{
                            return (     
                                <div key={stats.stat.name}>
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
                    <GetWeakness pokeInfo={pokeInfo}></GetWeakness>       
                </ResponsivDiv>
            </PokeContainer> 
            <EvoContainer> 
                <DefaultLabel style={{position: 'absolute', float: 'left', marginTop: '7px', color: "white"}}>
                    Evolutions
                </DefaultLabel>
                {(evolutions.length > 0) ?
                    <EvoInfos style={{paddingTop: '60px'}}>  
                        {evolutions?.map(item=>{
                            return (
                                <GridContainer key={item.name}>
                                    <CardPokemon name={item.name} pokedata={false}/>
                                </GridContainer>
                            )
                        })}
                    </EvoInfos>  
                    : 
                    <EvoInfos style={{paddingTop: '60px'}}>  
                        <Skeleton props={3}></Skeleton>  
                    </EvoInfos>  
                }      
            </EvoContainer>            
            <BackToTop></BackToTop>
            <PokeInfo height={"200px"}/>  
            <Mainfooter>                
            </Mainfooter>
        </Root>       
    );
}

export default PokeInfoPage;