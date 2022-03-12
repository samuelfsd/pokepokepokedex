import { listPokemons, PokemonListInterface } from 'Pokemon/services/listPokemons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ActionButton, CardPokemon, Container, GridContainer } from './styles';

export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);

  function handleClick(pokemon: PokemonListInterface) {
    navigate(`/pokemon/${pokemon.name}`);
  }
  return (
    <Container>
      <GridContainer>
        {pokemons.map((pokemon) => (
          <CardPokemon key={pokemon.name}>
            <h3>{pokemon.name}</h3>
            <ActionButton>
              <button onClick={() => handleClick(pokemon)}>
                <span>Abrir</span>
              </button>
            </ActionButton>
          </CardPokemon>
        ))}
      </GridContainer>
    </Container>
  );
}
