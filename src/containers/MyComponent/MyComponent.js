import { useMapEvents } from 'react-leaflet';

const MyComponent = () => {
  useMapEvents({
    click: (e) => {
      console.log(e, 'map clicked');
    },
  });
  return null;
};

export default MyComponent;
