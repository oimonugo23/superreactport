import React from 'react'
import { Header, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
    <Header className='header-color' title="Oli Portfolio" scroll>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Header>
  )
}

export default Head
