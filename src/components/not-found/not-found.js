import NotFoundImage from "../../pokeNotFound.png"
import { DefaultImg, DivContent, MainDiv, Root } from "./not-found.styled";

export const PokeNotFound =()=>{
    return(
      <Root>
        <MainDiv>
          <DivContent>
            <DefaultImg src={NotFoundImage}></DefaultImg> 
          </DivContent> 

          <DivContent>
            <div style={{margin: 'auto'}}>
              <h3  style={{color: '#4d4d4d'}}>Nenhum Pokémon corresponde à sua pesquisa!</h3>
              <p  style={{color: '#4d4d4d'}}><strong>Experimente estas sugestões para encontrar um Pokémon:</strong></p>
              <ul>
              <li><p style={{color: '#4d4d4d'}}>Reduza o número de parâmetros de pesquisa.</p></li>
              <li><p style={{color: '#4d4d4d'}}>Procure apenas por um tipo de Pokémon de cada vez.</p></li>
              <li><p style={{color: '#4d4d4d'}}>Tente procurar por tamanhos e formas diferentes.</p></li></ul>
            </div>
          </DivContent>
        </MainDiv>
      </Root>

    )
}
export default PokeNotFound;