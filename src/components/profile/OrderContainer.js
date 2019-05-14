import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';


import OrderCard from './OrderCard';

class OrderContainer extends Component {
  state = {
    selected: 0,
    data: [],
    rating: 1,
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  componentDidMount() {
    // TODO:

    const data = fetchOrders();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    const orderItems = data.map((order, i) =>
      <OrderCard key={i} {...order} />
    );
    return (
      <Container>
        {orderItems}
      </Container>
    );
  }
}

const fetchOrders = () => {
  // TODO:

  return [
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
    {
      created: '01-01-2001',
      start: '01-01-2001',
      end: '01-01-2001',
      rating: 4,
    },
  ];
};

const Container = styled(Col)`
  min-height: 20rem;
  margin: 1rem 0;
  border: 1px solid #ccc; border-radius: 3px;
  background-color: white;
  box-shadow: 2px 2px 2px #ccc;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

export default OrderContainer;
