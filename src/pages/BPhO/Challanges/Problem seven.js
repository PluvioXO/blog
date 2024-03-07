import { Row, Col, Tabs, Select, Space, Button, Input, InputNumber } from 'antd'
import React, {useState} from 'react'
import { Divider, Progress} from '@chakra-ui/react'
import { motion } from 'framer-motion'

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


export default function ProblemSeven() {
    
    //ONLY FOR 3D REP
    const map1 = new Map()
    map1.set(1, 7.00*Math.PI/180)
    map1.set(2, 3.39*Math.PI/180)
    map1.set(3, 0.00*Math.PI/180)
    map1.set(4, 1.85*Math.PI/180)
    map1.set(5, 1.31*Math.PI/180)
    map1.set(6, 2.49*Math.PI/180)
    map1.set(7, 0.77*Math.PI/180)
    map1.set(8, 1.77*Math.PI/180)
    map1.set(9, 17.5*Math.PI/180)

    const map2 = new Map();
    map2.set(1, 0.387)
    map2.set(2, 0.723)
    map2.set(3, 1.000)
    map2.set(4, 1.523)
    map2.set(5, 5.202)
    map2.set(6, 9.576)
    map2.set(7, 19.293)
    map2.set(8, 30.246)
    map2.set(9, 39.509)

    const map3 = new Map();
    map3.set(1, 0.21)
    map3.set(2, 0.01)
    map3.set(3, 0.02)
    map3.set(4, 0.09)
    map3.set(5, 0.05)
    map3.set(6, 0.06)
    map3.set(7, 0.05)
    map3.set(8, 0.01)
    map3.set(9, 0.25)

    const map4 = new Map();
    map4.set(1, 0.241)
    map4.set(2, 0.615)
    map4.set(3, 1.000)
    map4.set(4, 1.881)
    map4.set(5, 11.861)
    map4.set(6, 29.628)
    map4.set(7, 84.747)
    map4.set(8, 166.344)
    map4.set(9, 248.348)

    const map5 = new Map();
    map5.set(1, 'Mercury')
    map5.set(2, 'Venus')
    map5.set(3, 'Earth')
    map5.set(4, 'Mars')
    map5.set(5, 'Jupiter')
    map5.set(6, 'Saturn')
    map5.set(7, 'Uranus')
    map5.set(8, 'Mercury')
    map5.set(9, 'Pluto')

    const map6 = new Map();
    map6.set(1, 'grey')
    map6.set(2, 'orange')
    map6.set(3, 'blue')
    map6.set(4, 'red')
    map6.set(5, 'purple')
    map6.set(6, 'orange')
    map6.set(7, 'grey')
    map6.set(8, 'blue')
    map6.set(9, 'green')

    const map7 = new Map()
    map7.set(0, -2)
    map7.set(1, 2)
    map7.set(2, -2)
    map7.set(3, 2)
    map7.set(4, -2)
    map7.set(5, 2)
    map7.set(6, -2)
    map7.set(7, 2)
    map7.set(8, -2)
    map7.set(9, 2)
    map7.set(10, -2)
    map7.set(11, 2)
    map7.set(12, -2)
    map7.set(13, 2)
    map7.set(14, -2)
    map7.set(15, 2)
//Start of actual map
    map7.set(16 , -4)
    map7.set(17 , 4)
    map7.set(18 , -4)
    map7.set(19 , 4)
    map7.set(20 , -10)
    map7.set(21 , 10)
    map7.set(22 ,-10)
    map7.set(23 ,10)
    map7.set(24 ,-10)
    map7.set(25 ,10)
    map7.set(26 ,-10)
    map7.set(27 ,10)
    map7.set(28 ,-20)
    map7.set(29 ,20)
    map7.set(30 ,-20)
    map7.set(31 ,20)
    map7.set(32 ,-30)
    map7.set(33 ,35)
    map7.set(34 ,-35)
    map7.set(35 ,35)
    map7.set(36 ,-60)
    map7.set(37 ,50)
    map7.set(38 ,-50)
    map7.set(39 ,50)

    const[isDisabled, cIsDisabled] = useState(false)
    const[options1, cOptions1] = useState()
    const[value1, cValue1] = useState()
    const[value2, cValue2] = useState()
    const[isDisabledA, cIsDisabledA] = useState(true)
    const[render1, cRender1] = useState()
    const[orbit1, cOrbit1] = useState()
    const[minx, cminx] = useState()
    const[maxx, cmaxx] = useState()
    const[miny,cminy] = useState()
    const[maxy,cmaxy] = useState()
    const options=[
        {
            value: '1',
            label: 'Mercury',
        },
        {
            value: '2',
            label: 'Venus',
        },
        {
            value: '3',
            label: 'Earth',
        },
        {
            value: '4',
            label: 'Mars',
        },
        {
            value: '5',
            label: 'Jupiter',
        },
        {
            value: '6',
            label: 'Saturn',
        },
        {
            value: '7',
            label: 'Uranus',
        },
        {
            value: '8',
            label: 'Neptune',
        },
        {
            value: '9',
            label: 'Pluto',
        },
    ]
    
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
    function firstPlanet (x) {
        let t = [
            {
                value: '1',
                label: 'Mercury',
            },
            {
                value: '2',
                label: 'Venus',
            },
            {
                value: '3',
                label: 'Earth',
            },
            {
                value: '4',
                label: 'Mars',
            },
            {
                value: '5',
                label: 'Jupiter',
            },
            {
                value: '6',
                label: 'Saturn',
            },
            {
                value: '7',
                label: 'Uranus',
            },
            {
                value: '8',
                label: 'Neptune',
            },
            {
                value: '9',
                label: 'Pluto',
            },
        ]
        cValue2(x)
        t.splice(x-1, 1)
        cIsDisabled(true)
        cOrbit1(1)
        cIsDisabledA(true)
        cOptions1(t)
        cValue1()
    }
    function anotherOne(x) {
        console.log(x)
        cValue1(x)
        if (x[0] != null) {
        cIsDisabledA(false)} else {
            cIsDisabledA(true)
        }
    }
    function orbitfunc1(x) {
        cOrbit1(x)
    }
    async function startRender() {
        let p = value1
        p.sort()
        p.reverse()
        if (map7.get(parseInt(p[0])*4) < map7.get(parseInt(value2)*4)){
            cminx(map7.get(parseInt(p[0])*4))
            cmaxx(map7.get(parseInt(p[0])*4+1))
            cminy(map7.get(parseInt(p[0])*4+2))
            cmaxy(map7.get(parseInt(p[0])*4+3))
        } else {
            cminx(map7.get(parseInt(value2)*4))
            cmaxx(map7.get(parseInt(value2)*4+1))
            cminy(map7.get(parseInt(value2)*4+2))
            cmaxy(map7.get(parseInt(value2)*4+3))
        }
        cRender1(
            <div style={{marginTop:'1vh'}}>
            <p>Calculating Data, please wait...</p>
            </div>
        )
        // value 2 for first Selector
        // value 1 for second Selector
        await delay(0)
        let data = {datasets: []}
        for (let l =0; l < (value1.length); ++l){
            data.datasets.push({type: 'line', label: map5.get(parseInt(value1[l])), data: [], backgroundColor: 'white', pointRadius: 0, borderWidth: 0.5, pointHoverRadius: 0, borderColor: map6.get(parseInt(value1[l])), showLine: true},)
            for (let i =0; i < (100*orbit1); ++i) {
                data.datasets[l].data.push({x: (((map2.get(parseInt(value1[l]))*(1-map3.get(parseInt(value1[l]))**2))/(1-(map3.get(parseInt(value1[l]))*Math.cos(((2*Math.PI)/100)*i))))*Math.cos(((20*Math.PI)/1000)*i) - ((map2.get(parseInt(value2))*(1-map3.get(parseInt(value2))**2))/(1-(map3.get(parseInt(value2))*Math.cos(((2*Math.PI)/100)*i*(map4.get(parseInt(value1[l]))/map4.get(parseInt(value2)))))))*Math.cos(((20*Math.PI)/1000)*i*(map4.get(parseInt(value1[l]))/map4.get(parseInt(value2))))), y: (((map2.get(parseInt(value1[l]))*(1-map3.get(parseInt(value1[l]))**2))/(1-(map3.get(parseInt(value1[l]))*Math.cos(((2*Math.PI)/100)*i))))*Math.sin(((20*Math.PI)/1000)*i) - ((map2.get(parseInt(value2))*(1-map3.get(parseInt(value2))**2))/(1-(map3.get(parseInt(value2))*Math.cos(((2*Math.PI)/100)*i*(map4.get(parseInt(value1[l]))/map4.get(parseInt(value2)))))))*Math.sin(((20*Math.PI)/1000)*i*(map4.get(parseInt(value1[l]))/map4.get(parseInt(value2)))))},)
        }
    }
        console.log(minx,maxx,miny,maxy)
    cRender1(<div style={{width:'100%', height:'auto'}}>
    <Scatter data={data} options={{plugins: {tooltip: false},aspectRatio:1, maintainAspectRatio:true ,scales:{y: {min:miny, max: maxy, title: {display: true, text: 'y [AU]'}}, x: {min:minx, max:maxx , title: {display: true, text: 'x [AU]'}}} }}/>
    </div>)
    }
    const items = [
        {
            key: '1',
            label: '2D',
            children: 
                <>
            <Row>            
            <Col span={5}>
                <Select 
                value={value2}
                options={options}
                onChange={firstPlanet}
                style={{width:'100%'}}
                placeholder='Please select'/>
            </Col>
            <Col span={1}><Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' /></Col>
            <Col span={5}><Select
      mode="multiple"
      allowClear
      disabled={!isDisabled}
      style={{
        width: '100%',
      }}
      placeholder="Please select"
      value={value1}
      options={options1}
      onChange={anotherOne}
      maxTagCount='responsive'
    /></Col><Col span={1}>
        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
    </Col>
            <Col span={5}><InputNumber onChange={orbitfunc1} disabled={!isDisabled} style={{width:'100%'}} value={orbit1} placeholder='Number of orbits' min={1} max={999} maxLength='3'/></Col>
            <Col span={1}>        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' /></Col>
            <Col span={6}><Button type='primary' onClick={startRender} style={{width:'100%'}} disabled={isDisabledA}>Render</Button></Col>
          </Row>
          <motion.div style={{width:'100%', height: 'auto'}}>
            {render1}
          </motion.div>
          </>,
        },
        {
          key: '2',
          label: '3D',
          children: '',
        }
      ];
    return(
        <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
            <Row>
<Col span={12}>

            <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 7</h1>
            This task computes the data in real time rather than precompute the data in order to ensure accuracy and allow you to customize the plot more. Due to this however you will have to wait for the data to be computed before the plot is shown, this isnt a problem aslong as the Number of Orbits is kept low. The input for Number of Orbits is capped at 999. This is due to firstly to stop the user entering a number too high and crashing their browser and secondly because after 999 you cannot tell the difference a the lines start to fuse together.
</Col>
<Col span={12}>
    <center>
    <div style={{margin:'20px', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
        <div style={{width:'100%', height:'auto'}}>

    <Tabs items={items} />
        </div>
        </div></center>
        </Col>
            </Row>
        </div>
    )
}