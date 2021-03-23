import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';

const map = () => {
  return (
    <div id="map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default map;
