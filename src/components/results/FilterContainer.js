import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FilterContainer extends Component {
  state = {
    manufactor: '',
    model: '',
    year: '',
    type: '',
    seats: '',
    drive: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    // TODO:
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Container>
        <Form>
          <Select onChange={this.handleChange}><option>Manufactor</option></Select>
          <Select onChange={this.handleChange}><option>Model</option></Select>
          <Select onChange={this.handleChange}><option>Year</option></Select>
          <Select onChange={this.handleChange}><option>Type</option></Select>
          <Select onChange={this.handleChange}><option>Seats</option></Select>
          <Select onChange={this.handleChange}><option>Drive</option></Select>
          <Submit type="button">Search</Submit>
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
  border: 1px solid white; border-radius: 3px;
  font-size: 120%;
  color: white; background-color: #304f5f;
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
