import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';


class RentContainer extends Component {
  state = {
    selected: 0,
    data: [],
  };

  componentDidMount() {
    // TODO:

    const data = fetchCars();
    this.setState({ data });
  }

  render() {
    const { data, selected } = this.state;

    const listItems = data.map((car, i) =>
      <ListItem
        key={i} {...car}
        selected={i === selected}
        onClick={() => this.setState({ selected: i })}
      >
        {car.title}
      </ListItem>
    );

    const car = data[selected];

    return (
      <Container>
        <ListContainer>
          <Title>Your Cars</Title>
          <List>
            {listItems}
          </List>
        </ListContainer>
        {car
        ? <InfoContainer>
            <Title>{car.title}</Title>
            <Description>{car.description}</Description>
          </InfoContainer>
        : 'Please wait...'}
      </Container>
    );
  }
}

const fetchCars = () => {
  // TODO:

  return [
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      profile: 'https://imgct2.aeplcdn.com/img/400/cars/generic/Audi-RS5-Top-Audi-Car-In-India.png',
      title: 'Car 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];
};

const Container = styled(Col)`
  min-height: 15rem; max-height: 15rem;
  margin: 1rem 0;
  border: 1px solid #ccc; border-radius: 3px;
  background-color: white;
  box-shadow: 2px 2px 2px #ccc;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const ListContainer = styled.div`
  position: absolute; top: 0; left: 0;
  min-width: 40%; max-width: 40%;
  min-height: 15rem; max-height: 15rem;
  border-right: 1px solid #ccc;
`;

const Title = styled.h4`
  margin: 1rem 0;
  text-align: center;
`;

const List = styled.ul`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 10rem; max-height: 10rem;
  margin: 0;
  padding: 0;
  overflow: auto;
  list-style-type: none;
`;

const ListItem = styled.li`
  display: block;
  padding: 0.25rem 0 0.25rem 1rem;
  border-top: 1px solid #ccc;
  cursor: pointer;
  color: ${props => props.selected ? 'white' : 'black'}
  background-color: ${props => props.selected ? '#304f5f' : 'white'};
`;

const InfoContainer = styled.div`
  position: absolute; top: 0; right: 0;
  min-width: 60%; max-width: 60%;
  min-height: 15rem; max-height: 15rem;
  overflow: hidden;
`;

const Description = styled.p`
  padding: 0 1rem;
  min-height: 12rem; max-height: 12rem;
  overflow: auto;
`;

export default RentContainer;
