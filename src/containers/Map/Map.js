import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { Fragment, useEffect, useState } from 'react';
import icon from '../../components/Icon/Icon';
import axios from 'axios';
import Stats from '../../components/Stats/Stats';

const API_KEY = 'AIzaSyDPEBHU_sCUeKz6ZIuMRRNjgi_x_7YFZ48';

const Map = () => {
  const [pos, changePos] = useState(false);
  let data, stateName;

  //runs only on mount and unmount
  useEffect(() => {
    console.log('effect');
    axios
      .get(`https://api.covid19india.org/state_district_wise.json`)
      .then((res) => {
        console.log(res.data);
        data = res.data;
      });
    navigator.geolocation.getCurrentPosition((position) => {
      changePos([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  // everytime state update
  useEffect(() => {
    if (!pos) return;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.join(
          ','
        )}&sensor=true&key=${API_KEY}`
      )
      .then((res) => {
        stateName = res.data.plus_code.compound_code.split(',')[1].trim();
      })
      .catch((err) => console.error('Not found 404 !'));
    // axios
    //   .get(`https://geocode.xyz/${pos.join(',')}?json=1`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => console.error('Not found 404 !'));
  }, [pos]);

  // Listens to click event o map
  const MyComponent = () => {
    useMapEvents({
      click: (e) => {
        changePos([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  let map = <h1 style={{ color: 'black' }}>Loading...</h1>;

  if (pos.length) {
    map = (
      <MapContainer center={pos} zoom={4} scrollWheelZoom={false}>
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
  return (
    <Fragment>
      <div id="map">{map}</div>
      <Stats />
    </Fragment>
  );
};

export default Map;
