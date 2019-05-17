import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';


class CarContainer extends Component {
  state = {
    selected: 0,
    carData: [],
  };

  componentDidMount() {
    const token = this.props.userToken;
    var url = 'https://fenonline.dk/SYS_Backend/api/user/cars'
    const getHeader = {
      headers: {
        "x-access-token": token
      }
    };

    fetch(url, getHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | Could not fetch your cars!"); }
      return res.json();
    }).then(data => {
      this.setState({ carData: data })
      return data.msg;
    }).catch(error => {
      alert(error);
      return error.message;
    });
  }

  render() {
    const { carData, selected } = this.state;

    const listItems = carData.map((car, i) =>
      <ListItem
        key={i} {...car}
        selected={i === selected}
        onClick={() => this.setState({ selected: i })}
      >
        {car.manufactor} {car.model}
      </ListItem>
    );

    const car = carData[selected];

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
            <Title>{car.manufactor} {car.model}</Title>
            <Description><strong> Price: </strong> {car.price} pr/day</Description>
            <Description><strong> Driving distance: </strong> {car.drivingDist}</Description>
            <Description><strong> Type: </strong> {car.type}</Description>
            <Description><strong> Seats: </strong> {car.seats}</Description>
            <Description><strong> Address: </strong> {car.country}</Description>
          </InfoContainer>
          : 'You have no cars!' }
      </Container>
    );
  }
}
export default CarContainer;

//Styles

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
  display: flex;
  padding-left: 5%;
  margin-bottom: 1%;
`;