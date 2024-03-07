import React, { useState } from 'react';
import { Space, Table, Tabs, Row, Col, Button } from 'antd';
import {motion} from 'framer-motion'
import Latex from 'react-latex-next';
import "katex/dist/katex.min.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    TabList,
    Tab,
    TabPanels,
    TabPanel,

  } from "@chakra-ui/react"

import {chart1} from './Contents/Problem 1'
import {chart2} from './Contents/Problem 1';

export default function ProblemOne () {
    const tex1= "$$P^2\\thickapprox \\frac{4\\pi}{GM}a^3 $$"
    const tex2= "$$P\\thickapprox \\sqrt{\\frac{4\\pi}{GM}}a^\\frac{3}{2} ,  k = \\sqrt{\\frac{4\\pi}{GM}}$$"
    const tex3= "$$P = k\\times a^\\frac{3}{2}$$"
    const tex4= "$$P \\propto a^\\frac{3}{2}$$"
    const tex5= "$y=x$"
    const tex6= "$(R^2)$"
    const tex7= "$(r)$"
    const tex8= "$$r = \\left[\\frac{n(\\sum xy)-(\\sum x)(\\sum y)}{\\sqrt{n(\\sum x^2-(\\sum x)^2)\\times n(\\sum y^2-(\\sum y)^2)}}\\right]$$"
    const tex9= "$$\\left[\\frac{64592.4076}{64592.4088}\\right] = 0.999... \\thickapprox 1$$"
    const tex10= "$$r = 1$$"
    const tex11= "$$r^2 = R^2$$"
    const tex12= "$$1^2 = 1$$"
    const tex13= "$$R^2 = 1$$" 
    const tex14 = "$a$ [AU]"
    const tex15 = "$P$ [Years]"
    const tex16 = "$a^\\frac{3}{2}$ [AU], $P$ [Years]"
    const tex17 = "$a^\\frac{3}{2}$ [AU]"
const { isOpen, onOpen, onClose } = useDisclosure()
const columns3 = [
    {
      title: 'Planet',
      dataIndex: 'one',
    },
    {
      title: <Latex>{tex17}</Latex>,
      dataIndex: 'two',
    },
    {
      title: <Latex>{tex15}</Latex>,
      dataIndex: 'three',
    },
  ];
const columns1 = [
  {
    title: 'Planet',
    dataIndex: 'one',
  },
  {
    title: <Latex>{tex14}</Latex>,
    dataIndex: 'two',
  },
  {
    title: <Latex>{tex15}</Latex>,
    dataIndex: 'three',
  },
];
const data3 = [
    {
      one: 'Saturn',
      two: '29.65',
      three: '29.63',
    },
    {
      one: 'Uranus',
      two: '84.72',
      three: '84.75',
    },
    {
      one: 'Jupiter',
      two: '11.86',
      three: '11.86',
    },
    {
      one: 'Neptune', 
      two: '166.38',
      three: '166.34',
    },
    {
      one: 'Pluto',
      two: '248.35',
      three: '248.35',
    },
    {
      one: 'Mars',
      two: '1.88',
      three: '1.88',
    },
    {
      one: 'Venus',
      two: '0.61',
      three: '0.62',
    },
    {
      one: 'Mercury',
      two: '0.24',
      three: '0.24',
    },
    {
      one: 'Earth',
      two: '1.00',
      three: '1.00',
    },
  ];
const data1 = [
  {
    one: 'Saturn',
    two: '9.58',
    three: '29.63',
  },
  {
    one: 'Uranus',
    two: '19.29',
    three: '84.75',
  },
  {
    one: 'Jupiter',
    two: '5.20',
    three: '11.86',
  },
  {
    one: 'Neptune', 
    two: '30.25',
    three: '166.34',
  },
  {
    one: 'Pluto',
    two: '39.51',
    three: '248.35',
  },
  {
    one: 'Mars',
    two: '1.52',
    three: '1.88',
  },
  {
    one: 'Venus',
    two: '0.72',
    three: '0.62',
  },
  {
    one: 'Mercury',
    two: '0.39',
    three: '0.24',
  },
  {
    one: 'Earth',
    two: '1.00',
    three: '1.00',
  },
];
const items2 = [
    {
      key: '1',
      label: <Latex>$a$ [AU], $P$ [Years]</Latex>,
      children: <Table  columns={columns1} bordered={true} dataSource={data1} />,
    },
    {
      key: '2',
      label: <Latex>{tex16}</Latex>,
      children: <Table  columns={columns3} bordered={true} dataSource={data3} />,
    }
  ];
const texTitle1 = "Plot of: $a$ [AU]"
const texTitle2 = "Plot of: $a^\\frac{3}{2}$ [AU]"
const columns2 = [
    {
      title: '',
      dataIndex: 'one',
    }
  ];
const items = [
    {
      key: '1',
      label: <Latex>{texTitle1}</Latex>,
      children: chart1,
    },
    {
      key: '2',
      label: <Latex>{texTitle2}</Latex>,
      children: chart2,
    }
  ];

return(
    <div style={{padding:'10px', margin:'10px', backgroundColor:'#f5f5f5', borderRadius:'10px', bottom:0}}>
        <Row>
            <Col span={12}>
                <h1 id='contentsItem' style={{color:'black', fontSize:'2rem'}}>Task 1</h1>
                Use the given data to prove a very strong correlation of Kepler III to orbital data for planets in our solar system, if we understand that: 
                <Latex>{tex1}</Latex>
                <Latex>{tex2}</Latex>
                <Latex>{tex3}</Latex>
                Within the context of a planet k is constant, leading to the relationship:
                <Latex>{tex4}</Latex>
                And this direct proportionality relationship can be seen in the second graph. We also see that all the points are very close the the <Latex>{tex5}</Latex> linear line. So we can conclude that there exists a strong correlation between the two but as an extension I am going the coefficient of determination <Latex>{tex6}</Latex> and the Pearson correlation coefficient <Latex>{tex7}</Latex> for the second graph.
                <h1 id='contentsItem' style={{color:'black', fontSize:'1rem'}}>Pearson Correlation Coefficient <Latex>{tex7}</Latex></h1>
                <Latex>{tex8}</Latex>
                <Latex>{tex9}</Latex>
                <Latex>{tex10}</Latex>
                By understanding that the Coefficient of Determination <Latex>{tex6}</Latex> is the square of the Pearson correlation coefficient <Latex>{tex7}</Latex> we can square our answer to find <Latex>$R^2$</Latex>.
                <h1 id='contentsItem' style={{color:'black', fontSize:'1rem'}}>Coefficient of Determination <Latex>{tex6}</Latex></h1>
                <Latex>{tex11}</Latex>
                <Latex>{tex12}</Latex>
                <Latex>{tex13}</Latex>
                We have proven that there exists an exact direct positive proportional relationship between orbital period and the Semi-major axis (in au) to the power one and a half.
            </Col>
            <Col span={12}>
                <center>
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} style={{margin:'20px', width:'min-content', height:'auto', padding:'10px', backgroundColor:'#FFFFFF', borderRadius:'10px'}}>
            <Tabs defaultActiveKey="1" items={items} />
            <Button style={{width:"100%"}} onClick={onOpen} type="primary">
                See data table
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay >
          <ModalContent>
            <ModalHeader>Graph Data</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Tabs defaultActiveKey="1" items={items2}/>                 
               </ModalBody>
          </ModalContent>
        </ModalOverlay>
      </Modal>
        </motion.div>
                </center>
            </Col>
        </Row>
    </div>
    )
}

