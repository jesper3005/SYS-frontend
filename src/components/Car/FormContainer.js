import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import selected from '../utils/selectedCar'

class FormContainer extends Component {
  state = {
    startDate: '',
    endDate: '',
    // firstName: '',
    // lastName: '',
    // phone: '',
    // email: '',
    // driverLicenseNumber: '',
    // birthDate: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.bookCar();
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  bookCar = () => {
    //const { company, regNo } = this.props.data;
    const { company } = this.props.data
    const regNo = selected.getSelectedCar();
    const { startDate, endDate} = this.state;
    var url = `https://www.fenonline.dk/SYS_Backend/api/car/rent/${company}/${regNo}/${startDate}/${endDate}`
    fetch(url).then(handleHttpErrors)
  }

  render() {
    const { startDate, endDate, firstName, lastName, email,
      driverLicenseNumber, birthDate } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type="date"
            name="startDate"
            value={startDate}
            onChange={this.handleChange}
          />
          <Input
            type="date"
            name="endDate"
            value={endDate}
            onChange={this.handleChange}
          />
          <Input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <Input
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Last Name"
          />
          <Input
            type="phone"
            name="phone"
            value={lastName}
            onChange={this.handleChange}
            placeholder="Phone Number"
          />
          <Input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <Input
            type="text"
            name="driverLicenseNumber"
            value={driverLicenseNumber}
            onChange={this.handleChange}
            placeholder="Driver License Number"
          />
          <Input
            type="text"
            name="birthDate"
            value={birthDate}
            onChange={this.handleChange}
            placeholder="Birth Date"
          />
          <Submit type="submit">Book Car</Submit>
        </Form>
      </Container>
    );
  }
}

export default withRouter(FormContainer);

function handleHttpErrors(res) {
  if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}

const Container = styled(Col)`
  position: relative;
  left: 34px;
  padding: 10px;
  width: 80%;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const Form = styled.form`
  min-width: 94%; max-width: 94%;
  min-height: 20rem; max-height: 20rem;
  left: 20px;
  border: 1px solid lightgrey;
  padding-left: 30px;
  padding-top: 20px;
  display: block;
`;

const Input = styled.input`
  display: inline-block;
  min-width: 48%; max-width: 48%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.25rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  outline: none;
  &::placeholder {
    color: lightgrey;
    padding-right: 0.5rem;
  }
`;

const Submit = styled.button`
  display: block;
  min-width: 10rem; max-width: 10rem;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

