import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components'; 

class ProfileContainer extends Component {
  state = {
    profile: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    driverLicenseNumber: '',
    rating: 1,
  };

  onStarClick(nextValue) {
    this.setState({rating: nextValue});
  }

  componentDidMount() {
    //Fetch user rating
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { profile, firstName, lastName, email, phone, driverLicenseNumber } = this.props.userData;
    return (
      <Container>
        <Profile src={profile} />
        <Form onSubmit={this.handleSubmit}>
          <Label> <strong> First Name: </strong> {firstName}</Label>
          <Label> <strong> Last Name: </strong> {lastName}</Label>
          <Label> <strong> Email: </strong>{email}</Label>
          <Label> <strong> Phone: </strong>{phone}</Label>
          <Label> <strong> Driver licences: </strong> {driverLicenseNumber}</Label>

        </Form>
      </Container>
    );
  }
}

export default ProfileContainer;

//Styles

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
  margin-left: 0.5rem 0.25rem;
`;

