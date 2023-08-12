import React, { StrictMode } from 'react';
import './App.css';
import Path from './components/Path';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Photos from './pages/Photos';
import Other from './pages/other';
import Blog from './pages/blog/blog'
import Projects from './pages/Projects'
import pdfReader from './pages/blog/blogData/pdfReader';

//BPHO Content
import BPhOHome from './pages/BPhO/home';


export default function App() {
  return (
    <StrictMode>
    <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/photos" component={Photos} />
                <Route path='/reports' component={Reports} />
                <Route path='/other' component={Other} />
                <Route path='/products' component={Products} />
                <Route path='/blog' component={Blog}/>
                <Route path='/posts' component={pdfReader}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/BPhO/home' component={BPhOHome} />
            </Switch>
    </BrowserRouter>
    </StrictMode>
  );
}

