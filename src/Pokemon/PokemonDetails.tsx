import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPokemonDetails } from './services/getPokemonDetails';
import { Container, Content, Details, ImageContainer, Title } from './styles';
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
    <Container>
      <Title>
        <h2>Pokemon Selected: {name} </h2>
      </Title>

      <Content>
        <ImageContainer>
          <img
            src={selectedPokemonDetails?.sprites.front_default}
            alt={selectedPokemonDetails?.name}
          />
        </ImageContainer>

        <div>
          <div>
            {selectedPokemonDetails?.types.map((type) => (
              <p key={type.type.name}>{type.type.name}</p>
            ))}
          </div>
          <Details>
            <p>Specie: </p>
            {selectedPokemonDetails?.height}
            {selectedPokemonDetails?.species.name}
            {selectedPokemonDetails?.weight}
            {selectedPokemonDetails?.abilities.map((ability) => (
              <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
          </Details>
        </div>
      </Content>
    </Container>
  );
}
