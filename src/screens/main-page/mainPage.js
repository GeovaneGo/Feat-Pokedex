import { useEffect, useState} from 'react';
import CardPokemon from '../../components/card-pokemon/cardPokemon';
import { 
  GridWrapper,
  MainHeader,
  GridContainer,
  Mainfooter,
  Root, 
  ImgBanner, 
  ShowMoreBtn, 
  DefaultLabel, 
  DefaultIcon, 
  SerchField, 
  ItensFound, 
  Explore, 
  InputSearchBtn, 
  ResponsivDiv, 
  DivFilter, 
  FilterSpan} from './mainPage.styles'
import api from '../../api/api';
import BackToTop from '../../components/buttonn-back-top/btnBackTop';
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import PokeNotFound from '../../components/not-found/not-found';
import Skeleton from '../../components/skeleton-loading/skeletonLoading';
import BackToHome from '../../components/back-home/backToHome';
import RightBarFilter from '../../components/right-bar-filter/rightBarFilter';


export const MainPage =()=>{
  const [typeFilter, setTtypeFilters]=useState([]);
  const [pokemons, setPokemons]=useState(null);
  const [nextNav, setNextNav]=useState("");
  const [checkShowMoreBtn, setShowBtn]=useState(false);
  const [infinityScroll, setInfinityScroll]=useState(false);
  const [allNames, setAllNames]=useState(null);
  const [searchResults, setSearchResults]=useState(null);
  const [sourceItens, setSourceItens]=useState("default");
  const allPokemons =()=>{
    api.get("pokemon?limit=15&offset=0").then(res=>{
      setPokemons(res.data.results);
      setNextNav(res.data.next);
      getAllPokemons();
    })
  }

  console.log(typeFilter)
  
  function CallPokemons(){
    setShowBtn(true);
    setInfinityScroll(true);
    api.get("pokemon?" + nextNav.split("?")[1]).then(res=>{
      setPokemons([...pokemons, ...res.data.results]);
      setNextNav(res.data.next);
    })
  }

  function bottomDetected(){
      CallPokemons();
  }
  
  function getAllPokemons(){   
      api.get("pokemon?limit=100000&offset=0").then(res=>{
        setAllNames(res.data.results);
      })
  }
  
  function SearchEvent (target){
    const pokemonFound = [];
    if(target.keyCode === 13 && target.target.value.length > 0){
      allNames?.map(pokemon=>{
          if(pokemon.name.includes(target.target.value) || pokemon.url.split("/")[6].includes(target.target.value)){
            pokemonFound.push(pokemon);
          }
      })
      if(pokemonFound.length > 0){
        setPokemons(pokemonFound)
        setSearchResults(pokemonFound.length);
      } else {
        setPokemons(null)
        setSearchResults(null);
      }
      setShowBtn(true);
      setInfinityScroll(false);
      setSourceItens("search");
    } else if (target.keyCode === 13 && target.target.value.length === 0){
      allPokemons();
      setShowBtn(false);
      setInfinityScroll(false);
      setSearchResults(null);
      setSourceItens("default");
    }
  }

  function FilterApply(){
      const target = {
        keyCode: 13,
        target: {
          value: document.getElementById("searchField").value,
        }
      }
      SearchEvent(target);
  }

  useEffect(()=>{
    if(!pokemons){
      allPokemons();
    }
  },[])

  useEffect(()=>{

  },[typeFilter])

  return (
    <Root>      
      <MainHeader>
          <BackToHome source={"main"}/>
      </MainHeader>
      <ImgBanner>
      <ResponsivDiv>
          <div style={{display: 'flex', marginBottom:"4px"}}>
            <DefaultLabel  fontSize={"15px"}>
              Search:
            </DefaultLabel>  
            <SerchField onKeyDown={SearchEvent} id="searchField" placeholder='E.g: Pikachu "Enter"'></SerchField>
            <InputSearchBtn onClick={FilterApply} id="searchBtn">
              <img style={{margin: 'auto'}} alt="" src={"/input-search-bg.png"}></img>
            </InputSearchBtn>
            <nav>
              {searchResults &&
                <ItensFound>
                  <DefaultLabel fontSize={"15px"}>
                    {searchResults}
                  </DefaultLabel>
                  pokémons encontrados.
                </ItensFound>
              }
            </nav>
          </div>
      </ResponsivDiv>   
      </ImgBanner>
      <RightBarFilter prop={"-350px"}></RightBarFilter>      
      <ResponsivDiv bgimage={"/pagebg.jpg"}>
        <DivFilter>
          <FilterSpan></FilterSpan>
        </DivFilter>
        {pokemons &&
          <GridWrapper>            
            {pokemons?.map(item=>{
              return (
                <GridContainer key={item.name}>
                  <CardPokemon setTtypeFilters={setTtypeFilters} name={item.name} pokedata={false}/>
                </GridContainer>
              )
            })}
          </GridWrapper>
        }
        {(!pokemons &&  sourceItens === "search") &&
          <PokeNotFound></PokeNotFound>    
        }
        {(!pokemons &&  sourceItens === "default") &&
          <Skeleton props={15}></Skeleton> 
        }  
        
        { !checkShowMoreBtn &&
          <div style={{textAlign:'center', margin: '30px 0'}}>
            <ShowMoreBtn onClick={CallPokemons}>
                <DefaultIcon src={"/pokeball.png"}>

                </DefaultIcon>
                <Explore>
                    Explore!
                </Explore>
            </ShowMoreBtn>
          </div>
        } 
      </ResponsivDiv>         
      <ImgBanner setheight={"200px"}/> 
      <Mainfooter>
      </Mainfooter>
      <BackToTop></BackToTop>
      {infinityScroll &&
        <BottomScrollListener onBottom={bottomDetected} />
      }
    </Root>
  );
}

export default MainPage;
