import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { Component } from 'react';

class Map extends Component {
  state = {
    lat: null,
    lon: null,
  };

  componentDidMount() {
    console.log('mount');
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  }

  render() {
    let map = <h1>Loading...</h1>;

    if (this.state.lat && this.state.lon) {
      map = (
        <MapContainer
          center={[this.state.lat, this.state.lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          {/* <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
        </MapContainer>
      );
    }
    return <div id="map">{map}</div>;
  }
}

export default Map;
