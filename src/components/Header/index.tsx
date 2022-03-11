import React from 'react';

import { Container, Logo } from './styles';

export function Header() {
  const logoImg =
    'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Logo PokeAPI" />
      </Logo>
    </Container>
  );
}
