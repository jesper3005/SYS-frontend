import React from 'react';
import { Card, Button  } from 'react-bootstrap';
import { NavLink } from "react-router-dom";


const CarItem = () => {
    return ( 
        <Card styles={styles.card}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Img src="holder.js/100px180" />
            <Card.Body style={styles.body}>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <NavLink activeClassName="active" to="/carPage">USER PAGE</NavLink>
            </Card.Body>
        </Card>
     );
}
 
export default CarItem;

const styles = {
    card: {
        height: 80,
        width: 80,
    },
    body: {
        paddingLeft: '3px',
    }
}