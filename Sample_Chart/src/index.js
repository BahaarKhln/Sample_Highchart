import React from 'react';
import ReactDom from 'react-dom';
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './index.css';

const options = {
  chart: {
    type: 'spline',
    align : 'center',
    backgroundColor: 'transparent'
  },
  title: {
    text: 'Sample Chart',
    style: {
        color: '#efefef'
      }
  },
  yAxis: {
    categories: {
      style: {
          color: '#efefef'
        }
    },
    labels: {
        style: {
          color: '#efefef'
        }
      },
    title: {
      style: {
        color : '#efefef'
      }
    }
  },
  xAxis: {
    labels: {
        style: {
          color: '#efefef'
        }
      }
  },
  legend: {
    align: 'center'
  },
  series: [
    {
      data: [9,10,2,4,3],
      color : 'tomato'
    }
  ]
};

const App = () => (
  <div>
    <HighchartsReact
    highcharts={Highcharts} 
    options={options} 
    containerProps={{ style: { height : "400px", width : "600px" , align: "center"} }}
    />
  </div>
);


ReactDom.render(<App />, document.getElementById('root'));