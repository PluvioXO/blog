import React, { useState } from 'react';
import './Photos.css'
import { PhotoData } from './photosData';
import { Link } from 'react-router-dom';
import { Row, Col} from 'antd'
import { color, motion, useScroll } from 'framer-motion'

export default function Photos() {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  //}

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  const [backgroundLayer, changeOpacity] = useState()
  const [button, buttonContents] = useState()
  const [x, xChange] = useState(9)
  const [imagePrompt, toNull] = useState(<motion.div style={{zIndex:'4', bottom:'10px', width:'100%', userSelect: 'none', justifyContent:'center', padding:'10px', position:'fixed', display:'flex', fontWeight: 'bold', cursor:'default',
  color: '#F3F4F6', fontSize: '0.9rem'}} initial={{opacity:1}} onHoverStart={() => toNull(<motion.div style={{zIndex:'4', userSelect: 'none', cursor:'default', bottom:'10px', width:'100%', justifyContent:'center', padding:'10px', position:'fixed', display:'flex', fontWeight: 'bold',
  color: '#F3F4F6', fontSize: '0.9rem'}} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2}} onHoverStart={() => setTimeout(() => {toNull()}, 2000)}>Tap to open an image.</motion.div>)}>Tap to open an image.</motion.div>)
  const [imageLoading, setImageLoading] = useState(true)
  const imageLoaded = () => {
    setImageLoading(false)   
  }
  function clearOverlay() {
    changeOpacity()
    changeOverlay()
  }
  const progress = (document.body.scrollTop / ( document.body.scrollHeight - window.innerHeight ) ) * 100
  const [currentOverlay, changeOverlay] = useState()

  function imageOverlay(index) {

    toNull(<motion.div style={{zIndex:'4', bottom:'10px', width:'100%', justifyContent:'center', padding:'10px', position:'fixed', display:'flex', fontWeight: 'bold',
    color: '#F3F4F6', fontSize: '0.9rem'}} initial={{opacity:1}} animate={{opacity:0}} transition={{duration:2}} onLoad={() => setTimeout(() => {toNull()}, 2000)}>Tap to open an image.</motion.div>)

    changeOpacity(
      <motion.div style={{backgroundColor:'black', width:'100%', height:'100%', position:'fixed', zIndex:'1'}} initial={{opacity:0}} animate={{opacity:0.5}} transition={{duration:1}}  onClick={() => clearOverlay()}/>
    )

    //Pass the index into the state for showing the image
      changeOverlay(
        <motion.div style={{width:'min-content', height:'700px', padding:'10px', backgroundColor:'white', zIndex:'4', borderRadius:'10px', position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        margin: "auto"}} initial="hidden" animate="visible" variants={variants}>

          <div style={{width:'20px', height:'20px', right:'10px', position:'absolute', top:'10px'}}>
          <motion.svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            onClick={() => clearOverlay()}
            style={{borderRadius:'50%', cursor:'pointer', backgroundColor:'white'}}>
              <motion.line
                x1="5"
                y1="5"
                x2="15"
                y2="15"
                stroke="#9CA3AF"
                variants={draw}
                strokeLinecap="round"
                strokeWidth="3px"
                custom={0}
                />
              <motion.line
                x1="5"
                y1="15"
                x2="15"
                y2="5"
                stroke="#9CA3AF"
                variants={draw}
                strokeLinecap="round"
                strokeWidth="3px"
                custom={0.5}
                />
      </motion.svg>
          </div>
          <div style={{width:'min-content', height:'680px', display: 'flex'}}>
            <div>
              <motion.img src={PhotoData[index].item} style={{borderRadius:'5px', height:'100%', width:'auto', userSelect: 'none', maxWidth:'none'}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.25, duration:1}}/> 
            </div>
            <motion.svg
              width='20px'
              height="680px"
              viewBox="0 0 20 680"
              >
              <motion.line 
                x1="8"
                y1="20"
                x2="8"
                y2="660"
                strokeWidth="4px"
                strokeLinecap="round"
                stroke="#d2d5db"
                variants={draw}
                custom={0.5}
              />
            </motion.svg>
            <div />
            <div style={{margin:'20px', userSelect: 'none', textAlign:'right'}}>
            </div>
            <div style={{bottom:'10px', position:'absolute', right:'10px', cursor:'pointer', marginBottom:0}}>
              <Link to={PhotoData[index].item}>
                <motion.svg
                  width='33px'
                  height="31px"
                  viewBox="0 0 33 31"
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    stroke="#9CA3AF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"
                    variants={draw}
                    custom={1}
                    d="M3 19.0783V25.4228C3 26.1244 3.28604 26.7957 3.79209 27.2817V27.2817C4.27207 27.7426 4.91174 28 5.5772 28H27.0542C27.8878 28 28.6824 27.6468 29.241 27.0279V27.0279C29.7296 26.4866 30 25.7834 30 25.0542V19.0782M16.5 3V19.2452M16.5 19.2452L10.4358 13.2338M16.5 19.2452L22.5641 13.2338"/>
                </motion.svg>
              </Link>
            </div>
          </div>
       
          
         
        </motion.div>
      )
  } 
  function loadMoreImages () {
    xChange(x+8)
  }


  return (
    <motion.div initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    {backgroundLayer}
    {imagePrompt}
    <Row>
    <Col span={9}></Col>
    <Col span={6}><h1 id='headerTitle' style={{textAlign:'center', cursor:'default', userSelect: 'none'}}>Photo Collection</h1></Col>
    <Col span={9}></Col>
    </Row>
    <Row>
    <Col span={3}></Col>
    <Col span={18}>
    <div style={{justifyContent:'space-evenly', display:'flex'}}>
    <Row>
    {currentOverlay}

    {PhotoData.slice(0, x).map((item, index) => {
      return (
        <Col span={6}>
        <motion.div onClick={() => imageOverlay(index)} className={"image"+index} key={index} id='spcFX' style={{margin:'1rem', width:'21em', cursor:'pointer'}}>
                  <span id='imagePreviewText' style={{userSelect: 'none'}}>{item.date}</span>
                  <motion.img src={item.item} id='imagePreview' loading='lazy' initial={{opacity:0}} animate={{opacity: imageLoading ? 0:1}} transition={{ opacity: { delay: 0.5, duration: 0.4 } }} onLoad={imageLoaded} style={{width:'21rem', height:'28rem', objectFit:'cover', userSelect: 'none'}}/>
                </motion.div>
            </Col>
              );
            })}

            </Row>
    </div>
    
    </Col>
  <Col span={3} />
  </Row>
  <motion.div onViewportEnter={() => loadMoreImages() }/>
  {button}
  <center>
    <h6 id="contentsItem" style={{color:'#6B7280', fontWeight:'bolder'}}>10 Pictures | 0 Videos</h6>
  </center>
  </motion.div>
  );
}

