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

  handleSubmit() {
    const theRating = {
      userName: "",
      rating: this.state.rating
    }
    this.createRating(theRating);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  componentDidMount() {
    const { created, start, end } = this.props
    this.setState({ created, start, end })
  }

  createRating = theRating => {
    const url = "https://fenonline.dk/SYS_Backend/api/rating/createRating";
    const putHeader = {
      method: "POST",
      body: JSON.stringify(theRating),
      headers: {
        'Content-Type': "application/json"
      },
    };
    fetch(url, putHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText); }
      return res.json();
    }).then(data => {
      alert("You have rated the booking, thank you for the feedback!");
    }).catch(error => alert(error));
  }

  render() {
    const { startPeriod, endPeriod, created, price, car } = this.props;
    return (
      <Container>
        <Info><Label>Created:</Label> {created}</Info>
        <Info><Label>Start Period:</Label> {startPeriod}</Info>
        <Info><Label>End Period:</Label> {endPeriod}</Info>
        <StarRatingComponent
          name="rating"
          starCount={6}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="Rate!"/>
        </form>
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

