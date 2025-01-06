import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
    },
    {
      name: "mew",
      imgSrc: undefined // Utilise undefined pour indiquer l'absence d'image
    }
  ];

  return (
    <div>
      {/* Passe le Pokémon 'Mew' comme prop au PokemonCard */}
      <PokemonCard pokemon={pokemonList[1]} />
    </div>
  );
}

export default App;