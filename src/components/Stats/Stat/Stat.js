import classes from './Stat.module.css';

const stat = (props) => {
  console.log(props);
  return (
    <div className={classes.Stat}>
      <h1>{props.cases}</h1>
      <p>{props.type}</p>
    </div>
  );
};

export default stat;
