import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import icon from '../../components/Icon/Icon';
import MyComponent from '../MyComponent/MyComponent';

const Map = () => {
  const [pos, changePos] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      changePos([position.coords.latitude, position.coords.longitude]);
    });
  }, []);
  let map = <h1 style={{ color: 'black' }}>Loading...</h1>;

  if (pos.length) {
    map = (
      <MapContainer center={pos} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent />
        {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          /> */}
        <Marker icon={icon} position={pos}>
          <Popup>A pretty CSS3 popup.</Popup>
        </Marker>
      </MapContainer>
    );
  }
  return <div id="map">{map}</div>;
};

export default Map;

// class Map extends Component {
//   state = {
//     pos: [],
//   };

//   componentDidMount() {
//     console.log('mount');
//     navigator.geolocation.getCurrentPosition((position) => {
//       this.setState({
//         pos: [position.coords.latitude, position.coords.longitude],
//       });
//     });
//   }

//   render() {
//     let map = <h1 style={{ color: 'black' }}>Loading...</h1>;

//     if (this.state.pos.length) {
//       map = (
//         <MapContainer center={this.state.pos} zoom={13} scrollWheelZoom={false}>
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <MyComponent />
//           {/* <TileLayer
//             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
//           /> */}
//           <Marker icon={icon} position={this.state.pos}>
//             <Popup>A pretty CSS3 popup.</Popup>
//           </Marker>
//         </MapContainer>
//       );
//     }
//     return <div id="map">{map}</div>;
//   }
// }