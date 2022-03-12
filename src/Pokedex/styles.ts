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

export const ActionButton = styled.div`
  button {
    border: 4px solid #000;
    box-shadow: 1px 1px 1px #000;
    padding: 8px 10px;
    text-align: center;
    cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYR+2X0Q6AIAhF5f8/2jYXZkwEjNSVvVUjDpcrGgT7FUkI2D9xRfQETwNIiWO85wfINfQUEyxBG2ArsLwC0jioGt5zFcwF4OYDPi/mBYKm4t0U8ATgRm3ThFoAqkhNgWkA0jJLvaOVSs7j3qMnSgXWBMiWPXe94QqMBMBc1VZIvaTu5u5pQewq0EqNZvIEMCmxAawK0DNkay9QmfFNAJUXfgGgUkLaE7j/h8fnASkxHTz0DGIBMCnBeeM7AArpUd3mz2x3C7wADglA8BcWMZhZAAAAAElFTkSuQmCC)
        14 0,
      pointer;
    user-select: none;
    color: #212529;
    background-color: #fff;
  }
`;
