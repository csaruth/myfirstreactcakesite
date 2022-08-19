import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './component/Navebar';
import About from'./views/About';
import Order from './views/Order';
import Contact from'./views/Contact';




function App() {
  return (
  <div>
      <Navbar/>
     <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/About' element = {<About/>}/>
      <Route path='/Order' element = {<Order/>}/>
      <Route path='/Contact' element = {<Contact/>}/>

     


      
     </Routes>
 
  </div>
  
  );
}

export default App;

