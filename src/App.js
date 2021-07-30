import React, { Component } from 'react';
import './App.css';
import { Layout, Content, Drawer, Navigation } from 'react-mdl';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Head from './components/Header/Header';
import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Head />
          <Drawer title="Oli Portfolio">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer />
        </Layout>
      </div>
    );
  }
}

export default App;
