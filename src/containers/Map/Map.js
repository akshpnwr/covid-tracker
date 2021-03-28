import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import icon from '../../components/Icon/Icon';

const Map = () => {
  const [pos, changePos] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      changePos([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  const MyComponent = () => {
    useMapEvents({
      click: (e) => {
        console.log(e.latlng);
        changePos([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

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
