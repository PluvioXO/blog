import React, { useState } from 'react';
import {Row, Col, Divider} from 'antd'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { blogData } from './blogData/blogData'

export default function Blog() {
  const [currentBlogData0, changeBlogData0] = useState(blogData.map((item, index) => {
    if (index == 0 || index == 4){
    return (<Col span={24}>
      <motion.div style={{backgroundColor:'rgb(12, 16, 26)', margin:'5px', padding:'10px', borderRadius:'5px', marginBottom:'10px'}}>
      <Link to={"post/" + (index)}>
        <img src={item.image} style={{borderRadius:'5px', width:'100%', height:'auto'}}/>
      <h2 style={{color:'white', fontSize:'1rem', fontWeight:'bolder'}}>{item.name}</h2>
      <div style={{display:'flex'}}>

        {
          item.tag.map((tag, index) => {
            return(
              <p style={{borderRadius:'5px', backgroundColor:'#1d263b', width:'max-content', padding:'0px 5px 0px 5px', color:'#cecece', marginRight:'5px'}}> {tag} </p>
              )
            })
          }
          </div>
          <h2 style={{color:'rgb(32, 36, 46)', margin:0}}>
          Posted: {item.date}
          </h2>
      </Link>
    </motion.div>
          </Col>
    )}}))
    const [currentBlogData1, changeBlogData1] = useState(blogData.map((item, index) => {
      if (index == 1 || index == 5){
      return (<Col span={24}>
        <motion.div style={{backgroundColor:'rgb(12, 16, 26)', margin:'5px', padding:'10px', borderRadius:'5px', marginBottom:'10px'}}>
        <Link to={"post/" + (index)}>
          <img src={item.image} style={{borderRadius:'5px', width:'100%', height:'auto'}}/>
        <h2 style={{color:'white', fontSize:'1rem', fontWeight:'bolder'}}>{item.name}</h2>
        <div style={{display:'flex'}}>
  
          {
            item.tag.map((tag, index) => {
              return(
                <p style={{borderRadius:'5px', backgroundColor:'#1d263b', width:'max-content', padding:'0px 5px 0px 5px', color:'#cecece', marginRight:'5px'}}> {tag} </p>
                )
              })
            }
            </div>
            <h2 style={{color:'rgb(32, 36, 46)', margin:0}}>
            Posted: {item.date}
            </h2>
        </Link>
      </motion.div>
            </Col>
      )}}))
      const [currentBlogData2, changeBlogData2] = useState(blogData.map((item, index) => {
        if (index == 2){
        return (<Col span={24}>
          <motion.div style={{backgroundColor:'rgb(12, 16, 26)', margin:'5px', padding:'10px', borderRadius:'5px', marginBottom:'10px'}}>
          <Link to={"post/" + (index)}>
            <img src={item.image} style={{borderRadius:'5px', width:'100%', height:'auto'}}/>
          <h2 style={{color:'white', fontSize:'1rem', fontWeight:'bolder'}}>{item.name}</h2>
          <div style={{display:'flex'}}>
    
            {
              item.tag.map((tag, index) => {
                return(
                  <p style={{borderRadius:'5px', backgroundColor:'#1d263b', width:'max-content', padding:'0px 5px 0px 5px', color:'#cecece', marginRight:'5px'}}> {tag} </p>
                  )
                })
              }
              </div>
              <h2 style={{color:'rgb(32, 36, 46)', margin:0}}>
              Posted: {item.date}
              </h2>
          </Link>
        </motion.div>
              </Col>
        )}}))
        const [currentBlogData3, changeBlogData3] = useState(blogData.map((item, index) => {
          if (index == 3){
          return (<Col span={24}>
            <motion.div style={{backgroundColor:'rgb(12, 16, 26)', margin:'5px', padding:'10px', borderRadius:'5px', marginBottom:'10px'}}>
            <Link to={"post/" + (index)}>
              <img src={item.image} style={{borderRadius:'5px', width:'100%', height:'auto'}}/>
            <h2 style={{color:'white', fontSize:'1rem', fontWeight:'bolder'}}>{item.name}</h2>
            <div style={{display:'flex'}}>
      
              {
                item.tag.map((tag, index) => {
                  return(
                    <p style={{borderRadius:'5px', backgroundColor:'#1d263b', width:'max-content', padding:'0px 5px 0px 5px', color:'#cecece', marginRight:'5px'}}> {tag} </p>
                    )
                  })
                }
                </div>
                <h2 style={{color:'rgb(32, 36, 46)', margin:0}}>
                Posted: {item.date}
                </h2>
            </Link>
          </motion.div>
                </Col>
          )}}))
  return (
    <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row>
      <Col span={3}></Col>
      <Col span={18}>
        <h1 id='headerTitle' style={{textAlign: 'center', cursor: 'default', userSelect: 'none'}}>Blog</h1>
        <div>
          <Row>
        <Col span={6}>
        {currentBlogData0}
        </Col>
        <Col span={6}>
        {currentBlogData1}
        </Col>
        <Col span={6}>
        {currentBlogData2}
        </Col>
        <Col span={6}>
        {currentBlogData3}
        </Col>
          </Row>
        </div>
      </Col>
      <Col span={3}></Col>
    </Row>
    </motion.div>
  );
}
