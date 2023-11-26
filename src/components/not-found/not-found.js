export const PokeNotFound =()=>{
    return(
        <div>
          <h3>Nenhum Pokémon corresponde à sua pesquisa!</h3>
          <p><strong>Experimente estas sugestões para encontrar um Pokémon:</strong></p>
          <ul>
          <li><p>Reduza o número de parâmetros de pesquisa.</p></li>
          <li><p>Procure apenas por um tipo de Pokémon de cada vez.</p></li>
          <li><p>Tente procurar por tamanhos e formas diferentes.</p></li></ul>
        </div>
    )
}

export default PokeNotFound;