import React, { Component } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';
import CarCard from './CarCard';
const url = 'https://fenonline.dk/SYS_Backend/api/car/all'



class CarContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // TODO:
    const data_promise = fetch(url).then(handleHttpErrors)
    data_promise.then(data=>this.setState({data}))
  }

  render() {
    return (
      <Container>
        {carCardItems(this.state.data) || 'Please wait...'}
      </Container>
    );
  }
}

export default CarContainer;

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

const carCardItems = data => {
  const items = data.map(c =>
    <CarCard key={c.regno} {...c} />
    );
  return items;
};

const Container = styled(Row)`
  background-color: white;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 8, lg: 9,
};
