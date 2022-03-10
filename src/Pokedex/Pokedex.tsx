import { listPokemons, PokemonListInterface } from 'Pokemon/services/listPokemons';
import React, { useEffect, useState } from 'react';

import { CardPokemon, Container, Logo } from './styles';

export function Pokedex() {
  const logoImg =
    'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

  useEffect(() => {
    listPokemons().then((response) => setPokemons(response.results));
  }, []);
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Logo PokeAPI" />
      </Logo>

      {pokemons.map((pokemon) => (
        <CardPokemon key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <a href={pokemon.url}>Clique aqui</a>
        </CardPokemon>
      ))}
    </Container>
  );
}
