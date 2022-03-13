import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px 300px;
`;

export const Title = styled.div`
  text-align: center;
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImageContainer = styled.div`
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
