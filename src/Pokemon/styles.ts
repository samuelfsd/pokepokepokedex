import styled from 'styled-components';

export const Container = styled.div`
  margin: 4rem 10rem;
`;

export const Title = styled.div`
  text-align: center;
`;

export const Content = styled.main`
  margin: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ImageContainer = styled.div`
  width: 500px;
  height: 300px;
  text-align: center;
  img {
    height: 100%;
  }
`;

export const Details = styled.div`
  margin-top: 50px;
  width: 500px;
  height: 300px;

  display: inline-block;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;

  div {
    display: flex;
    width: 250px;
    height: 100px;
    text-align: center;
  }
  .right-col {
    width: 250px;
    height: 150px;

    div {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-evenly;
      p {
        margin-bottom: 10px;
      }
    }
  }
`;
