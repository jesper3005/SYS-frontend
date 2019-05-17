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
    const token = this.props.userToken;
    const url = 'https://fenonline.dk/SYS_Backend/api/user/getuser/'

    const getHeader = {
      headers: {
        "x-access-token": token
      }
    };

    fetch(url, getHeader).then(res => {
      if (!res.ok) { throw Error(res.status + ": " + res.statusText + " | Could not fetch user data!"); }
      return res.json();
    }).then(data => {
      this.setState({userData: data})
      return data.msg;
    }).catch(error => {
      console.log(error);
      return error.message;
    });
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
            <CarContainer userToken={this.props.userToken}/>
            <OrderContainer userToken={this.props.userToken}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;