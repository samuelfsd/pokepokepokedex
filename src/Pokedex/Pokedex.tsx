import { Header } from 'components/Header';
import { listPokemons, PokemonListInterface } from 'Pokemon/services/listPokemons';
import React, { useEffect, useState } from 'react';

import { CardPokemon, Container } from './styles';

export function Pokedex() {
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);
  return (
    <Container>
      <Header />
      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <a href={pokemon.url}>Clique aqui</a>
        </CardPokemon>
      ))}
    </Container>
  );
}
