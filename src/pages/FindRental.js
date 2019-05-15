import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import styled from 'styled-components';
import CarCard from '../components/findrental/CarCard'

//YYYY-MM-DD

class FindRental extends Component {
	state = {
		fromDate: '',
		toDate: '',
		manufactor: 'All',
		model: '',
		price: 0.0,
		type: 'All',
		fuelType: 'All',
		seats: 'All',
		drive: 'All',
		data: [],
	}

	handleSubmit = event => {
		event.preventDefault();
		console.log(this.state);
		this.getData()
	}

	handleChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	}

	getData = async () => {
		const { fromDate, toDate } = this.state
		var url = `https://www.fenonline.dk/SYS_Backend/api/car/available/${fromDate}/${toDate}`
		const data = await fetch(url).then(handleHttpErrors);
		// const data_promise = await fetch(url).then(handleHttpErrors)
		this.setState({ data: this.filterListOfCars(data) })
	}


	filterListOfCars = (data) => {
		let filteredCars = data;
		console.log(filteredCars);
		const { manufactor, model, type, fueltype, seats, price, drive } = this.state;
		if (manufactor !== "All") {
			filteredCars = filteredCars.filter(car => car.manufactor === manufactor);
		}
		if (model !== "") {
			filteredCars = filteredCars.filter(car => car.model === model);
		}
		if (type !== "All") {
			filteredCars = filteredCars.filter(car => car.type === type);
		}
		if (fueltype !== "All") {
			filteredCars = filteredCars.filter(car => car.fueltype === fueltype);
		}
		if (seats !== "All") {
			filteredCars = filteredCars.filter(car => car.seats === seats);
		}
		if (price > 0.0) {
			filteredCars = filteredCars.filter(car => car.price <= price);
		}
		if (drive !== "All") {
			filteredCars = filteredCars.filter(car => car.drive === drive);
		}
		return filteredCars;
	}

	render() {
		return (
			<div>
				<FormContainer>
					<Form onSubmit={this.handleSubmit}>
						<Label>Choose a start and end date</Label>
						<DatePicker type="date" name='fromDate' onChange={this.handleChange} required />
						-
                        <DatePicker type="date" name='toDate' onChange={this.handleChange} required />
						<Label>Choose a manufactor:</Label>
						<Select onChange={this.handleChange} name="manufactor">
							<option>All</option>
							<option>Audi</option>
							<option>Ford</option>
						</Select>
						<Label>Model:</Label>
						<Input placeholder="Punto Grande" onChange={this.handleChange} name="model"></Input>
						<Label>Price:</Label>
						<Input type="number" placeholder="Max price.." onChange={this.handleChange} name="price"></Input>
						<Label>Type:</Label>
						<Select onChange={this.handleChange} name="type">
							<option>All</option>
							<option>SUV</option>
							<option>Sedan</option>
							<option>Station car</option>
						</Select>
						<Label>Fuel type:</Label>
						<Select onChange={this.handleChange} name="fuelType">
							<option>All</option>
							<option>Gas</option>
							<option>Electric</option>
						</Select>
						<Label>Number of seats:</Label>
						<Select onChange={this.handleChange} name="seats">
							<option>All</option>
							<option>4</option>
							<option>5</option>
							<option>6</option>
							<option>7</option>
							<option>8</option>
						</Select>
						<Label>Transmission:</Label>
						<Select onChange={this.handleChange} name="drive">
							<option>All</option>
							<option>Manual</option>
							<option>Automatic</option>
						</Select>
						<Input type="submit" value="Search" />
					</Form>
				</FormContainer>
				<Container>
					{carCardItems(this.state.data)}
				</Container>
			</div>
		);
	}
}

export default FindRental;

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

const FormContainer = styled(Col)`
  background-color: #efefef;
  float: left;
  height: 100vh;
`;

FormContainer.defaultProps = {
	xs: 12, sm: 12, md: 4, lg: 3,
};

const Container = styled(Row)`
  margin: 0rem auto;
  width: 70%;
  float: left;
  padding-left: 10%;
`;

const Form = styled.form`
  display: inline;
  margin: 0rem auto;
`;

const Label = styled.h6`
	color: black;
	margin: 0.9rem auto;
	padding-left: 1%;
	font-size: 105%;
`;

const Select = styled.select`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 2.5rem; max-height: 2.5rem;
  margin: 0.5rem auto;
  border-radius: 6px;
  font-size: 120%;
  color: white; background-color: #304f5f;
`;

const Input = styled.input`
  display: block;
  min-width: 100%; max-width: 100%;
  min-height: 3rem; max-height: 3rem;
  margin: 0.5rem auto;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #304f5f;
  outline: none;
  -webkit-appearance: none;
  &::placeholder {
    color: lightgrey;
    padding-left: 0.2rem;
  }
`;

const DatePicker = styled.input`
  background-color: #304f5f;
  color: white;
	border-width: 2px;
	border-color: #304f5f;
	border-radius: 5px;
  font-size: 40;
	width: 45%;
	height: 5%;
`;