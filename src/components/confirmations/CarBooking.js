import React from 'react';
import { Col } from 'reactstrap';
import styled, { keyframes } from 'styled-components';

const RecieptContainer = () => (
  <Container>
      <Success>
        <i className="fa fa-check"></i>
      </Success>
      <Title>Your booking was succesfull!</Title>
  </Container>
);

const fadeIn = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`;

const Container = styled(Col)`
  animation: 2s ${fadeIn} ease-in-out;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: { size: 8, offset: 2, }, lg: { size: 6, offset: 3, },
};

const Success = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-width: 10rem; max-width: 10rem;
  min-height: 10rem; max-height: 10rem;
  margin: 1rem auto;
  margin-top: 5rem;
  font-size: 8rem;
  border-radius: 50%;
  color: white; background-color: green;
`;

const Title = styled.h1`
  text-align: center;
`;

export default RecieptContainer;
