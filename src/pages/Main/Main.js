import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return <Container>main</Container>;
};

const Container = styled.div`
  background-color: ${props => props.theme.mainColor};
`;

export default Main;
