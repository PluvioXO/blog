import React, { useState } from 'react';
import { Row, Col} from 'antd'
import { motion } from 'framer-motion'
import './pdfstyling.css'
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

export default function one() {
  return(
  <motion.div className="blog-post-container" initial={{opacity:0, y:2}} animate={{opacity:1, y:0}} transition={{duration:0.5}}>
    <Row justify="center">
      <Col xs={0} sm={4} md={5} lg={6} xl={6} className="blog-post-menu">
      </Col>
      <Col xs={22} sm={16} md={14} lg={12} xl={12} className='blog-text-content'>
        <p className='section-title'>Tax as a methodology for doing good</p>
        Tax Policy as a methodoloy for doing good:
        Tax rates and implementation vary significantly from country to country, leaving with certain countires having more positive views to tax than others. However if implemented correctly tax is an increadible power for good: bineg a powerful intrustment for social good, promoting equality, fostering sustainable development, and even combating illegal financial flows.
        This piece aims to take a look at why paying tax should be a good thing, why you shoulden't use tax heavens and account your expenses in a way they are business deductable. 

        <p className='subsection-title'>Goverment Incompetence</p>
        Obviously a very important idea we have to take into account with a positive piece about why you should pay tax is that the money will be used correctly. And a key force against this is goverment Incompetence, if you pay your taxes and find out the money has been used on reasons that dont promote to the average wellbeing of the people of that country increasing then this is a key point against.
        Due to this we are going to assume a goverment that is at least fairly competent, they don't have bloated agencies and use the money collected in tax revenue effectively.

        <p className='subsection-title'>Inhibit illegal financial flows</p>
        A common misunderstanding about tax is that its purpose is purely to redistribute money in ways that are effective to the increased wellbeing of the taxpayers, however this isn't its only reason. Tax also stop illegal financial flows which are estimated to be in the trillions annually through a couple measures. One being the increased transparency that businesses have to occupy to to do business in that country, from disclosing financial balance sheets, assets and transactions they also have to meet up to the regulations set by the goverment for greater transparency.
        These key implementations mean that money laundering is significantly harder money launder. Furhtermore most countries in the developed world have information exchange systems allowing them to eschange financial information on people and businesses making it harder to rich individuals to hide funds in offshore accounts.
        Most tax departments and systemically important financial institutions have very good Anti-Money Laundering (AML) measures, these interconnect with goverment run tax systems and help to track and prevent illegal financial flows of illicit funds making it more challenging for criminals to intergrate illegal gains into the legitimate economy, a good example is companies being forced to get audited, the estimated return on audits is that for every 1$ spent 3$ is returned.
        Stringent penalties and legal consequences furthermore provide great consequences for tax evasian and act as a deterrent. They discourage individuals and businesses from ingaging in financial activities that don't follow the law and this fear pushes people to comply greater with tax codes and law. 
        The money generated from tax can be used to spend on enforcement efforts which allow such agencies to investigate possible crimes which involve the moving of illegal financial flows.

        <p className='subsection-title'>Taxation as a Force for Good</p>
        Good taxation codes are progressive which is a cornerstone of equitable societies, progressive taxation allows for individuals with more income to contribute proportionally more. This redistribution of wealth allows for people at the bottom of the economic ladder to have access to a quality of life better, from school to law enforcement, allowing them to participate in the economy more productively.
        We can also use tax to target incentives into certain fields that may increase productivity or reduce risks and wellbeing. A good example of this is in green energy where companies are given tax credits if there products meet the standard set out. This allows for the goverment to slightly nudge the economy in a good direction and incentivise people monetarily to work on promesing challanges that the world faces.
        Obviously implementing a high tax is challanging with people generally resisting to such efforts  as they would rather spend there money on what they see fit and powerful lobbying comitted by vested interests along with people viewing the goverment negatively or even incompetent make this a continous struggle. 

        <p className='subsection-title'>Moving Forward</p>
        While tax policy remains an amazing tool for shaping the world in a positive world by harnessing its potential to stop crimes and pushing for a more just and equitable society. From this we can build societies where prosperity flows and sustainability becomes a reality and the reduction of the illegal economy. We need to remember that actually implementing the ideas discussed in this piece remain most of the challange rather than figuring out what is good and what isn't. This is just the starting point for a complex and ever evolving conversation. As we stride to build a better life for the present and future we need to look at methodologies which can motivate people and push them to a position of agency and tax methodology is one way to do this. From posting consequences of people comitting illegal activies to allowing people to persue socio-economic mobility. 

      </Col>
      <Col xs={0} sm={4} md={5} lg={6} xl={6} className="blog-post-spacer">
      </Col>
    </Row>
  </motion.div>
);
}