import React from 'react'
import { Breadcrumb } from 'antd';

export default function Path() {
    return (
        <Breadcrumb separator=">" style={{ backgroundColor:'#7DD3FC', marginLeft:30}}>
            <Breadcrumb.Item href="/" style={{color:"#7DD3FC"}}>Home</Breadcrumb.Item>
            <Breadcrumb.Item style={{color:"#F3F4F6"}}>About</Breadcrumb.Item>
        </Breadcrumb>
    )
}