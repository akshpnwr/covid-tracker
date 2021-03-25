import NavigationItems from '../NavigationItems/NavigationItems';
import Map from '../../containers/Map/Map';
import { Fragment } from 'react';

const layout = () => {
  return (
    <Fragment>
      <NavigationItems />
      <Map />
    </Fragment>
  );
};

export default layout;
