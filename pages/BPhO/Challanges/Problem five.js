import {Col, Row, Select} from 'antd'
import {motion} from 'framer-motion'
import Latex from 'react-latex-next'
import { Divider } from '@chakra-ui/react'

import React, {useState} from 'react'
import { Scatter } from 'react-chartjs-2'
import { data9, data8, data7, data6, data5, data4, data3, data2, data1 } from './Contents/Problem 5'

export default function ProblemFive() {
    const [value1, setvalue1] = useState('1')
    const [chart, newChart] = useState(<Scatter data={data1} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:0.8, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    const [eccentirity, ceccentricity] = useState(0.21)
    const [period, cperiod] = useState(0.241)

    const Latex1 = '$$\\varepsilon \\ll 1 \\iff t \\approx P(\\theta - \\theta_0)$$'
    const Latex2 = '$\\varepsilon\<1$'
    const Latex3 = '$t$ ≠ $\\infty$'
    const Latex4 = '$\\varepsilon\>1$'
    const Latex5 = '$\\varepsilon$ = Orbital Eccentricity $\\\\$'
    const Latex6 = '$t$ = Orbital Time $\\\\$'
    const Latex7 = '$P$ = Orbital Period$\\\\$'
    const Latex8 = '$\\theta$ = Orbit Angle$\\\\$'
    const Latex9 = '$\\varepsilon$'
    const Latex10 = '$\\theta_0 = 0$'

    const map1 = new Map()
    map1.set(1, 0.21)
    map1.set(2, 0.01)
    map1.set(3, 0.02)
    map1.set(4, 0.09)
    map1.set(5, 0.05)
    map1.set(6, 0.06)
    map1.set(7, 0.05)
    map1.set(8, 0.01)
    map1.set(9, 0.25)

    const map2 = new Map()
    map2.set(1, 0.241)
    map2.set(2, 0.615)
    map2.set(3, 1.00)
    map2.set(4, 1.811)
    map2.set(5, 11.861)
    map2.set(6, 29.628)
    map2.set(7, 84.747)
    map2.set(8, 166.344)
    map2.set(9, 248.348)

    const map3 = new Map()
    map3.set(1, <Scatter data={data1} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:0.8, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(2, <Scatter data={data2} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:2, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(3, <Scatter data={data3} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:3, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(4, <Scatter data={data4} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:5.5, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(5, <Scatter data={data5} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:40, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(6, <Scatter data={data6} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:100, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(7, <Scatter data={data7} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:300, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(8, <Scatter data={data8} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:500, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)
    map3.set(9, <Scatter data={data9} options={{animation:false, parsing:false, normalized: true , plugins: {tooltip: false}, maintainAspectRatio:true, aspectRatio:1 , scales:{y: {min:0, max:20, title: {display: true, text: 'Orbit Polar Angle [Rad]'}}, x: {min:0, max:800, title: {display: true, text: 'Time [Years]'}}} }} update={true}/>)

    function changeValue(v) {
        setvalue1(v)
        ceccentricity(map1.get(parseInt(v)))
        cperiod(map2.get(parseInt(v)))
        newChart(map3.get(parseInt(v)))
    }


    return(
        <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
        <Row>
            <Col span={12}>

            <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 5</h1>
            We can write the relationship between orbital eccentricity and orbital period with the following logic expression:
            <Row>
                <Col span={17}>

            <Latex>{Latex1}</Latex>
            We also know that <Latex>{Latex2}</Latex> has to be true if <Latex>{Latex3}</Latex> as if orbital eccentirity hits 1 or higher it will not return, its orbital conic in this case can be modelled more of as a parabolla rather than an eclipse and for <Latex>{Latex4}</Latex> its conic becomes a hyperbola.
                </Col>
                <Col span={1}>
                <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                </Col>
                <Col span={6}>
                    <center>
                        <div style={{textAlign:'left'}}>
                        <Latex>{Latex5}</Latex>
                        <Latex>{Latex6}</Latex>
                        <Latex>{Latex7}</Latex>
                        <Latex>{Latex8}</Latex>
                        <Latex>{Latex10}</Latex>
                        </div>
                    </center>
                </Col>
            </Row>
            In the graph for each planet I have computed the time taken for three orbital periods, this was chosen as to replicate the graphs shown in the presentation powerpoint.
            </Col>
            <Col span={12}>
                <center>

            <div style={{margin:'20px', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
            <Row>
                <Col span={8}>

            <Select style={{width:'100%'}}
    showSearch
    optionFilterProp="children"
    onSelect={changeValue}
    value={value1}
    filterOption={(input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
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
    ]}
    />

    </Col>
    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
    <Col span={7}>
        <center>
            <Latex>{Latex9}</Latex> = {eccentirity}
            </center>
    </Col>
    <Col span={1}>
                        <Divider style={{height:'100%', left:'50%', position:'absolute'}} orientation='vertical' />
                    </Col>
    <Col span={7}>
        <center>
            Orbital Period = {period} Year(s)
        </center>
    </Col>
    </Row>
    <div style={{width:'100%', height:'auto'}}>
                {chart}
    </div>
            </div>
    </center>
            </Col>
        </Row>
        </div>
    )
}