import React from 'react';
import { Row, Col } from 'antd'

export default function Reports() {
  return (
    <div className='reports'>
      <h1>Reports</h1>
      <Row>
      <Col span={11}></Col>
      <Col span={4}><h1 id='headerTitle'>Credits</h1></Col>
      <Col span={9}></Col>
      </Row>
    </div>
  );
}


