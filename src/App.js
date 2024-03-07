import React, { StrictMode } from 'react';
import './App.css';
import Path from './components/Path';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';
import Photos from './pages/Photos';
import Other from './pages/other';
import Blog from './pages/blog/blog'
import Projects from './pages/Projects'

import one from './pages/blog/blogData/pages/1';
import two from './pages/blog/blogData/pages/2';
import three from './pages/blog/blogData/pages/3';
import four from './pages/blog/blogData/pages/4';


export default function App() {
  return (
    <StrictMode>
    <BrowserRouter>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Blog} />
              <Route path="/photos" component={Photos} />
                <Route path='/reports' component={Reports} />
                <Route path='/other' component={Other} />
                <Route path='/blog' component={Blog}/>
                <Route path='/post/0' component={one}/>
                <Route path='/post/1' component={two}/>
                <Route path='/post/2' component={three}/>   
                <Route path='/post/3' component={four}/>             
                <Route path='/projects' component={Projects}/>
            </Switch>
    </BrowserRouter>
    </StrictMode>
  );
}

