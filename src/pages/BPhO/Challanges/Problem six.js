import React, {useState} from 'react'
import { Row, Col, Tabs, InputNumber, Slider, Space, Button, Select } from 'antd'
import { Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Latex from 'react-latex-next'
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
import { data1 } from './Contents/Problem 6'
  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


export default function ProblemSix() {

    const map1 = new Map();
    map1.set(1, 0.24)
    map1.set(2, 0.62)
    map1.set(3, 1)
    map1.set(4, 1.88)
    map1.set(5, 11.86)
    map1.set(6, 29.63)
    map1.set(7, 84.75)
    map1.set(8, 166.34)
    map1.set(9, 248.35)

    const map5 = new Map();
    map5.set(1, 0.387)
    map5.set(2, 0.723)
    map5.set(3, 1.000)
    map5.set(4, 1.523)
    map5.set(5, 5.202)
    map5.set(6, 9.576)
    map5.set(7, 19.293)
    map5.set(8, 30.246)
    map5.set(9, 39.509)

    const map6 = new Map();
    map6.set(1, 0.21)
    map6.set(2, 0.01)
    map6.set(3, 0.02)
    map6.set(4, 0.09)
    map6.set(5, 0.05)
    map6.set(6, 0.06)
    map6.set(7, 0.05)
    map6.set(8, 0.01)
    map6.set(9, 0.25)

    const map7 = new Map();
    map7.set(1, 0.241)
    map7.set(2, 0.615)
    map7.set(3, 1.000)
    map7.set(4, 1.881)
    map7.set(5, 11.861)
    map7.set(6, 29.628)
    map7.set(7, 84.747)
    map7.set(8, 166.344)
    map7.set(9, 248.348)

    const map3 = new Map()
    map3.set(0, -1)
    map3.set(1, 1)
    map3.set(2, -1)
    map3.set(3, 1)
    map3.set(4, -1)
    map3.set(5, 1)
    map3.set(6, -1)
    map3.set(7, 1)
    map3.set(8, -1)
    map3.set(9, 1)
    map3.set(10, -1)
    map3.set(11, 1)
    map3.set(12, -1)
    map3.set(13, 1)
    map3.set(14, -1)
    map3.set(15, 1)
//Start of actual map
    map3.set(16 , -1.5)
    map3.set(17 , 2)
    map3.set(18 , -2)
    map3.set(19 , 2)
    map3.set(20 , -10)
    map3.set(21 , 10)
    map3.set(22 ,-10)
    map3.set(23 ,10)
    map3.set(24 ,-10)
    map3.set(25 ,10)
    map3.set(26 ,-10)
    map3.set(27 ,10)
    map3.set(28 ,-20)
    map3.set(29 ,20)
    map3.set(30 ,-20)
    map3.set(31 ,20)
    map3.set(32 ,-30)
    map3.set(33 ,35)
    map3.set(34 ,-35)
    map3.set(35 ,35)
    map3.set(36 ,-30)
    map3.set(37 ,50)
    map3.set(38 ,-40)
    map3.set(39 ,40)

    const map4 = new Map()
    map4.set(1, 'Mercury')
    map4.set(2, 'Venus')
    map4.set(3, 'Earth')
    map4.set(4, 'Mars')
    map4.set(5, 'Jupiter')
    map4.set(6, 'Saturn')
    map4.set(7, 'Uranus')
    map4.set(8, 'Neptune')
    map4.set(9, 'Pluto')

    const originalData = {
        datasets: [
            {
                label: "Sun",
                data: [{x:0, y:0}],
                backgroundColor: "yellow",
                borderColor:"orange",
                pointRadius: 10,
                pointHoverRadius: 10,
                options: {
                    animation: false
                }
            }
        ]}
        
    const [x1, changex1] = useState(-1)
    const [x2, changex2] = useState(1)
    const [y1, changey1] = useState(-1)
    const [y2, changey2] = useState(1)
    const [valuee1,setValuee1] = useState(1)
    const [valuee2,setValuee2] = useState(1)
    const [valuee3,setValuee3] = useState(5)
    const [valuee4,setValuee4] = useState(1)
    const [animation, changeAnimation] = useState(false)
    const [value1, setValue1] = useState('1')
    const [value2, setValue2] = useState('11')
    const [time, ctime] = useState(0)
    const [disabled1, isDisabled1] = useState(false)
    const [disabled2, isDisabled2] = useState(true)
    const [disabled3, isDisabled3] = useState(false)
    const [disabled4, isDisabled4] = useState(false)
    const [disabled5, isDisabled5] = useState(false)
    const [disabled6, isDisabled6] = useState(false)
    const [disabled7, isDisabled7] = useState(false)
    const [disabled8, isDisabled8] = useState(false)
    const [disabled9, isDisabled9] = useState(false)
    const [disabled10, isDisabled10] = useState(true)
    const [disabled11, isDisabled11] = useState(false)
    const [disabled12, isDisabled12] = useState(false)
    const [disabled13, isDisabled13] = useState(false)
    const [disabled14, isDisabled14] = useState(false)
    const [disabled15, isDisabled15] = useState(false)
    const [disabled16, isDisabled16] = useState(false)
    const [disabled17, isDisabled17] = useState(false)
    const [disabled18, isDisabled18] = useState(false)
    const [currentGraph, updateGraph] = useState(<Scatter data={data1} options={{animation: {duration:0}, plugins: {tooltip: false, legend: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}} }}/>)

    function conc (x) {
        var val1 = map3.get(4*parseInt(value1))
        var val2 = map3.get(4*(parseInt(value2)-9))
        console.log(val1,val2)
        if (parseInt(x) > 9) {
            if (map3.get(4*(parseInt(x)-9)) < x1) {
                changex1(map3.get(4*(parseInt(x)-9)))
                changex2(map3.get(4*(parseInt(x)-9)+1))
                changey1(map3.get(4*(parseInt(x)-9)+2))
                changey2(map3.get(4*(parseInt(x)-9)+3))
            } else {
                    if (parseInt(x)-9 > parseInt(value1)){
                        changex1(map3.get(4*(parseInt(x)-9)))
                        changex2(map3.get(4*(parseInt(x)-9)+1))
                        changey1(map3.get(4*(parseInt(x)-9)+2))
                        changey2(map3.get(4*(parseInt(x)-9)+3))
                    }
                    else {
                        changex1(map3.get(4*parseInt(value1)))
                        changex2(map3.get(4*parseInt(value1)+1))
                        changey1(map3.get(4*parseInt(value1)+2))
                        changey2(map3.get(4*parseInt(value1)+3))
                    }
            } 
        } else {
            if (map3.get(4*parseInt(x)) < x1) {
                changex1(map3.get(4*parseInt(x)))
                changex2(map3.get(4*parseInt(x)+1))
                changey1(map3.get(4*parseInt(x)+2))
                changey2(map3.get(4*parseInt(x)+3))
            } else {
                    if (parseInt(x) > parseInt(value2)-9) {
                        changex1(map3.get(4*parseInt(x)))
                        changex2(map3.get(4*parseInt(x)+1))
                        changey1(map3.get(4*parseInt(x)+2))
                        changey2(map3.get(4*parseInt(x)+3))
                    }
                    else {
                        changex1(map3.get(4*(parseInt(value2)-9)))
                        changex2(map3.get(4*(parseInt(value2)-9)+1))
                        changey1(map3.get(4*(parseInt(value2)-9)+2))
                        changey2(map3.get(4*(parseInt(value2)-9)+3))
                    }
            console.log('changed')
            console.log(value1)
        }}


        if (x == '1') {
            isDisabled10(true)
            isDisabled11(false) 
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '2') {
            isDisabled10(false)
            isDisabled11(true)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '3') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(true)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '4') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(true)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '5') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(true)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '6') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(true)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '7') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(true)
            isDisabled17(false)
            isDisabled18(false)
        } else if (x == '8') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(true)
            isDisabled18(false)
        } else if (x == '9') {
            isDisabled10(false)
            isDisabled11(false)
            isDisabled12(false)
            isDisabled13(false)
            isDisabled14(false)
            isDisabled15(false)
            isDisabled16(false)
            isDisabled17(false)
            isDisabled18(true)
        } else if (x == '10') {
            isDisabled1(true)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '11') {
            isDisabled1(false)
            isDisabled2(true)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '12') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(true)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '13') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(true)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '14') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(true)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '15') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(true)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '16') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(true)
            isDisabled8(false)
            isDisabled9(false)
        } else if (x == '17') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(true)
            isDisabled9(false)
        } else if (x == '18') {
            isDisabled1(false)
            isDisabled2(false)
            isDisabled3(false)
            isDisabled4(false)
            isDisabled5(false)
            isDisabled6(false)
            isDisabled7(false)
            isDisabled8(false)
            isDisabled9(true)
        }

    }
    function wrapper1(x1) {
        setValue1(x1)
        conc(x1)
    }
    function wrapper2(x2) {
        setValue2(x2)
        conc(x2)
    }
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
    async function drawLine() {
        console.log(data1.datasets[3].borderWidth, 'yep')
        ctime(0)
        changeAnimation(true)
        if (map1.get(parseInt(value1))<map1.get(parseInt(value2)-9)) {
            // value 2 has larger orbital period
            data1.datasets[3].borderWidth = valuee4*0.25
            data1.datasets[1].label = map4.get(parseInt(value1))
            data1.datasets[2].label = map4.get(parseInt(value2)-9)
            updateGraph(<Scatter data={data1} options={{animation:false, plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}}}} redraw={true}/>)
            console.log(value1, value2)
            console.log(map7.get(parseInt(value2)-9)/map7.get(parseInt(value1)))
            var counter = 0
            for (let i = 1; i < Math.round((valuee2*1000)/valuee1); ++i) {
                ctime((Math.round((time + (i/Math.round((valuee2*1000)/valuee1))*valuee2*map1.get(parseInt(value2)-9))*100))/100)
                counter += 1
                await delay(0)
                //
                data1.datasets[1].data[0] = {x:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))    *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value1)))),     y:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))    *Math.sin(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))}
                data1.datasets[2].data[0] = {x:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get((parseInt(value2)-9))))*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9))), y:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9))))*Math.sin(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9)))}
                if (counter == Math.round(valuee3/valuee1)) {
                    //
                    data1.datasets[3].data.push({x:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))    *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value1)))),     y:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))    *Math.sin(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value1))))})
                    data1.datasets[3].data.push({x:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*map7.get(parseInt(value2)-9)/map7.get((parseInt(value2)-9))))*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9))), y:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9))))*Math.sin(((2*Math.PI*i*valuee2)/Math.round((valuee2*1000)/valuee1))*(map7.get(parseInt(value2)-9)/map7.get(parseInt(value2)-9)))})
                    data1.datasets[3].data.push({x: null, y: null})
                    counter = 0
                }
                await updateGraph(<Scatter data={data1} options={{animation:false, plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}}}}/>)
            }
        } else {
            // value 1 has larger orbital period
            data1.datasets[3].borderWidth = valuee4*0.25
            data1.datasets[1].label = map4.get(parseInt(value2)-9)
            data1.datasets[2].label = map4.get(parseInt(value1))
            updateGraph(<Scatter data={data1} options={{animation:false, plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}}}} redraw={true}/>)
            var counter = 0
            for (let i = 1; i < Math.round((valuee2*1000)/valuee1); ++i) {
                ctime((Math.round((time + (i/Math.round((valuee2*1000)/valuee1))*valuee2*map1.get(parseInt(value1)))*100))/100)
                counter += 1
                await delay(0)
                data1.datasets[2].data[0] = {x:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get(parseInt(value1))))    *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get(parseInt(value1)))),     y:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get(parseInt(value1))))    *Math.sin(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get(parseInt(value1))))}
                data1.datasets[1].data[0] = {x:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9))))*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get((parseInt(value2)-9)))), y:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9))))*Math.sin(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9)))}
                if (counter == Math.round(valuee3/valuee1)) {
                    data1.datasets[3].data.push({x:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get(parseInt(value1))))    *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get(parseInt(value1)))),     y:(map5.get(parseInt(value1))  *(1-map6.get(parseInt(value1))  **2))/(1-map6.get(parseInt(value1))  *Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get(parseInt(value1))))    *Math.sin(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get(parseInt(value1))))}, {x:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9))))*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*(map7.get(parseInt(value1))/map7.get((parseInt(value2)-9)))), y:(map5.get(parseInt(value2)-9)*(1-map6.get(parseInt(value2)-9)**2))/(1-map6.get(parseInt(value2)-9)*Math.cos(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9))))*Math.sin(((2*Math.PI*i*valuee2)/((valuee2*1000)/valuee1))*map7.get(parseInt(value1))/map7.get((parseInt(value2)-9)))}, {x: null, y: null})
                    counter = 0
            }
                await updateGraph(<Scatter data={data1} options={{animation:false, plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}}}}/>)
            }

        }
    updateGraph(<Scatter data={data1} options={{animation:false, plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:y1, max:y2, title: {display: true, text: 'y [AU]'}}, x: {min:x1, max:x2, title: {display: true, text: 'x [AU]'}}}}}/>)
    console.log(data1.datasets[1].data)
    console.log(data1)
    changeAnimation(false)
    }
    function stopAnimation() {
        updateGraph(<Scatter data={originalData} options={{animation:false, plugins: {tooltip: false, legend: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-20, max:20, title: {display: true, text: 'y [AU]'}}, x: {min:-20, max:20, title: {display: true, text: 'x [AU]'}}} }}/>)
        changeAnimation(false)
    }
    return(
        <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
            <Row>
                <Col span={12}>

            <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 6</h1>
            We need to create a cartesian plot of elliptical orbit
            {x1}, {valuee3}
                </Col>
                <Col span={12}>
                    <center>

            <div style={{margin:'20px', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
            <div style={{width:'100%', height:'auto'}}>
            <Row>
                <Col span={4}>
                    <div style={{margin:'10px'}}>
                <Select style={{width:'100%'}}
    showSearch
    optionFilterProp="children"
    disabled={animation}
    onSelect={wrapper1}
    value={value1}
    filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
        {
        value: '1',
        label: 'Mercury',
        disabled: disabled1
    },
    {
          value: '2',
          label: 'Venus',
          disabled: disabled2
        },
        {
            value: '3',
            label: 'Earth',
            disabled: disabled3
        },
        {
            value: '4',
            label: 'Mars',
            disabled: disabled4
        },
        {
            value: '5',
            label: 'Jupiter',
            disabled: disabled5
        },
        {
            value: '6',
            label: 'Saturn',
            disabled: disabled6
        },
        {
            value: '7',
            label: 'Uranus',
            disabled: disabled7
        },
        {
            value: '8',
            label: 'Neptune',
            disabled: disabled8
        },
        {
            value: '9',
            label: 'Pluto',
            disabled: disabled9
        },
    ]}
    />
    </div>
                    <div style={{margin:'10px'}}>

                <Select style={{width:'100%'}}
    showSearch
    disabled={animation}
    onSelect={wrapper2}
    value={value2}
    optionFilterProp="children"
    filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
        {
        value: '10',
        label: 'Mercury',
        disabled:disabled10
    },
    {
        value: '11',
        label: 'Venus',
        disabled: disabled11
    },
    {
        value: '12',
        label: 'Earth',
        disabled: disabled12
    },
    {
        value: '13',
        label: 'Mars',
        disabled: disabled13
    },
    {
        value: '14',
        label: 'Jupiter',
        disabled: disabled14
        },
        {
            value: '15',
            label: 'Saturn',
            disabled: disabled15
        },
        {
            value: '16',
            label: 'Uranus',
            disabled: disabled16
        },
        {
            value: '17',
            label: 'Neptune',
            disabled: disabled17
        },
        {
            value: '18',
            label: 'Pluto',
            disabled: disabled18
        },
    ]}
    />
    </div>
                </Col>
                <Col span={1}>
                <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                </Col>
                <Col span={4}>
                <div style={{padding:'10px', margin: '0', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%'}}>
                    <div>
                <Row>
                Speed:
                </Row>
                <Slider disabled={animation} defaultValue={1} max={10} min={1}  onChange={setValuee1} value={valuee1} style={{marginBottom:'0px', marginTop:'5px'}}/>
                    </div>
                    <div>
                    <Row>
                Orbits:
                </Row>
                <Slider disabled={animation} defaultValue={1} max={10} min={1}  onChange={setValuee2} value={valuee2} style={{marginBottom:'0px', marginTop:'5px'}}/>
                    </div>
                </div>
                </Col>
                <Col span={1}><Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' /></Col>
                <Col span={5}>
                    <div style={{padding:'10px', margin: '0', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%'}}>
                        <Button type='primary' disabled={animation} style={{marginBottom: '10px', width:'100%', whiteSpace: "normal"}} onClick={drawLine}>Start Animation</Button>
                        <Button type='primary' disabled={!animation} style={{width:'100%'}} onClick={stopAnimation}>Stop Animation</Button>
                    </div>
                </Col>
                <Col span={1}>
                <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                </Col>
                <Col span={4}>
                <div style={{padding:'10px', margin: '0', position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '100%'}}>
                    <div>
                <Row>
                Line Spacing:
                </Row>
                <Slider disabled={animation} defaultValue={1} max={50} min={5} step={5}  onChange={setValuee3} value={valuee3} style={{marginBottom:'0px', marginTop:'5px'}}/>
                    </div>
                    <div>
                    <Row>
                Line Thickness:
                </Row>
                <Slider disabled={animation} defaultValue={1} max={10} min={1}  onChange={setValuee4} value={valuee4} style={{marginBottom:'0px', marginTop:'5px'}}/>
                    </div>
                </div>
                </Col>
                <Col span={1}>
                <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                </Col>
                <Col span={2}>
                <p style={{fontWeight:'bolder'}}>Time</p>
                {time} Year(s)
                </Col>
            </Row>
            {currentGraph}
            </div>
            </div>
            </center>
                </Col>
            </Row>
        </div>
    )
}