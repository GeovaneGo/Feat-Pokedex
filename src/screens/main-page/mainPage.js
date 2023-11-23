import { useEffect, useState, useRef} from 'react';
import CardPokemon from '../../components/card-pokemon/cardPokemon';
import { GridWrapper, MainHeader, GridContainer, Mainfooter, Root, ImgBanner, GridMenu, GridItem, ShowMoreBtn, DefaultLabel, DefaultIcon} from './mainPage.styles'
import api from '../../api/api';
import BackToTop from '../../components/buttonn-back-top/btnBackTop';
import pokeBanner from "../../menu.png"
import FiltersMenu from '../../components/filter/fillters';
import pokeball from "../../pokeball.png";
import { BottomScrollListener } from 'react-bottom-scroll-listener';


export const MainPage =()=>{
  const [pokemons, setPokemons]=useState(null);
  const [nextNav, setNextNav]=useState("");
  const [checkShowMoreBtn, setShowBtn]=useState(false);
  const allPokemons =()=>{
    api.get("pokemon?limit=15&offset=0").then(res=>{
      setPokemons(res.data.results);
      setNextNav(res.data.next);
    })
  }
  
  function CallPokemons(){
    setShowBtn(true);
    api.get("pokemon?" + nextNav.split("?")[1]).then(res=>{
      setPokemons([...pokemons, ...res.data.results]);
      setNextNav(res.data.next);
    })
  }

  function bottomDetected(){
    if(checkShowMoreBtn){
      CallPokemons();
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
          <FiltersMenu>          
          </FiltersMenu>
        </ImgBanner>
      <GridWrapper>
        {pokemons?.map(item=>{
          return (
            <GridContainer key={item.name}>
              <CardPokemon name={item.name}/>
            </GridContainer>
          )
        })}
      </GridWrapper>
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
      <BottomScrollListener onBottom={bottomDetected} />;
    </Root>
  );
}
export default MainPage;
