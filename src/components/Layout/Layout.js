import NavigationItems from '../NavigationItems/NavigationItems';
import Map from '../Map/Map';
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
