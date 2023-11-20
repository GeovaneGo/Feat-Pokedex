import '../App.css';
import api from '../api/api';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
import { GridWrapper, MainHF, GridContainer, Mainfooter, Root, DefaultLabel, MenuDiv} from './mainPage.styles'
import FiltersMenu from '../components/fillters';

function MainPage() {
  const [pokemons, setPokemons]=useState(null)
  const allPokemons =()=>{
    api.get("pokemon?limit=12").then(res=>{
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
      <MainHF>
          <img src={require(`../logoPokedex.png`)} ></img>
      </MainHF>
      <div>
        <FiltersMenu>          
        </FiltersMenu>
        <GridWrapper>
          {pokemons?.map(item=>{
            return (
              <GridContainer key={item.name}>
                <CardPokemon name={item.name}/>
              </GridContainer>
            )
          })}
        </GridWrapper>
      </div>  
      <Mainfooter>
      </Mainfooter>    
    </Root>

  );
}

export default MainPage;
