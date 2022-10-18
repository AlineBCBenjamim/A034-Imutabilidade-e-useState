import React from 'react'
import {
  Card,
  PokemonName,
  PokemonType,
  EvolveButton
} from './styles'


const PokemonCard = (props) => {
  console.log(props);
  const evoluirPokemon = (pokemonName) => {
    console.log("Cliquei no botão de evoluir");

    if (pokemonName === "Pichu") {
      props.setPokemon({
        ...props.pokemon,
        name: "Pikachu",
        type: "Electric",
        evolved: true,
        weight: 6,
        color: "yellow",
        image:
          "https://archives.bulbagarden.net/media/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png",
        id: 0
      });
    } else if (pokemonName === "Pikachu") {
        props.setPokemon({
          ...props.pokemon,
          name: "Raichu",
          type: "Electric",
          evolved: true,
          weight: 30,
          color: "yellow",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/8/88/026Raichu.png/250px-026Raichu.png",
          id: 0
        });
      }else if(pokemonName === "Charmander"){
        props.setPokemon({
          ...props.pokemon1,
          name: "Charmeleon",
          type: "Fire",
          evolved: true,
          weight: 19,
          color: "Red",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/4/4a/005Charmeleon.png/250px-005Charmeleon.png",
          id: 0
        });
      }else if (pokemonName === "Charmeleon") {
        props.setPokemon({
          ...props.pokemon1,
          name: "Charizard",
          type: "Fire, Flying",
          evolved: true,
          weight: 90.5,
          color: "Red",
          image:
            "https://archives.bulbagarden.net/media/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png",
          id: 0
        });
        }else if (pokemonName === "Bulbasaur") {
          props.setPokemon({
            ...props.pokemon2,
            name: "Ivysaur",
            type: "Grass, Poison",
            evolved: true,
            weight: 13,
            color: "Green",
            image: "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png",              
            id: 0,
          });
          }else if (pokemonName === "Ivysaur") {
            props.setPokemon({
              ...props.pokemon2,
              name: "Venusaur",
              type: "Grass, Poison",
              evolved: true,
              weight: 100,
              color: "Green",
              image:
                "https://archives.bulbagarden.net/media/upload/thumb/a/ae/003Venusaur.png/250px-003Venusaur.png",
              id: 0,
            });
            }else if (pokemonName === "Squirtle") {
              props.setPokemon({
                ...props.pokemon3,
                name: "Wartortle",
                type: "Water",
                evolved: true,
                weight: 22.5,
                color: "Blue",
                image:
                  "https://archives.bulbagarden.net/media/upload/thumb/0/0c/008Wartortle.png/250px-008Wartortle.png",
                id: 0,
              });
              }else if (pokemonName === "Wartortle") {
                props.setPokemon({
                  ...props.pokemon3,
                  name: "Blastoise",
                  type: "Water",
                  evolved: true,
                  weight: 85.5,
                  color: "Blue",
                  image:
                    "https://archives.bulbagarden.net/media/upload/thumb/0/02/009Blastoise.png/250px-009Blastoise.png",
                  id: 0,
                });
                }else if (pokemonName === "Togepi") {
                  props.setPokemon({
                    ...props.pokemon4,
                    name: "Togetic",
                    type: "Fairy, Flying",
                    evolved: true,
                    weight: 3.2,
                    color: "White",
                    image:
                      "https://archives.bulbagarden.net/media/upload/thumb/1/11/176Togetic.png/250px-176Togetic.png",
                    id: 0,
                  });
                  }else if (pokemonName === "Togetic") {
                    props.setPokemon({
                      ...props.pokemon4,
                      name: "Togekiss",
                      type: "Fairy, Flying",
                      evolved: true,
                      weight: 38,
                      color: "White",
                      image:
                        "https://archives.bulbagarden.net/media/upload/thumb/8/87/468Togekiss.png/250px-468Togekiss.png",
                      id: 0,
                    });
                    }else if (pokemonName === "Abra") {
                      props.setPokemon({
                        ...props.pokemon5,
                        name: "Kadabra",
                        type: "Psychic",
                        evolved: true,
                        weight: 56.5,
                        color: "Brown",
                        image:
                          "https://archives.bulbagarden.net/media/upload/thumb/9/97/064Kadabra.png/250px-064Kadabra.png",
                        id: 0,
                      });
                      }else if (pokemonName === "Kadabra") {
                        props.setPokemon({
                          ...props.pokemon5,
                          name: "Alakazam",
                          type: "Psychic",
                          evolved: true,
                          weight: 48,
                          color: "Brown",
                          image:
                            "https://archives.bulbagarden.net/media/upload/thumb/c/cc/065Alakazam.png/250px-065Alakazam.png",
                          id: 0,
                        });
                        }else if (pokemonName === "Gastly") {
                          props.setPokemon({
                            ...props.pokemon6,
                            name: "Haunter",
                            type: "Ghost, Poison",
                            evolved: true,
                            weight: 0.1,
                            color: "Purple",
                            image:
                              "https://archives.bulbagarden.net/media/upload/thumb/6/62/093Haunter.png/250px-093Haunter.png",
                            id: 0,
                          });
                          }else if (pokemonName === "Haunter") {
                            props.setPokemon({
                              ...props.pokemon6,
                              name: "Gengar",
                              type: "Ghost, Poison",
                              evolved: true,
                              weight: 40.5,
                              color: "Purple",
                              image:
                                "https://archives.bulbagarden.net/media/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png",
                              id: 0,
                            });
                          }
      
    }
  

  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.type}</PokemonType>
      <p>{props.pokemon.weight}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard