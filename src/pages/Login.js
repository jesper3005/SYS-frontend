import React from 'react';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';
import FormContainer from '../components/Login/FormContainer'

const SignIn = (props) => (
  <Container fluid={true}>
    <BrandRow>
    </BrandRow>
    <FormRow>
      <FormContainer /* userToken={this.props.userToken} */ />
    </FormRow>
  </Container>
);

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

export default SignIn;
