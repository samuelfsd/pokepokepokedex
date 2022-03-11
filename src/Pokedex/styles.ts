import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 6rem;
`;

export const GridContainer = styled.div`
  padding: 0 50px;
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 5fr));
  grid-gap: 30px;
`;

export const CardPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  min-height: 150px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px 30px;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px -5px;
  }
  h3 {
    margin-bottom: 30px;
  }
`;
