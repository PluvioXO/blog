import React, {useState, Component} from 'react'
import { Row, Col, Tabs, InputNumber, Slider, Space, Button } from 'antd'
import { Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { data1, data2} from './Contents/Problem 3'
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
  
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ProblemThree() {
    const [buttonState1, changeButton1] = useState(false)
    const [buttonState2, changeButton2] = useState(false)
    const [allowAnimation, changeAnimation] = useState(true)
    const [time1, changeTime1] = useState(0)
    const [time2, changeTime2] = useState(0)
    const [value1, setValue1] = useState(1);
    const [value2, setValue2] = useState(1);
    const [value3, setValue3] = useState(1);
    const [value4, setValue4] = useState(1);

    const tex1 = "$$\\frac{P_{earth}}{P_{planet}}$$"
    const tex2 = "$O(n^2)$"
    const tex3 = "$O(n)$"

    const map1 = new Map();
    map1.set(1, 160)
    map1.set(2, 80)
    map1.set(3, 50)
    map1.set(4, 40)
    map1.set(5, 30)
    map1.set(6, 20)
    map1.set(7, 20)
    map1.set(8, 20)
    map1.set(9, 14)
    map1.set(10, 20)

    const map2 = new Map();
    map2.set(1, 400)
    map2.set(2, 200)
    map2.set(3, 133)
    map2.set(4, 100)
    map2.set(5, 80)
    map2.set(6, 67)
    map2.set(7, 57)
    map2.set(8, 50)
    map2.set(9, 44)
    map2.set(10, 40)

    const map3 = new Map();
    map3.set(1, 0.387)
    map3.set(2, 0.723)
    map3.set(3, 1.000)
    map3.set(4, 1.523)
    map3.set(5, 5.202)
    map3.set(6, 9.576)
    map3.set(7, 19.293)
    map3.set(8, 30.246)
    map3.set(9, 39.509)

    const map4 = new Map();
    map4.set(1, 0.21)
    map4.set(2, 0.01)
    map4.set(3, 0.02)
    map4.set(4, 0.09)
    map4.set(5, 0.05)
    map4.set(6, 0.06)
    map4.set(7, 0.05)
    map4.set(8, 0.01)
    map4.set(9, 0.25)

    const map5 = new Map();
    map5.set(1, 0.241)
    map5.set(2, 0.615)
    map5.set(3, 1.000)
    map5.set(4, 1.881)
    map5.set(5, 11.861)
    map5.set(6, 29.628)
    map5.set(7, 84.747)
    map5.set(8, 166.344)
    map5.set(9, 248.348)

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
    const [chartNew1, updateChart1] = useState(<Scatter data={data1} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-2, max:2, title: {display: true, text: 'y [AU]'}}, x: {min:-1.5, max:2, title: {display: true, text: 'x [AU]'}}} }}/>)
    const [chartNew2, updateChart2] = useState(<Scatter data={data2} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-40, max:40, title: {display: true, text: 'y [AU]'}}, x: {min:-30, max:50, title: {display: true, text: 'x [AU]'}}} }}/>)
    async function changePlanetValues1() {
        changeButton1(true)

        console.log((value1*Math.round(10000/map1.get(value2))))
        for (let i = 0; i < (value1*Math.round(10000/map1.get(value2))); i++){ 
                data1.datasets[0].data[0] = {x:(map3.get(3)*(1-map4.get(3)**2))/(1-map4.get(3)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))))*Math.cos((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*map5.get(3)), y:(map3.get(3)*(1-map4.get(3)**2))/(1-map4.get(3)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))))*Math.sin((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*map5.get(3))}
                data1.datasets[1].data[0] = {x:(map3.get(4)*(1-map4.get(4)**2))/(1-map4.get(4)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(4)))*Math.cos((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(4)), y:(map3.get(4)*(1-map4.get(4)**2))/(1-map4.get(4)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(4)))*Math.sin((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(4))}
                data1.datasets[2].data[0] = {x:(map3.get(1)*(1-map4.get(1)**2))/(1-map4.get(1)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(1)))*Math.cos((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(1)), y:(map3.get(1)*(1-map4.get(1)**2))/(1-map4.get(1)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(1)))*Math.sin((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(1))}
                data1.datasets[3].data[0] = {x:(map3.get(2)*(1-map4.get(2)**2))/(1-map4.get(2)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(2)))*Math.cos((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(2)), y:(map3.get(2)*(1-map4.get(2)**2))/(1-map4.get(2)*Math.cos(((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2))))*1/map5.get(2)))*Math.sin((2*Math.PI*i*value1)/(value1*Math.round(10000/map1.get(value2)))*1/map5.get(2))}
                
                
                await delay(0)
                await changeTime1((i/(10000/map1.get(value2))))
                await updateChart1(<Scatter data={data1} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-2, max:2, title: {display: true, text: 'y [AU]'}}, x: {min:-1.5, max:2, title: {display: true, text: 'x [AU]'}}} }}/>)
            }
                changeTime1(value1)
        updateChart1(<Scatter data={data1} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-2, max:2, title: {display: true, text: 'y [AU]'}}, x: {min:-1.5, max:2, title: {display: true, text: 'x [AU]'}}} }}/>)
        changeButton1(false)
        await delay(4000)
        changeAnimation(true)
        changeTime1(0)
    }
    async function changePlanetValues2() {
        changeButton2(true)
        for (let i = 0; i < (value3*Math.round(10000/map2.get(value4))); i++){ 
            data2.datasets[1].data[0] = {x:(map3.get(6)*(1-map4.get(6)**2))/(1-map4.get(6)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(6)))*Math.cos((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(6)), y:(map3.get(6)*(1-map4.get(6)**2))/(1-map4.get(6)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(6)))*Math.sin((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(6))}
            data2.datasets[0].data[0] = {x:(map3.get(5)*(1-map4.get(5)**2))/(1-map4.get(5)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(5)))*Math.cos((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(5)), y:(map3.get(5)*(1-map4.get(5)**2))/(1-map4.get(5)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(5)))*Math.sin((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(5))}
            data2.datasets[2].data[0] = {x:(map3.get(7)*(1-map4.get(7)**2))/(1-map4.get(7)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*20.63/map5.get(7)))*Math.cos((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(7)), y:(map3.get(7)*(1-map4.get(7)**2))/(1-map4.get(7)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(7)))*Math.sin((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(7))}
            data2.datasets[3].data[0] = {x:(map3.get(8)*(1-map4.get(8)**2))/(1-map4.get(8)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(8)))*Math.cos((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(8)), y:(map3.get(8)*(1-map4.get(8)**2))/(1-map4.get(8)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(8)))*Math.sin((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(8))}
            data2.datasets[4].data[0] = {x:(map3.get(9)*(1-map4.get(9)**2))/(1-map4.get(9)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(9)))*Math.cos((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(9)), y:(map3.get(9)*(1-map4.get(9)**2))/(1-map4.get(9)*Math.cos(((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4))))*29.63/map5.get(9)))*Math.sin((2*Math.PI*i*value3)/(value3*Math.round(10000/map2.get(value4)))*29.63/map5.get(9))}
            await delay(0)
            await changeTime2(Math.round((29.63*(i/(10000/map2.get(value4))))*100)/100)
            await updateChart2(<Scatter data={data2} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-40, max:40, title: {display: true, text: 'y [AU]'}}, x: {min:-30, max:50, title: {display: true, text: 'x [AU]'}}} }}/>)
        }
            changeTime2(value3*29.63)
    updateChart2(<Scatter data={data2} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:-40, max:40, title: {display: true, text: 'y [AU]'}}, x: {min:-30, max:50, title: {display: true, text: 'x [AU]'}}} }}/>)
    changeButton2(false)
    await delay(4000)
    changeAnimation(true)
    changeTime2(0)
    }
    const items = [
        {
          key: '1',
          label: 'Mercury, Venus, Earth and Mars',
          children: [
            <div style={{width:'700px'}}>
                <Row>
                    <Col span={6}>
                        <Row style={{marginLeft:'20px', marginRight:'20px'}}>
                Number of orbits complete:

                        </Row>
                <Slider disabled={buttonState1} style={{margin:'20px'}} defaultValue={1} max={10} min={1} onChange={setValue1} value={value1}/>
                    </Col>
                    <Col span={1}>
                    <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={6}>
                        <Row style={{marginLeft:'20px'}}>
                Time taken for Earth orbital period (s):
                        </Row>
                <Slider disabled={buttonState1} style={{margin:'20px'}} defaultValue={1} max={10} min={1}  onChange={setValue2} value={value2}/>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={6}>
                        <Button type='primary' disabled={buttonState1} style={{width:'100%', marginTop:'10px'}} onClick={changePlanetValues1}>Start Animation</Button> 
                        <Button type='primary' disabled={!buttonState1} style={{width:'100%', marginTop:'10px'}} onClick={() => console.log('hey')}>Stop Animation</Button>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={3}>
                        <div style={{textAlign:'center'}}>
                            <p style={{fontWeight:'bolder'}}>Time</p>
                            {time1} Year(s)
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
                <div style={{width:'700px', height:'700px'}}>
                {chartNew1}
                </div>
            </div>
          ],
        },
        {
          key: '2',
          label: 'Jupiter, Saturn, Uranus, Neptune and Pluto',
          children: [
            <div style={{width:'700px'}}>
                <Row>
                    <Col span={6}>
                        <Row style={{marginLeft:'20px', marginRight:'20px'}}>
                Number of orbits complete:

                        </Row>
                <Slider disabled={buttonState2} style={{margin:'20px'}} defaultValue={1} max={10} min={1} onChange={setValue3} value={value3}/>
                    </Col>
                    <Col span={1}>
                    <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={6}>
                        <Row style={{marginLeft:'20px'}}>
                Time taken for Saturn orbital period (s):
                        </Row>
                <Slider disabled={buttonState2} style={{margin:'20px'}} defaultValue={1} max={10} min={1}  onChange={setValue4} value={value4}/>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={6}>
                        <Button type='primary' disabled={buttonState2} style={{width:'100%', marginTop:'10px'}} onClick={changePlanetValues2}>Start Animation</Button> 
                        <Button type='primary' disabled={!buttonState2} style={{width:'100%', marginTop:'10px'}} onClick={() => console.log('hey')}>Stop Animation</Button>
                    </Col>
                    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
                    <Col span={3}>
                        <div style={{textAlign:'center'}}>
                            <p style={{fontWeight:'bolder'}}>Time</p>
                            {time2} Year(s)
                        </div>
                    </Col>
                </Row>
                <Row>
                </Row>
                <div style={{width:'700px', height:'700px'}}>
                {chartNew2}
                </div>
            </div>
          ],
        }
      ];
    return(
        <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
            <Row>
            <Col span={12}>
            <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 3</h1>
            The first step is to get a working orbit for earth, from here we can look at how the other planets move inrelative to earth using their Orbital Period, we can quantify the relationship with
            <Latex>{tex1}</Latex> this provides us with a coefficient for our pointer with the product then being rounded which creates the relative orbit effect and allows for certain planets to move faster or slower than others without needed to animate each seperately. Saying if earth moves one how much should mercury move in relative to their orbital period differences. This dramatically increased computation speed and reduced latency from the previous model.
            <h1 id='contentsItem' style={{color:'black', fontSize:'1rem'}}>Time Complexity</h1>
            The previous model of this animation had a computational complexity of <Latex>{tex2}</Latex> due to each planets orbit being calculated inside a nested loop and the constant redrawing of the canvas element that hosts the animation however after incorperating the period coefficients and updating canvas instead of redrawing I was able to decrease the time complexity to <Latex>{tex3}</Latex>.
            <h1 id='contentsItem' style={{color:'black', fontSize:'1rem'}}>Notice</h1>
            Due to the animation being played over the website I cannot ensure that the timings of Earth's orbital period will be exactly what you select on the slider, this is due to possible performance issues on the clients side which could lead to throtteling or a poor internet connection, the animation should still play correctly but just possibly slower than expected.
            
            </Col>
            <Col span={12}>
                <center>

            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} style={{margin:'20px', width:'min-content', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
                    <Tabs defaultActiveKey="1" items={items}/>
            </motion.div>
                </center>
            </Col>
            </Row>
        </div>
    )
}