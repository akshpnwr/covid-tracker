import Stat from './Stat/Stat';
import classes from './Stats.module.css';
const stats = (props) => {
  return (
    <div className={classes.Stats}>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </div>
  );
};

export default stats;
