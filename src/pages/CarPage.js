import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SellerContainer from '../components/car/SellerContainer';
import CarContainer from '../components/car/CarContainer'
import Map from '../components/car/Map'
import FormContainer from '../components/car/FormContainer'
import selected from '../components/utils/selectedCar'
class CarPage extends Component {
  state = { 
    data: [],
   }

  componentDidMount() {
    const regno = selected.getSelectedCar();
    console.log(regno)
    var url = `https://www.fenonline.dk/SYS_Backend/api/car/${regno}/dueinator`
    const data_promise = fetch(url).then(handleHttpErrors)
    data_promise.then(data => this.setState({ data }))
  }

  render() { 
    return ( 
      <Container fluid={true}>
        <Row>
          <SellerContainer data={this.state.data} />
          <Col xs={12} sm={12} md={8} lg={9}>
            <CarContainer data={this.state.data}/>
            <FormContainer data={this.state.data}/>
            <Map data={this.state.data} />
          </Col>
        </Row>
      </Container> 
    );
  }
}

export default CarPage;

function handleHttpErrors(res) {
  if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}