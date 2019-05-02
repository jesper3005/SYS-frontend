import React from 'react';
import { SplitButton, Dropdown, Container, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Col } from 'reactstrap';




const DropDownItem = () => {
    return (
        <Container style={styles.container} >
            <h3 style={{color: 'white'}}>Search for your rental here:</h3>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Manufactor">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Model">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Status">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </SplitButton>
            <Button as="input" type="submit" value="Search" />
        </Container>
    );
} 


export default DropDownItem;

const styles = {
    container: {
        backgroundColor: 'white',
        width: '80%',
        height: '110px',
    },
    dropdown: {
        margin: 5,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
}
