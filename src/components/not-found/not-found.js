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
            <div>
              <h3>Nenhum Pokémon corresponde à sua pesquisa!</h3>
              <p><strong>Experimente estas sugestões para encontrar um Pokémon:</strong></p>
              <ul>
              <li><p>Reduza o número de parâmetros de pesquisa.</p></li>
              <li><p>Procure apenas por um tipo de Pokémon de cada vez.</p></li>
              <li><p>Tente procurar por tamanhos e formas diferentes.</p></li></ul>
            </div>
          </DivContent>
        </MainDiv>
      </Root>

    )
}

export default PokeNotFound;