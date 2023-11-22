import '../App.css';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
import { GridWrapper, MainHeader, GridContainer, Mainfooter, Root} from './mainPage.styles'
import api from '../api/api';
import BackToTop from '../components/btnBackTop';

function MainPage() {
  const [pokemons, setPokemons]=useState(null);
  const allPokemons =()=>{
    api.get("pokemon?limit=151").then(res=>{
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
          <img src={require(`../logoPokedex.png`)} ></img>
      </MainHeader>
      <GridWrapper>
        {pokemons?.map(item=>{
          return (
            <GridContainer key={item.name}>
              <CardPokemon name={item.name}/>
            </GridContainer>
          )
        })}
      </GridWrapper>
      <Mainfooter>
      </Mainfooter>
      <BackToTop></BackToTop>  
    </Root>

  );
}

export default MainPage;
