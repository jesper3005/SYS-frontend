import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    userName: '',
    password: '',
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const credentials = { username: this.state.userName, password: this.state.password };
    this.login(credentials);
  }

  login = credentials => {
    const url = "https://fenonline.dk/SYS_Backend/api/login";
    const postHeader = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    };
    fetch(url, postHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | Wrong username or password!"); }
      return res.json();
    }).then(data => {
      this.props.handleToken(data.token);
      alert(JSON.stringify(data))
      alert("You have succesfully logged in!" + data.token);
      this.props.history.push('/profile');
    }).catch(error => alert(error));
  }

  render() {
    const { userName, password } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Sign In</Title>
          <Input
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleChange}
            placeholder="Username.."
          />
          <Input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password.."
          />
          <Button type="submit">Sign In</Button>
          <Button onClick={() => this.props.history.push('/register')}>Register</Button>
        </Form>
        <Text>Rental service created by users for users.</Text>
      </Container>
    );
  }
}

export default withRouter(FormContainer);

const Container = styled(Col)`
`;

Container.defaultProps = {
  xs: 12, sm: 12, md: { size: 4, offset: 1, }, lg: { size: 4, offset: 1, },
};

const Form = styled.form`
  @media screen and (min-width: 768px) {
    position: absolute; top: -5rem;
  }
  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 3rem;
  }

  min-width: 100%; max-width: 100%;
  min-height: 20rem; max-height: 20rem;
  padding: 1rem;
  border: 1px solid #fbcfd2; border-radius: 2rem;
  background-color: #fbcfd2;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  outline: none;
  &::placeholder {
    color: white;
    padding-left: 0.5rem;
  }
`;

const Button = styled.button`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;

const Text = styled.p`
  @media screen and (min-width: 768px) {
    position: absolute; top: 16rem;
  }
  @media screen and (max-width: 768px) {
    position: static;
    margin-top: 1rem;
  }
  font-size: 170%;
  font-weight: bold;
  color: white;
`;