import { useEffect, useState } from 'react';
import CardPokemon from '../../components/card-pokemon/cardPokemon';
import { GridWrapper, MainHeader, GridContainer, Mainfooter, Root, ImgBanner} from './mainPage.styles'
import api from '../../api/api';
import BackToTop from '../../components/buttonn-back-top/btnBackTop';
import pokeBanner from "../../menu.png"

function MainPage() {
  const [pokemons, setPokemons]=useState(null);
  const allPokemons =()=>{
    api.get("pokemon?limit=300").then(res=>{
      setPokemons(res.data.results);
    })
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
      <ImgBanner bgimage={pokeBanner}/> 
      <GridWrapper>
        {pokemons?.map(item=>{
          return (
            <GridContainer key={item.name}>
              <CardPokemon name={item.name}/>
            </GridContainer>
          )
        })}
      </GridWrapper>      
      <ImgBanner bgimage={pokeBanner} rotate={"180"}/> 
      <Mainfooter>
      </Mainfooter>
      <BackToTop></BackToTop>  
    </Root>

  );
}
export default MainPage;
