import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import './Credits.css'
import 'antd/dist/reset.css'
import { ArrowRightOutlined } from '@ant-design/icons';

const resourcesData = [
  {
    title: "Neel Nanda's Blog",
    url: "https://neelnanda.io/",
    description: `Neel Nanda's Blog has been increadibally impactful in my life, personally this is the singular greatest source of ROI from time invested to read the posts, from his work on mechanistic interpretability to his amazing posts on taking agency within your life and how to take social initiative.
    Embarking on a journey of personal and professional growth has never been more rewarding than since I discovered his blog. This blog has become my trusted companion in navigating the complexities of life, offering invaluable advice that has truly transformed the way I live and work, particularly his very illaborate dictionary on mechanistic interperability jargon.
From career insights that have propelled my professional journey to mindfulness techniques that have enhanced my overall well-being. The blog's practical tips on time management have revolutionized how I approach my daily tasks, allowing me to achieve more while maintaining a healthy work-life balance.
What sets this blog apart is its commitment to fostering a supportive community. Engaging with like-minded individuals through shared experiences and insightful discussions has been an enriching aspect of my journey. The collaborative space they've created is not just informative but also inspiring, making personal and professional development feel like a shared adventure.
Through Neel's advice, I've learned to embrace agency over my choices, enabling me to shape a life that aligns with my values and aspirations. The articles are not just informative but resonate on a personal level, making every piece a source of motivation and encouragement.
Whether you're seeking guidance in your career, striving for personal development, or simply looking for inspiration to live a more intentional life then I would highly recommend to invest some time to read his posts.`,
  },
  {
    title: "Paul Graham's Essays",
    url: "https://www.paulgraham.com/articles.html",
    description: `Paul Graham's Blog has some increadibally insightful articles in it, I would recommend looking here for advice if you are trying to build something. Such questions as, what hueristics are favourable in sucessful people? How to deal with risk and investment of your time? How can I analyze the world in a more factually insightful way?
    These are all questions that I have had for a long time and thanks to his articles I have reached what I would like to believe to be really good answers to each individual question. Paul Graham is a investor in silicon valley with he himself personally overseing the growth of some of the biggest companies in the world, to which he summerizes what he learns, and puts it into a really easly digestable form. No complex jargon or economics needed. 
    I love to just jump in and out of these articles for advice on topics I am struggling with and his advice has impacted me positively in so many ways, a very high recommend.`,
  },
  {
    title: "Chris Olah's Blog",
    url: "https://colah.github.io",
    description: `Chris Olah's Blog Is very interesting to look if you have interests into mech interp conscepts, looking at a range of different topics and posts from more achetecture focuses to algorithmic focuses. If I where to recommend these sources in order I would use Colah's blog as a precursor to Neel Nanda's blog when on the topic of mech interp although Colah does a better job explaining some more complicated topics involving circuits and solution spaces however Neel Nanda's covers a wider range and more detail in some cases.`,
  },
];

export default function Other() {
  return (
    <motion.div 
      className="page-container resources-page-container" 
      initial={{opacity:0}} 
      animate={{opacity:1}} 
      transition={{duration:0.5}}
      style={{paddingTop: '2rem', paddingBottom: '2rem'}}
    >
      <Row justify="center" style={{ marginBottom: '2.5rem' }}>
        <Col>
          <h1 id='headerTitle' style={{ textAlign: 'center', fontSize: '2.5rem' }}>Resources</h1>
        </Col>
      </Row>

      <Row gutter={[16, 32]} justify="center">
        {resourcesData.map((resource, index) => (
          <Col xs={22} sm={20} md={18} lg={16} xl={14} key={index}>
            <Card 
              title={resource.title} 
              className="resource-card"
              extra={
                <Button 
                  type="primary"
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  icon={<ArrowRightOutlined />}
                  className="resource-visit-button"
                  key="visit-extra"
                >
                </Button>
              }
            >
              {resource.description.split('\n').map((paragraph, pIndex) => (
                <p className="resource-description" key={pIndex} style={{marginBottom: '1em'}}>
                  {paragraph}
                </p>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
}

