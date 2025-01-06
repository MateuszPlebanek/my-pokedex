// Ajoute les données Pokémon en dehors de la fonction du composant
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
    imgSrc: undefined, // Mew n'a pas d'image définie
  }
];

// Définition du composant PokemonCard
function PokemonCard() {
  // Utilise le premier Pokémon du tableau pour l'affichage initial
  const pokemon = pokemonList[0]; // Change cet index à 1 pour tester avec Mew

  return (
    <figure>
      {pokemon.imgSrc ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
