import { useEffect, useState} from 'react';
import CardPokemon from '../../components/card-pokemon/cardPokemon';
import { GridWrapper, MainHeader, GridContainer, Mainfooter, Root, ImgBanner, ShowMoreBtn, DefaultLabel, DefaultIcon, SerchField, GridMenu, GridItem, ItensFound} from './mainPage.styles'
import api from '../../api/api';
import BackToTop from '../../components/buttonn-back-top/btnBackTop';
import pokeBanner from "../../menu.png"
import pokeball from "../../pokeball.png";
import { BottomScrollListener } from 'react-bottom-scroll-listener';
import PokeNotFound from '../../components/not-found/not-found';


export const MainPage =()=>{
  const [pokemons, setPokemons]=useState(null);
  const [nextNav, setNextNav]=useState("");
  const [checkShowMoreBtn, setShowBtn]=useState(false);
  const [infinityScroll, setInfinityScroll]=useState(false);
  const [allNames, setAllNames]=useState(null)
  const [searchResults, setSearchResults]=useState(null)
  
  const allPokemons =()=>{
    api.get("pokemon?limit=15&offset=0").then(res=>{
      setPokemons(res.data.results);
      setNextNav(res.data.next);
      getAllPokemons();
    })
  }
  
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
    if(target.keyCode === 13 && [...target.target.value].length > 0){
      allNames?.map(pokemon=>{
          if(pokemon.name.includes(target.target.value) || pokemon.url.includes(target.target.value)){
            pokemonFound.push(pokemon);
          }
      })
      if(pokemonFound.length > 0){
        setPokemons(pokemonFound)
      } else {
        setPokemons(null)
      }
      setSearchResults(pokemonFound.length);
      setShowBtn(true);
      setInfinityScroll(false);
    } else if (target.keyCode === 13 && [...target.target.value].length === 0){
      allPokemons();
      setShowBtn(false);
      setInfinityScroll(false);
      setSearchResults(null);
    }
  }

  useEffect(()=>{
    if(!pokemons){
      allPokemons();
    }
  },[])

  return (
    <Root>      
      <MainHeader>
          <img src={require(`../../logoPokedex.png`)} ></img>
      </MainHeader>
      <ImgBanner bgimage={pokeBanner}>
        <GridMenu>
          <GridItem>
            <div>
            <DefaultLabel>
              Buscar:
            </DefaultLabel>  
            <SerchField onKeyDown={SearchEvent} ></SerchField>
            </div>
            {searchResults &&
              <ItensFound><DefaultLabel>{searchResults}</DefaultLabel> pokémons encontrados.</ItensFound>
            }
          </GridItem>
        </GridMenu>   
      </ImgBanner>
      {pokemons ?      
        <GridWrapper>
          {pokemons?.map(item=>{
            return (
              <GridContainer key={item.name}>
                <CardPokemon name={item.name} pokedata={false}/>
              </GridContainer>
            )
          })}
        </GridWrapper>
        :
        <PokeNotFound></PokeNotFound>
      }      

        { !checkShowMoreBtn &&
          <div style={{textAlign:'center', marginBottom: '30px'}}>
            <ShowMoreBtn onClick={CallPokemons}>
                <DefaultIcon src={pokeball}>

                </DefaultIcon>
                <DefaultLabel>
                    Explorar Mais!
                </DefaultLabel>
            </ShowMoreBtn>
          </div>
        }  
      <ImgBanner bgimage={pokeBanner} rotate={"180"}/> 
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
