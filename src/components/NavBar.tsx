import React from 'react';

interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
}

const NavBar: React.FC<NavBarProps> = ({ setPokemonIndex, pokemonList }) => {
    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button
                key={pokemon.name}
                type="button"
                onClick={() => {
                    if (pokemon.name === "pikachu") {
                        alert("pika pikachu !!!");
                    }
                    setPokemonIndex(index);
                }}
                >
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}

export default NavBar;