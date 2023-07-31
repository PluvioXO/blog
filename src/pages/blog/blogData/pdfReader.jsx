
import React, { useState } from 'react';
import { Row, Col} from 'antd'
import { Document, Page, pdfjs } from 'react-pdf';
import { motion } from 'framer-motion'
import pdfFile from './sample.pdf'
import './pdfstyling.css'
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function pdfReader() {
  const[x, xChange] = useState(1)
  const[numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  function pageLeft() {
    if (x!=1) {
      xChange(x-1)
    }
  }
  function pageRight() {
    if (x!=numPages) {
      xChange(x+1)
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
      <div style={{height:'100%'}}>
      <Document file={pdfFile}  onLoadSuccess={onDocumentLoadSuccess}>
        <div style={{height:'min-content', marginBottom:'10px', zIndex:'5', backgroundColor:'red', width:'max-content', position:'fixed', bottom:'12.5%',
        left: "0",
        right: "0",
        margin: "auto",
        borderRadius:'10px'}}>
        <Row>
          <motion.div onClick={pageLeft} style={{padding:'8px'}}>Left</motion.div><p style={{padding:'8px', marginBottom:'0'}}> {x} of {numPages}</p><motion.div onClick={pageRight} style={{padding:'8px'}}>Right</motion.div>
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