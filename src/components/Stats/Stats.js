import Stat from './Stat/Stat';
import classes from './Stats.module.css';
import Error from '../error/error';

const stats = (props) => {
  console.log('error occured : ' + props.errorOccured);

  let display = (
    <div className={classes.Stats}>
      <Stat
        loadSpinner={props.loadSpinner}
        cases={props.confirmed}
        type="Confirmed"
      />
      <Stat
        loadSpinner={props.loadSpinner}
        cases={props.activeCases}
        type="Active"
      />
      <Stat
        loadSpinner={props.loadSpinner}
        cases={props.recovered}
        type="Recovered"
      />
      <Stat
        loadSpinner={props.loadSpinner}
        cases={props.deaths}
        type="Deaths"
      />
    </div>
  );

  if (props.errorOccured) display = <Error />;

  return display;
};

export default stats;
