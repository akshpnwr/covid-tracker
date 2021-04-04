import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Error from '../error/error';

import classes from './Graph.module.css';

const graph = (props) => {
  if (props.errorOccured) return <Error />;

  ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

  // Create a JSON object to store the chart configurations
  const chartConfigs = {
    type: 'column2d', // The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: 'Covid-19 cases', //Set the chart caption
        // subCaption: 'In MMbbl = One Million barrels', //Set the chart subcaption
        xAxisName: 'Dates', //Set the x-axis name
        yAxisName: 'Cases', //Set the y-axis name
        // numberSuffix: 'K',
        theme: 'fusion', //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: props.graphData,
    },
  };

  return (
    <div className={classes.Graph}>
      <ReactFC {...chartConfigs} />
    </div>
  );
};

export default graph;
