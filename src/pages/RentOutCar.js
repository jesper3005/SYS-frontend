import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    manufactor: '',
    price: 200,
    type: 'SUV',
    latitude: '55.5355',
    longtitude: '13.371700000000033',
    model: '',
    seats: '',
    regNo: '',
    driveDist: '',
    productionYear: '',
    drive: '',
    fuelType: '',
    address: '',
    country: '',
    company: 'TTT',
    username: 'TestUser',
  };

  handleSubmit = event => {
    event.preventDefault();
    const carDetails = {
      regno: this.state.regNo,
      price: this.state.price,
      manufactor: this.state.manufactor,
      model: this.state.model,
      type: this.state.type,
      releaseYear: this.state.productionYear,
      drivingDist: this.state.driveDist,
      seats: this.state.seats,
      drive: this.state.drive,
      fuelType: this.state.fuelType,
      longitude: this.state.longtitude,
      latitude: this.state.latitude,
      address: this.state.address,
      country: this.state.country,
      company: this.state.company,
      userName: this.state.username
    };
    this.createCar(carDetails)
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  createCar = carDetails => {
    const url = "https://fenonline.dk/SYS_Backend/api/car/listMyCar";
    const putHeader = {
      method: "POST",
      body: JSON.stringify(carDetails),
      headers: {
        'Content-Type': "application/json"
      },
    };
    fetch(url, putHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText); }
      return res.json();
    }).then(data => {
      alert("You have listed your car for booking!");
    }).catch(error => alert(error));
  }

  render() {
    const {
      manufactor,
      model,
      seats,
      regNo,
      driveDist,
      productionYear,
      drive,
      fuelType,
      address,
      country,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Here you can rent out your own Car</Title>
          <Input
            type="text"
            name="manufactor"
            value={manufactor}
            onChange={this.handleChange}
            placeholder="What's the Manufactor?"
            required
          />
          <Input
            type="text"
            name="model"
            value={model}
            onChange={this.handleChange}
            placeholder="What model do you own?"
            required
          />
          <Input
            type="number"
            name="seats"
            min={0}
            value={seats}
            onChange={this.handleChange}
            placeholder="Number of seats"
            required
          />
          <Input
            type="text"
            name="regNo"
            value={regNo}
            onChange={this.handleChange}
            placeholder="Registration no."
            required
          />
          <Input
            type="text"
            name="driveDist"
            value={driveDist}
            onChange={this.handleChange}
            placeholder="Driving distance (km)"
            required
          />
          <Input
            type="text"
            name="productionYear"
            value={productionYear}
            onChange={this.handleChange}
            placeholder="Production year"
            required
          />
          <Select onChange={this.handleChange} name="drive" required>
            <option value="choice">Choose the drive</option>
            <option value="manuel">Manuel</option>
            <option value="automatic">Automatic</option>
          </Select>
          <Select onChange={this.handleChange} name="fuelType" required>
            <option value="choice">Choose a fueltype</option>
            <option value="gas">Gas</option>
            <option value="eletric">Electric</option>
          </Select>
          <Input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="Address"
            required
          />
          <Input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
            placeholder="Country"
            required
          />
          <Submit type="submit">Submit</Submit>
        </Form>
      </Container>
    );
  }
}

export default withRouter(FormContainer);

const Container = styled(Col)`
`;

Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const Form = styled.form`
  min-height: calc(100vh - 4rem);
`;

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  display: inline-block;
  min-width: 32%; max-width: 32%;
  min-height: 3rem; max-height: 3rem;
  margin: 1rem 0.5rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  &::placeholder {
    color: #dddddd;
  }
`;

const Submit = styled.button`
  position: absolute; bottom: 20rem; right: 2rem;
  min-width: 10rem; max-width: 10rem;
  min-height: 3rem; max-height: 3rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

const Select = styled.select`
  display: inline-block;
  min-width: 32%; max-width: 32%;
  min-height: 3rem; max-height: 3rem;
  margin: 1rem 0.5rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  &::placeholder {
    color: #dddddd;
  }
`;