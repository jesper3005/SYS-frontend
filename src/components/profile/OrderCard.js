import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const OrderCard = ({ created, start, end, rating }) => (
  <Container>
    <Info><Label>Created:</Label> {created}</Info>
    <Info><Label>Start Period:</Label> {start}</Info>
    <Info><Label>End Period:</Label> {end}</Info>
    <RatingContainer>{stars(rating)}</RatingContainer>
  </Container>
);

const stars = rating => {
  let items = [];
  let i = 1;
  while (i <= 5) {
    items.push(
      <Star key={i} marked={i <= rating}>
        <i className="fa fa-star"></i>
      </Star>
    );
    i++;
  }
  return items;
};

const Container = styled(Col)`
  display: inline-block;
  min-height: 18rem; max-height: 18rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  background-color: white;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 4, lg: 3,
};

const Info = styled.div`
  display: block;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const RatingContainer = styled.div`
  position: absolute; bottom: 0;
  padding: 0.25rem;
`;

const Star = styled.span`
  margin: 0 0.25rem;
  font-size: 150%;
  color: ${props => props.marked ? 'orange' : '#ccc'};
`;

export default OrderCard;
