import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { CardPokemon, Container, Logo } from './styles';

interface PokemonListInterface {
  name: string;
  url: string;
}
export function Pokedex() {
  const logoImg =
    'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';
  const [pokemons, setPokemons] = useState<PokemonListInterface[]>([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon`)
      .then((response) => setPokemons(response.data.results));
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
