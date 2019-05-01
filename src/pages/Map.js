import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '70%',
    height: '50%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
};  


const InputFields = (handleSubmit) => {
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input 
        type="number"
        name="lat"
        placeholder='Latitude'
        />

        <input 
        type="number"
        name="lng"
        placeholder='lng'
        />

        <input type="submit" value="Submit!" />
      </form>
    </div>
  ) 
}

export class MapContainer extends Component {
  state = {
    lat: 55.770179,
    lng: 12.511735,
    latHolder: 0,
    lngHolder: 0,
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({[name]: value});
  }

  handleSubmit = event => {
    this.setState = { lat: this.state.latHolder, lng: this.state.lngHolder};
    alert(JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
        <div>
          <div>
            <form onSubmit={this.handleSubmit}> 
              <input 
              type="number"
              name="latHolder"
              placeholder='Latitude'
              onChange={this.handleChange}
              />

              <input 
              type="number"
              name="lngHolder"
              placeholder='lng'
              onChange={this.handleChange}
              />

              <input type="submit" value="Submit!" />
            </form>
          </div>
          <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng,
            }}
          />
        </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: '',
  }
))(MapContainer)
