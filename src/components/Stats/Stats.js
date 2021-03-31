import Stat from './Stat/Stat';
import classes from './Stats.module.css';
const stats = (props) => {
  return (
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
};

export default stats;
