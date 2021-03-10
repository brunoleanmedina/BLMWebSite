import React from 'react';
import Hero from './components/Hero/Hero.jsx';
import Start from './components/Start/Start.jsx';
import './styles.scss';
import Content from './components/Content/Content'


function App(){

  return (
    <div>
      <Start/>
      <Hero/>
      <Content title='Projects'/>
      <Content title='Skills'/>
      <Content title='Knowledge'/>
      <Content title='About Site'/>
      <Content title='Contact '/>


      
    </div>
  );

};

export default App;