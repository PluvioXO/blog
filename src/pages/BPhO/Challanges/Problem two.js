import React, {useState} from 'react'
import Latex from 'react-latex-next';
import { Row, Col, Tabs, Button, Table} from 'antd'
import { motion } from 'framer-motion'
import { chart1, chart2, chart3 } from './Contents/Problem 2';



export default function ProblemTwo() {
    const data = [
        {
          one: 'Saturn',
          two: '29.65',
        },
        {
          one: 'Uranus',
          two: '84.72',
        },
        {
          one: 'Jupiter',
          two: '11.86',
        },
        {
          one: 'Neptune', 
          two: '166.38',
        },
        {
          one: 'Pluto',
          two: '248.35',
        },
        {
          one: 'Mars',
          two: '1.88',
        },
        {
          one: 'Venus',
          two: '0.61',
        },
        {
          one: 'Mercury',
          two: '0.24',
        },
        {
          one: 'Earth',
          two: '1.00',
        },
      ];
      const tex19 = "$\\epsilon$"
      const columns = [
        {
          title: 'Planet',
          dataIndex: 'one',
        },
        {
          title: <Latex>Orbital Eccentricity $(\epsilon)$</Latex>,
          dataIndex: 'two',
        },
      ];
    const tex1 = "$$r=\\frac{a(1-\\epsilon^2)}{1-\\epsilon cos \\theta}, x=r cos\\theta, y=r sin\\theta$$"
    const items = [
        {
          key: '1',
          label: 'Mercury, Venus, Earth and Mars',
          children: chart1,
        },
        {
          key: '2',
          label: 'Jupiter, Saturn, Uranus, Neptune and Pluto',
          children: chart2,
        },
        {
            key: '3',
            label: 'All Planets',
            children: chart3,
        }
      ];
    return(
        <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
            <Row>
                <Col span={12}>
                    <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 2</h1>
                        Using the equations: <Latex>{tex1}</Latex> And calculating the orbital eccentricity <Latex>$(\epsilon)$</Latex> for each planet, we can start to model the planets in cartesian form. From the specification of the challange I used 1,000 linearly spaced angles of <Latex>$\theta$</Latex> taking the range of <Latex>$0 \leq x \leq 2 \pi$</Latex>. Data displayed on the graph to the right is all precomputed and stored, I chose this rather than real time computation as the data wont change and it would significantly damper user experience to have to calculate ~8000 data points per graph. Although the graph is being loaded in real time rather than preloaded and represented as an image. You can hover over the orbit path of each planet to see the individual data points being plotted on the graph.
                        <center>
                            <Table  columns={columns} bordered={true} dataSource={data} />
                        </center>
                </Col>
                <Col span={12}>
                <center>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} style={{margin:'20px', width:'min-content', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
                        <Tabs defaultActiveKey="1" items={items} />
                    </motion.div>
                </center>
                </Col>
            </Row>
            
        </div>
    )
}