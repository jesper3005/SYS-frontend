import React, { Component } from 'react';
import { SplitButton, Dropdown, Container } from 'react-bootstrap';
import CarCard from '../components/results/CarCard'

//YYYY-MM-DD

class SearchBar extends Component {
    state = {
        fromDate: '',
        toDate: '',
        data: [],
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getData()
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    getData = () => {
        const { toDate, fromDate } = this.state
        var url = 'https://www.fenonline.dk/SYS_Backend/api/car/available/'
        url += fromDate + "/"
        url += toDate
        console.log(url)
        const data_promise = fetch(url).then(handleHttpErrors)
        data_promise.then(data => this.setState({ data }))
    }

    render() {
        return (
            <Container>
                <Container style={styles.container} fluid={true} >
                    <form onSubmit={this.handleSubmit}>
                        <h5 style={{ color: 'white', }}>Search for your rental here:</h5>
                        <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Manufactor">
                            <Dropdown.Item href="#/action-1">Fiat</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Mercedes</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Bentley</Dropdown.Item>
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
                        <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Fuel Type">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </SplitButton>
                        <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Type">
                            <Dropdown.Item href="#/action-1">SUV</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sedan</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Station car</Dropdown.Item>
                        </SplitButton>
                        <SplitButton variant='secondary' size='sm' style={styles.dropdown} id="dropdown-basic-button" title="Drive">
                            <Dropdown.Item href="#/action-1">Manual</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Automatic</Dropdown.Item>
                        </SplitButton>
                        <input type="date" label="test" name='fromDate' onChange={this.handleChange} />
                        <input type="date" placeholder={this.state.toDate} name='toDate' onChange={this.handleChange} />
                        <input type='submit' value='search' />
                    </form>
                </Container>
                <Container>
                    {carCardItems(this.state.data, this.props.regNo)}
                </Container>
            </Container>
        );
    }
}


export default SearchBar;

const carCardItems = (data, regNo) => {
    const items = data.map(c =>
        <CarCard key={c.regno} {...c} regNo={regNo} />
    );
    return items;
};

function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
}

const styles = {
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '110px',
        marginTop: '10px',
        borderWidth: '1px',
        borderColor: '#3d5297',
        borderRadius: '20px',
    },
    dropdown: {
        margin: 5,
        paddingRight: 0,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    items: {
        textAlign: 'center',
    }
}
