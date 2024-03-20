// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css'
import HeadLineCard from './components/HeadLineCard';
import Food from './components/Food';
import Category from './components/Category';


function App() {
  

  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadLineCard/>
      <Food/>
      <Category />
  
    </div>
     )
}

export default App;
