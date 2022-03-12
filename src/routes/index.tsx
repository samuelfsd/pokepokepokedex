import { Pokedex } from 'Pokedex/Pokedex';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon" element={<h1>PokemonROute</h1>} />
    </Routes>
  );
}
