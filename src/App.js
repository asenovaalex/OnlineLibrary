import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';

import { 
  BrowserRouter as Router,
  Route,
  Switch 
} from "react-router-dom";

const HomeComponent = () => (
  <Layout>
    <Home />
  </Layout>
)

const GalleryComponent = () => (
  <Layout>
    <Gallery />
  </Layout>
)

const routes = [
  {
    path: '/',
    exact: true,
    header: () => <Header/>,
    main: () => <HomeComponent />
  },
  {
    path: '/gallery',
    exact: true,
    header: () => <Header/>,
    main: () => <GalleryComponent />
  
  },
];

class Layout extends React.Component {

  render = () => (
    <div>
      <Header />
      <div id="main">
        { this.props.children }
      </div>
      <div className="footer">
        Footer
      </div>
    </div>
  )
}



const AppRoute = () => (
  <Router>
    <Switch>
      {routes.map((route, i) => 
        <Route 
          exact 
          key={i} 
          path={route.path} 
          component={route.main} />)}
    </Switch>
  </Router>
)

export default AppRoute;
