import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <ul>
        <NavigationItem>Covid Tracker</NavigationItem>
        <NavigationItem>About</NavigationItem>
      </ul>
    </div>
  );
};

export default navigationItems;
