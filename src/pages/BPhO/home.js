import {
    Tabs,
    TabList,
    TabPanel,
    Tab,
    TabPanels
} from '@chakra-ui/react'
import React, { useState } from 'react';
import ProblemOne from './Challanges/Problem one'
import ProblemTwo from './Challanges/Problem two';
import ProblemThree from './Challanges/Problem three';
import ProblemFour from './Challanges/Problem four';
import ProblemFive from './Challanges/Problem five';
import ProblemSix from './Challanges/Problem six';
import ProblemSeven from './Challanges/Problem seven';
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
    <Tab>Mobile Apps</Tab>
    <Tab>Source Code</Tab>
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
      <p>A huge thanks to the team @webgl-plot for there increadible library</p>
    </TabPanel>
    <TabPanel>
      <p>seven!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
};