import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components'; 

class ProfileContainer extends Component {
  state = {
    profile: '',
    name: '',
    email: '',
    phone: '',
    driverLicences: '',
    rating: 1,
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  componentDidMount() {
    const data = fetchUserData();
    this.setState({ ...data });
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { profile, name, email, phone, driverLicences } = this.state;
    return (
      <Container>
        <Profile src={profile} />
        <Form onSubmit={this.handleSubmit}>
          <Label>Name:</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Label>Email:</Label>
          <Input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <Label>Phone:</Label>
          <Input
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
          />
          <Label>driverLicences:</Label>
          <Input
            type="text"
            name="name"
            value={driverLicences}
            onChange={this.handleChange}
          />
          <Submit type="submit">Save Changes</Submit>
        </Form>
      </Container>
    );
  }
}

const fetchUserData = () => {
  // TODO:

  return {
    profile: '',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+xx xxxxxx',
    driverLicences: 'xxxxxxxxxx',
  };
};

const Container = styled(Col)`
  border-right: 1px solid #ccc;
  background-color: white;
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 4, lg: 3,
};

const Profile = styled.img`
  min-width: 100%; max-width: 100%;
  margin: 0.5rem auto;
  padding-top: 100%;
  border: 1px solid black; border-radius: 50%;
  background-size: cover;
  background-image: url('https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg');
`;

const Form = styled.form`
  min-width: 95%; max-width: 95%;
  margin: 0.5rem auto;
`;

const Label = styled.label`
  display: block;
  font-size: 120%;
  font-weight: bold;
  margin-left: 0.5rem 0.25rem;
`;

const Input = styled.input`
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
  color: white; background-color: green;
  outline: none;
  &:active {
    color: green; background-color: white;
  }
`;

export default ProfileContainer;
