
import React, { useState } from 'react';
import { Row, Col, Button} from 'antd'
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion'
import './Explanation Paper.css'
import pdfFile from './Contents/Man_AHL_Analysis_Active_Risk_Management_in_Practice_English_(United_States)_22-09-2021.pdf'
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ComputationPaper() {
  const[x, xChange] = useState(1)
  const[numPages, setNumPages] = useState(null);
  const[l, cl] = useState(true)
  const[r, cr] = useState(false)
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function pageLeft() {
    cr(false)
    if (x!=1) {
      xChange(x-1)
    } else{ 
        cl(true)
    }
    console.log(l)
  }
  function pageRight() {
    cl(false)
    if (x!=numPages) {
      xChange(x+1)
    }
    else{
        cr(true)
    }
  }
  return(
      <Row>
      <Col span={4} />
      <Col span={16}>  
      <center>
        <div style={{position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0",
        margin: "auto",
        height: "min-content"}}>
      <div style={{height:'100%', width:'min-content', borderStyle:'solid', borderWidth:'thin', borderColor:'grey'}}>
      <Document file={pdfFile}  onLoadSuccess={onDocumentLoadSuccess}>
        <div style={{height:'min-content', marginBottom:'10px', zIndex:'5', backgroundColor:'white', width:'max-content', position:'fixed', bottom:'12.5%',
        left: "0",
        right: "0",
        margin: "auto",
        opacity:0.5}}>
        <Row>
          <Col span={6}><center><Button onClick={pageLeft} disabled={l} style={{borderBottomLeftRadius:'10px', borderTopLeftRadius: '10px'}}>←</Button></center></Col>
          <Col span={12} style={{textAlign:'center'}}><div style={{userSelect:'none', paddingLeft:'10px'}}>{x} of {numPages}</div></Col>
          <Col span={6}><Button onClick={pageRight} disabled={r} style={{borderBottomRightRadius:'10px', borderTopRightRadius: '10px'}}>→</Button></Col>
        </Row>
      </div>
            <Page pageNumber={x} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      </div>
      </div>
      </center>  
      </Col>
        <Col span={4} />
    </Row>
);
}