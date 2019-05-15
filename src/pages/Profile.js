import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import ProfileContainer from '../components/profile/ProfileContainer';
import CarContainer from '../components/profile/CarContainer';
import OrderContainer from '../components/profile/OrderContainer';

class Profile extends Component {
  state = {
    userData: [],
  }

  componentDidMount() {
    //TO DO: Fetch data, kom så mads lav det endpoint......
    const token = this.props.userToken;
    this.authentication(token);
    // const url = ''
    // const data_promise = fetch(url).then(handleHttpErrors)
    // data_promise.then(userData => this.setState({ userData }))
  }

  authentication = (token) => {
    if(token === '') {
      return <Redirect to="/login" />
    }
  }

  render() {
    return (
      <Container fluid={true}>
        <Row>
          <ProfileContainer userData={this.state.userData}/>
          <Col xs={12} sm={12} md={8} lg={9}>
            <CarContainer userID={this.state.userData.id}/>
            <OrderContainer userToken={this.props.userToken}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

function handleHttpErrors(res) {
	if (!res.ok) {
		return Promise.reject({ status: res.status, fullError: res.json() })
	}
	return res.json();
}