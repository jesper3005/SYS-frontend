import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';
import FormContainer from '../components/Login/FormContainer'

class Login extends Component {
  render() {
    return (
      <Container fluid={true}>
        <BrandRow>
        </BrandRow>
        <FormRow>
          <FormContainer handleToken={this.props.handleToken} />
        </FormRow>
      </Container>
    );
  }
}

export default Login;

const BrandRow = styled(Row)`
  min-height: 13rem; max-height: 13rem;
  margin-bottom: 2rem;
`;

const FormRow = styled(Row)`
  min-height: calc(100vh - 18rem);
  @media screen and (min-width: 768px) {
    border-top-right-radius: 10rem;
  }
  background-color: #003663;
`;

