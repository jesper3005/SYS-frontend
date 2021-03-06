import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import 'bootstrap/dist/css/bootstrap.min.css'   

export class MapContainer extends Component {
  state = {
    lng: '',
    lat: '',
    latHolder: 0,
    lngHolder: 0,
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},
    zoom: 15,
  }

  componentDidMount() {
    this.setState({ lat: this.props.data.latitude, lng: this.props.data.longitude})
    console.log(this.state.lat)
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      size: 30
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
    const {
      address,
    } = this.props.data
    return (
        <div>
          <Map
            google={this.props.google}
            zoom={this.state.zoom}
            style={mapStyles}
            initialCenter={{
              lat: this.state.lat,
              lng: this.state.lng,
            }}
            center={{
              lat: this.props.data.latitude,
              lng: this.props.data.longitude,
            }}
          >
          <Marker
            onClick={this.onMarkerClick}
            title={'Car location'}
            address={address}
            position={{lat: this.props.data.latitude, lng: this.props.data.longitude}}
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
    apiKey: 'AIzaSyDsHzXRv-WkUZ0vha0t6hbCfm8T-4YgXkU',
  }
))(MapContainer)


const mapStyles = {
  width: '89%',
  height: '99%',
  position: 'relative',
  left: '4.2%',
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