import React, { Component } from 'react';
import { Row } from 'reactstrap';
import styled from 'styled-components';

import CarCard from './CarCard';

class CarContainer extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    // TODO:

    const data = fetchCars();
    this.setState({ data });
  }

  render() {
    return (
      <Container>
        {carCardItems(this.state.data) || 'Please wait...'}
      </Container>
    );
  }
}

const fetchCars = () => {
  // TODO:
  return [
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car Card Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car Card Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car Card Title',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];
};

const carCardItems = data => {
  const items = data.map((car, i) =>
    <CarCard key={i} {...car} />
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

export default CarContainer;
