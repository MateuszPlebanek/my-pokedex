import React, { useState } from 'react';
import "./App.css";
import PokemonCard from "./components/PokemonCard";


  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    { 
      name: "charmander", 
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" 
    },
    { 
      name: "squirtle",
     imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    { 
      name: "pikachu",
     imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
      name: "mew",
      imgSrc: undefined // Utilise undefined pour indiquer l'absence d'image
    }
  ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);

    const handleNext = () => {
      if (pokemonIndex < pokemonList.length - 1) {
        setPokemonIndex(pokemonIndex + 1);
      }
    };

    const handlePrevious = () => {
      if (pokemonIndex > 0) {
        setPokemonIndex(pokemonIndex -1);
      }
    };

  return (
    <div>
      {/* Passe le Pokémon 'Mew' comme prop au PokemonCard */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
    </div>
  );
}

export default App;