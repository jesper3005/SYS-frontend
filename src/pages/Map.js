import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarInformation from '../components/CarInformation'


export class MapContainer extends Component {
  state = {
    lat: 55.770179,
    lng: 12.511735,
    latHolder: 0,
    lngHolder: 0,
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    zoom: 18,
  }


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      size: 18
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
        <div>
          <CarInformation />         
          <Map
            google={this.props.google}
            zoom={this.state.zoom}
            style={mapStyles}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng,
            }}
          >
          <Marker
            onClick={this.onMarkerClick}
            title={'Car location'}
            address={'Nørgaardvej 30'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.title}</h4>
              <p>{this.state.selectedPlace.address}</p>
            </div>
          </InfoWindow>
          </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: '',
  }
))(MapContainer)


const mapStyles = {
  width: '70%',
  height: '50%',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
};

// handleChange = event => {
//   const target = event.target;
//   const value = target.value;
//   const name = target.name;
//   this.setState({[name]: value});
// }

// handleSubmit = event => {
//   event.preventDefault();
//   this.setState ({ lat: this.state.latHolder, lng: this.state.lngHolder}, function() {
//     alert(JSON.stringify(this.state));
//   });
// }