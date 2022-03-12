import { Pokedex } from 'Pokedex/Pokedex';
import { PokemonDetails } from 'Pokemon/PokemonDetails';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:name" element={<PokemonDetails />} />
    </Routes>
  );
}
