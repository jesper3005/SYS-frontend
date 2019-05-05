import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class SellerContainer extends Component {
  state = {
    profile: '',
    rating: 0,
    pricePerDay: 0,
    priceTotal: 0,
  };

  componentDidMount() {
    const data = fetchSellerData();
    this.setState({ ...data });
  }

  render() {
    const { profile, rating, pricePerDay, priceTotal } = this.state;
    return (
      <Container>
        <Profile src={profile} />
        <RatingContainer>{stars(rating)}</RatingContainer>
        <Info><Label>Price Per Day:</Label> ${pricePerDay}</Info>
        <Info><Label>Price Total:</Label> ${priceTotal}</Info>
      </Container>
    );
  }
}

export default SellerContainer;

const fetchSellerData = () => {
  // TODO:

  return {
    profile: '',
    rating: 4,
    pricePerDay: 100,
    priceTotal: 1000,
  };
};

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
  border-right: 1px solid #ccc;
  background-color: white;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 4, lg: 3,
};

const Profile = styled.img`
  min-width: 100%; max-width: 100%;
  margin: 0.5rem auto;
  padding-top: 100%;
  border: 1px solid black; border-radius: 50%;
  background-size: cover;
  background-image: url('https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg');
`;

const Info = styled.div`
  display: block;
  margin: 0.5rem 0;
  padding: 0 0.5rem;
  font-size: 150%;
  text-align: center;
`;

const Label = styled.label`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const RatingContainer = styled.div`
  text-align: center;
`;

const Star = styled.span`
  margin: 0 0.25rem;
  font-size: 150%;
  color: ${props => props.marked ? 'orange' : '#ccc'};
`;


