import React, {useState} from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: "yellow",
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })
  const [pokemon1, setPokemon1] = useState({
    name: "Charmander",
    type: "Fire",
    evolved: false,
    weight: 8.5,
    color: "Red",
    image:"https://archives.bulbagarden.net/media/upload/thumb/7/73/004Charmander.png/250px-004Charmander.png",
    id:0
  }) 

  const [pokemon2, setPokemon2] = useState({
    name: "Bulbasaur",
    type: "Grass, Poison",
    evolved: false,
    weight: 6.9,
    color: "Green",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/2/21/001Bulbasaur.png/250px-001Bulbasaur.png",
    id: 0,
  }); 

  const [pokemon3, setPokemon3] = useState({
    name: "Squirtle",
    type: "Water",
    evolved: false,
    weight: 9,
    color: "Blue",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/3/39/007Squirtle.png/250px-007Squirtle.png",
    id: 0,
  }); 

  const [pokemon4, setPokemon4] = useState({
    name: "Togepi",
    type: "Fairy",
    evolved: false,
    weight: 1.5,
    color: "White",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/6/6b/175Togepi.png/250px-175Togepi.png",
    id: 0,
  }); 

  const [pokemon5, setPokemon5] = useState({
    name: "Abra",
    type: "Psychic",
    evolved: false,
    weight: 19.5,
    color: "Brown",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/6/62/063Abra.png/250px-063Abra.png",
    id: 0,
  }); 

  const [pokemon6, setPokemon6] = useState({
    name: "Gastly",
    type: "Ghost, Poison",
    evolved: false,
    weight: 0.1,
    color: "Purple",
    image:
      "https://archives.bulbagarden.net/media/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png",
    id: 0,
  }); 
  // Para fazer seus próximos pokemons, crie novos estados!

  return (
    <>
      <GlobalStyles />
      <FlexContainer>
        {/* Aqui neste componente, passe as props. Lembre-se que também é possivel passar a função de setState via props! */}
        <PokemonCard pokemon={pokemon} setPokemon={setPokemon} />

        <PokemonCard pokemon={pokemon1} setPokemon={setPokemon1} />

        <PokemonCard pokemon={pokemon2} setPokemon={setPokemon2} />

        <PokemonCard pokemon={pokemon3} setPokemon={setPokemon3} />

        <PokemonCard pokemon={pokemon4} setPokemon={setPokemon4} />

        <PokemonCard pokemon={pokemon5} setPokemon={setPokemon5} />

        <PokemonCard pokemon={pokemon6} setPokemon={setPokemon6} />
        {/* Crie aqui seus próximos pokemons! */}
      </FlexContainer>
    </>
  );
}

export default App;
