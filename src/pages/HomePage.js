import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import '../styles/LinkStyling.css'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div>
                <Image src={require('../assets/homepage.jpg')} />
                <Container id="example">
                    <Title>Welcome!</Title>
                    <Title>This is Turtle Rental</Title>
                    <Info>This is NOT a real rental service</Info>
                    <Info>Get a quickstart and find your rental by clicking the button below</Info>
                    <div className="link">
                        <Link to='/find-rental'>Find Your Rental</Link>
                    </div>
                </Container>
            </div>
        );
    }
}

export default HomePage;

const Image = styled.img`
    width: 100vw;
    height: 800px;
    -webkit-filter: blur(1.5px);
`;

const Container = styled.div`
    position: absolute;
    background-color: #7b7b7b7d;
    top: 40%;
    left: 36.5%; 
    width: 30%;
    height: 30%;
    padding: 5px;
    border: 1px solid #00000042;
    border-radius: 10px;
`;

const Title = styled.h4`
    color: black;
    text-align: center;
    font-size: 30px;
`;

const Info = styled.p`
    color: black;
    text-align: center;
    font-size: 20px;
`;
