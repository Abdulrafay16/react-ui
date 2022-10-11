import React, { Component } from 'react';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import Cards from './component/Cards';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import './App.css';
class App extends Component{
  render(){
  return (
    <div>
      <div class="alert alert-dark" role="alert">
  50% Discount—check it out!
</div>
   <Navbar />
   <Slider />
   <Cards />
   <About />
   <Contact />
   <Footer />
    </div>

  )
}
}

export default App;
