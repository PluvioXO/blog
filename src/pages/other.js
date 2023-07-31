import React from 'react';
import { Row, Col } from 'antd';
import { CreditData } from './otherData'
import './Credits.css'
import 'antd/dist/antd.css';
export default function other() {
  
  return (
    <div>
      <Row>
      <Col span={11}></Col>
      <Col span={4}><h1 id='headerTitle'>Credits</h1></Col>
      <Col span={9}></Col>
      </Row>
    <Row style={{marginLeft:'10%', marginRight:'10%'}}>
    <Col span={20}>
    {CreditData.map((item, index) => {
      return (
    <Col span={6}>
        <div className={"image"} id='spcFX' style={{margin:'1rem', width:'21em'}}>
          {item.name}
        </div>
            </Col>
      )
    })}
    </Col>
    <Col span={4}>
        <div className='tableOfContents'>    
            <h2 id='contentsTitle'>TABLE OF CONTENTS</h2>
            <h2 id='contentsItem'>Gabriella Zheng</h2>
        </div>
    </Col>
    </Row>
    </div>
  );
}

