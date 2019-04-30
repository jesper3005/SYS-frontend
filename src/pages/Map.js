import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '70%',
    height: '50%',
    display: 'flex',
    borderColor: 'black',
};  

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={18}
        style={mapStyles}
        initialCenter={{
         lat: 55.770179,
         lng: 12.511735
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDsHzXRv-WkUZ0vha0t6hbCfm8T-4YgXkU'
})(MapContainer);