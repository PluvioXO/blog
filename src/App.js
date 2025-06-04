import React, { StrictMode } from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Path from './components/Path';
import { BrowserRouter as BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Navbar from './components/Navbar';
import Photos from './pages/Photos';
import Other from './pages/other';
import Blog from './pages/blog/blog'
import LandingPage from './pages/LandingPage';

import one from './pages/blog/blogData/pages/1';
import two from './pages/blog/blogData/pages/2';
import three from './pages/blog/blogData/pages/3';
import four from './pages/blog/blogData/pages/4';
import five from './pages/blog/blogData/pages/5';
import six from './pages/blog/blogData/pages/6';
import seven from './pages/blog/blogData/pages/7';


export default function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/photos" component={Photos} />
            <Route path='/reports' component={Reports} />
            <Route path='/other' component={Other} />
            <Route path='/blog' component={Blog}/>
            <Route path='/post/0' component={one}/>
            <Route path='/post/1' component={two}/>
            <Route path='/post/2' component={three}/>   
            <Route path='/post/3' component={four}/>   
            <Route path='/post/4' component={five}/>             
            <Route path='/post/5' component={six}/>             
            <Route path='/post/6' component={seven}/>             
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

