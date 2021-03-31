import Stat from './Stat/Stat';
import classes from './Stats.module.css';
const stats = (props) => {
  return (
    <div className={classes.Stats}>
      <Stat cases={props.activeCases} type="active" />
      <Stat cases={props.deaths} type="deaths" />
      <Stat cases={props.confirmed} type="confirmed" />
      <Stat cases={props.recovered} type="recovered" />
    </div>
  );
};

export default stats;
