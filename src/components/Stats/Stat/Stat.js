import classes from './Stat.module.css';
import Spinner from '../../Spinner/Spinner';
import { Fragment } from 'react';

const stat = (props) => {
  let stats = <Spinner />;

  if (props.loadSpinner)
    stats = (
      <Fragment>
        <h1>{props.cases}</h1>
        <p>{props.type}</p>
      </Fragment>
    );

  return <div className={classes.Stat}>{stats}</div>;
};

export default stat;
