import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Containers/Header/Header'
import Brand from './Components/Brand/Brand'
import GPT from './Containers/whatGPT3/GPT'
import Features from './Containers/Features/Features'
import Possibility from './Containers/Possibility/Possibility'
import CTA from './Components/CTA/CTA'
import Blog from './Containers/Blog/Blog'
import Footer from './Containers/Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <GPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
