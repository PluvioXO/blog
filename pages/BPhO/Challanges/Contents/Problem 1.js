import React from "react";
import Latex from 'react-latex-next';

import { Line, Scatter } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data1 = {
    datasets: [
        {
        type: 'line',
        label: "Kepler's Third Law",
        data: [ {
            x: 0.387,
            y: 0.24
          }, {
            x: 0.723,
            y: 0.62
        }, {
            x: 1.000,
            y: 1.00
        }, {
            x: 1.523,
            y: 1.88
          },{
            x: 5.2,
            y: 11.86
          }, {
            x: 9.58,
            y: 29.63
          }, {
            x: 19.29,
            y: 84.75
          }, {
            x: 30.25,
            y: 166.34
        }, {
            x: 39.51,
            y: 248.35
        }],
          backgroundColor: '#1890ff',
          tension:0.4,
          pointRadius: 5,
          pointHoverRadius: 10,
    }
]
};
export const chart1 = [
<Scatter data={data1} options={{maintainAspectRatio:true, aspectRatio:1, scales:{y: {title: {display: true, text: 'P [Years]'}}, x: {title: {display: true, text: 'a [AU]'}}} }} style={{width:'700px'}} />
]



const data2 = {
        datasets: [
            {
            label: "Kepler's Third Law",
            data: [{
                x: 29.65161,
                y: 29.63
              }, {
                x: 84.72242,
                y: 84.75
              }, {
                x: 11.85782,
                y: 11.86
              }, {
                x: 166.375,
                y: 166.34
            }, {
                x: 248.3479,
                y: 248.35
            }, {
                x: 1.879533,
                y: 1.88
            }, {
                x: 0.614763,
                y: 0.62
            }, {
                x: 0.24075,
                y: 0.24
              }, {
                x:1.000,
                y:1.00
              }],
              backgroundColor: '#1890ff',
              pointRadius: 5,
              pointHoverRadius: 10,
              borderColor: "#1890ff"
        },
        {
            type: 'line',
            label: "Linear [Kepler's Third Law]",
            data: [{
                x: 0,
                y: 0
              },{
                x: 248,
                y: 248
              }],
            tension: 0.3,
            showLine: true,
            pointStyle: false,
            pointHitRadius:0
            
        }
    ]
};
export const chart2 = [
    <Scatter data={data2} options={{ maintainAspectRatio:true, aspectRatio:1, plugins: {tooltip: {filter: function(tooltipItem){console.log(tooltipItem);return tooltipItem.datasetIndex===0}}}, scales:{y: {title: {display: true, text: 'P [Years]'}}, x: {title: {display: true, text: 'a^(3/2) [AU]'}}} }} style={{width:'700px'}} />
]

