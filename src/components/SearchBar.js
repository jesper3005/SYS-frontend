import React, { Component } from 'react';
import { Container, DropdownButton, Dropdown } from 'react-bootstrap';
import CarCard from '../components/results/CarCard'

//YYYY-MM-DD

class SearchBar extends Component {
    state = {
        manufactor: 'manufactor',
        model: '',
        type: '',
        fuelType: '',
        seats: '',
        price: '',
        drive: '',
        fromDate: '',
        toDate: '',
        data: [],
    }

    handleSubmit = event => {
        event.preventDefault();
        this.getData()
        alert(JSON.stringify(this.state));
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    getData = () => {
        const { toDate, fromDate } = this.state
        var url = `https://www.fenonline.dk/SYS_Backend/api/car/available/${fromDate}/${toDate}`
        const data_promise = fetch(url).then(handleHttpErrors)
        data_promise.then(data => this.setState({ data: this.filterListOfCars(data) }))
    }

    filterListOfCars = (data) => {
        let filteredCars = data;
        const { manufactor, model, type, fueltype, seats, price, drive } = this.state;
        if (manufactor !== "All") {
            filteredCars.filter(car => car.manufactor === manufactor);
        }
        if (model !== "") {
            filteredCars.filter(car => car.model === model);
        }
        if (type !== "All") {
            filteredCars.filter(car => car.type === type);
        }
        if (fueltype !== "All") {
            filteredCars.filter(car => car.fueltype === fueltype);
        }
        if (seats !== "All") {
            filteredCars.filter(car => car.seats === seats);
        }
        if (price > 0.0) {
            filteredCars.filter(car => car.price <= price);
        }
        if (drive !== "All") {
            filteredCars.filter(car => car.drive === drive);
        }
        return filteredCars;
    }

    render() {
        return (
            <Container>
                <Container style={styles.container} fluid={true} >
                    <form onSubmit={this.handleSubmit}>
                        <h5 style={{ color: 'black' }}>Search for your rental here:</h5>
                        <DropdownButton
                            id="dropdown-basic-button"
                            title={this.state.manufactor}
                            name="manufactor"
                            onChange={this.handleChange}
                        >
                            <Dropdown.Item name="Action"></Dropdown.Item>
                            <Dropdown.Item>Another action</Dropdown.Item>
                            <Dropdown.Item>Something else</Dropdown.Item>
                        </DropdownButton>
                        <select onChange={this.handleChange} name="manufactor" defaultValue="Manufactor">
                            <option name="all">All</option>
                            <option name="volvo">Volvo</option>
                            <option name="saab">Saab</option>
                            <option name="mercedes">Mercedes</option>
                            <option name="audi">Audi</option>
                        </select>
                        <input type="text" placeholder="Type model name" onChange={this.handleChange} name="model"></input>
                        <select onChange={this.handleChange} name="type">
                            <option name="all">All</option>
                            <option name="SUV">SUV</option>
                            <option name="Stationcar">Station Car</option>
                            <option name="Sedan">Sedan</option>
                        </select>
                        <select onChange={this.handleChange} name="fueltype">
                            <option name="all">All</option>
                            <option name="gas">Gas</option>
                            <option name="ev">EV</option>
                        </select>
                        <select onChange={this.handleChange} name="seats">
                            <option name="all">All</option>
                            <option name="4">4</option>
                            <option name="5">5</option>
                            <option name="6">6</option>
                            <option name="7">7</option>
                        </select>
                        <input type="number" name="price" onChange={this.handleChange} placeholder="Max price" />
                        <select onChange={this.handleChange} name="drive">
                            <option name="all">All</option>
                            <option name="manual">Manual</option >
                            <option name="automatic">Automatic</option>
                        </select>
                        <input type="date" name='fromDate' onChange={this.handleChange} />
                        <input type="date" name='toDate' onChange={this.handleChange} />
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
        width: '120%',
        height: '110px',
        marginTop: '10px',
        borderWidth: '1px',
        borderColor: '#3d5297',
        borderRadius: '20px',
    },
    dropdown: {
        margin: 5,
        paddingRight: 0,
        display: 'inline',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
}
