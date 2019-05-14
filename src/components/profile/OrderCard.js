import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

class OrderCard extends Component {
  state = {
    created: '',
    start: '',
    end: '',
    rating: 1,
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  componentDidMount() {
    const { created, start, end } = this.props
    this.setState({ created, start, end })
  }

  render() {
    const { created, start, end } = this.state;
    return (
      <Container>
        <Info><Label>Created:</Label> {created}</Info>
        <Info><Label>Start Period:</Label> {start}</Info>
        <Info><Label>End Period:</Label> {end}</Info>
        <StarRatingComponent
          name="rating"
          starCount={6}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </Container>
    );
  }
}

export default OrderCard;

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

