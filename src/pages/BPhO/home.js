import {
    Tabs,
    TabList,
    TabPanel,
    Tab,
    TabPanels,
    Link
} from '@chakra-ui/react'
import { GithubFilled } from '@ant-design/icons';
import React, { useState } from 'react';
import ProblemOne from './Challanges/Problem one'
import ProblemTwo from './Challanges/Problem two';
import ProblemThree from './Challanges/Problem three';
import ProblemFour from './Challanges/Problem four';
import ProblemFive from './Challanges/Problem five';
import ProblemSix from './Challanges/Problem six';
import ProblemSeven from './Challanges/Problem seven';
import ExplanationPaper from './Challanges/Explanation paper'
import ComputationPaper from './Challanges/Computation Paper';
import './style.css'

export default function BPhOHome () {
    document.body.style.backgroundColor = "#FFFFFF";
return(
    <Tabs>
  <TabList>
    <Tab>Task 1</Tab>
    <Tab>Task 2</Tab>
    <Tab>Task 3</Tab>
    <Tab>Task 4</Tab>
    <Tab>Task 5</Tab>
    <Tab>Task 6</Tab>
    <Tab>Task 7</Tab>
    <Tab>Explanation Paper</Tab>
    <Tab>Computation Paper</Tab>
    <Tab onClick={() =>  window.location.href = 'https://github.com/PluvioXO/blog'} style={{right:0, position:'absolute'}}><div style={{opacity:0}}>W</div><GithubFilled /><div style={{opacity:0}}>W</div></Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <ProblemOne />
    </TabPanel>
    <TabPanel>
      <ProblemTwo />
    </TabPanel>
    <TabPanel>
      <ProblemThree />
    </TabPanel>
    <TabPanel>
      <ProblemFour />
    </TabPanel>
    <TabPanel>
      <ProblemFive />
    </TabPanel>
    <TabPanel>
      <ProblemSix />
    </TabPanel>
    <TabPanel>
      <ProblemSeven />
    </TabPanel>
    <TabPanel>
      <ExplanationPaper/>
    </TabPanel>
    <TabPanel>
      <ComputationPaper />
    </TabPanel>
  </TabPanels>
</Tabs>
  )
};