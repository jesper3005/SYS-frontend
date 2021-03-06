import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import OrderCard from './OrderCard';

class OrderContainer extends Component {
  state = {
    selected: 0,
    data: [],
    rating: 1,
  };

  onStarClick(nextValue) {
    this.setState({ rating: nextValue });
    this.rateCar();
  }

  componentDidMount() {
    var url = 'https://fenonline.dk/SYS_Backend/api/user/orders'
    const getHeader = {
      headers: {
        "x-access-token": this.props.userToken
      }
    };

    fetch(url, getHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | Could not fetch user orders!"); }
      return res.json();
    }).then(data => {
      this.setState({ data: data })
      console.log(JSON.stringify(data))
      return data.msg;
    }).catch(error => {
      console.log(error);
      return error.message;
    });
  }

  rateCar = () => {
    //TO DO: Fetch Rating of order!
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

export default OrderContainer;

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
