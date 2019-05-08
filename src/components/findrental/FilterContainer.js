import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FilterContainer extends Component {
  state = {
    fromDate: '',
    toDate: '',
    manufactor: '',
    model: '',
    year: '',
    type: '',
    seats: '',
    drive: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(JSON.stringify(this.state))
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <h6>Choose a start and end date</h6>
          <input type="date" name='fromDate' onChange={this.handleChange} />
          -
          <input type="date" name='toDate' onChange={this.handleChange} />
          <h6>Choose a manufactor:</h6>
          <Select onChange={this.handleChange} name="manufactor">
            <option>All</option>
            <option>Audi</option>
            <option>Ford</option>
          </Select>
          <h6>Model:</h6>
          <Input placeholder="Punto Grande" onChange={this.handleChange} name="model"></Input>
          <h6>Price:</h6>
          <Input type="number" placeholder="Max price.." onChange={this.handleChange} name="price"></Input>
          <h6>Type:</h6>
          <Select onChange={this.handleChange} name="type">
            <option>All</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Station car</option>
          </Select>
          <h6>Fuel type:</h6>
          <Select onChange={this.handleChange} name="fuelType">
            <option>All</option>
            <option>Gas</option>
            <option>Electric</option>
          </Select>
          <h6>Number of seats:</h6>
          <Select onChange={this.handleChange} name="seats">
            <option>All</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </Select>
          <h6>Transmission:</h6>
          <Select onChange={this.handleChange} name="drive">
            <option>All</option>
            <option>Manual</option>
            <option>Automatic</option>
          </Select>
          <Input type="submit" value="Search" />
        </Form>
      </Container>
    );
  }
}

const Container = styled(Col)`
  background-color: #da777b;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 4, lg: 3,
};

const Form = styled.form`
  display: block;
  margin: 1rem auto;
`;

const Select = styled.select`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 2.5rem; max-height: 2.5rem;
  margin: 0.5rem auto;
  border-radius: 6px;
  font-size: 120%;
  color: white; background-color: #304f5f;
`;

const Input = styled.input`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #304f5f;
  outline: none;
  -webkit-appearance: none;
  &::placeholder {
    color: lightgrey;
    padding-left: 0.0rem;
  }
`;

const Submit = styled.button`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 2.5rem; max-height: 2.5rem;
  margin: 0.5rem auto;
  border: 1px solid white; border-radius: 3px;
  font-size: 120%;
  color: white; background-color: #304f5f;
`;

export default FilterContainer;
