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
import Graph from '../../components/Graph/Graph';

const API_KEY = 'AIzaSyDPEBHU_sCUeKz6ZIuMRRNjgi_x_7YFZ48';

const Map = () => {
  const [pos, changePos] = useState(false);
  const [data, changeData] = useState(false);
  const [country, changeCountry] = useState(false);
  const [loadSpinner, changeSpinner] = useState(false);
  const [errorOccured, changeError] = useState(false);

  //runs only on mount and unmount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      changePos([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  //runs every time country changes
  useEffect(() => {
    console.log(country);

    axios
      .get(
        `https://api.covid19api.com/country/${
          country ? country : 'India'
        }?from=2021-03-31T00:00:00Z&to=${new Date().toISOString}`
      )
      .then((res) => {
        console.log(res.data.slice(-10));
        const covidData = res.data.slice(-1);

        const { Active, Confirmed, Deaths, Recovered } = covidData[0];

        changeData({
          Active,
          Confirmed,
          Deaths,
          Recovered,
        });
        changeSpinner(true);
      })
      .catch((err) => {
        console.error(`Not found 404 ! ${err}`);
        changeError(true);
      });
  }, [country]);

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
        changeCountry(
          res.data.results[0].formatted_address.split(' ').slice(-1)[0]
        );
      })
      .catch((err) => console.error('Not found 404 !'));
  }, [pos]);

  // Listens to click event o map
  const MyComponent = () => {
    useMapEvents({
      click: (e) => {
        changePos([e.latlng.lat, e.latlng.lng]);
        changeSpinner(false);
        changeError(false);
      },
    });
    return null;
  };

  let map = <h1 style={{ color: 'black' }}>Loading...</h1>;

  if (pos.length) {
    map = (
      <MapContainer center={pos} zoom={3} scrollWheelZoom={false}>
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
      <Stats
        errorOccured={errorOccured}
        loadSpinner={loadSpinner}
        activeCases={data.Active}
        confirmed={data.Confirmed}
        deaths={data.Deaths}
        recovered={data.Recovered}
      />
      <Graph />
    </Fragment>
  );
};

export default Map;
