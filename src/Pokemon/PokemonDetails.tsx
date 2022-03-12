import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPokemonDetails } from './services/getPokemonDetails';
import { PokemonDetail } from './types/PokemonDetails';

export function PokemonDetails() {
  const { name } = useParams();
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<
    PokemonDetail | undefined
  >(undefined);

  useEffect(() => {
    if (!name) return;

    getPokemonDetails(name).then((response) => setSelectedPokemonDetails(response));
  }, [name]);

  return (
    <div>
      <h1>Pokemon Selected: {name} </h1>

      <main>
        obaoba
        <img
          src={selectedPokemonDetails?.sprites.front_default}
          alt={selectedPokemonDetails?.name}
        />
      </main>
    </div>
  );
}
