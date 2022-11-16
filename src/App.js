import React, { useState } from 'react'
import './App.css';
import Features from './Components/Features/Features';
import Main from './Components/Main_page/Main';
import Navbar from './Components/Navigation_bar/Navbar';
import Product from './Components/Product/Product';

function App() {
  const [translate_x, setTranslate_x] = useState(0);

  return (
    <div className="App">
      <Navbar 
        setTranslate_x={setTranslate_x}
      />
      <Main 
        translate_x={translate_x}
      />
      <Features />
      <Product 
        translate_x={translate_x}
        setTranslate_x={setTranslate_x}
      />
    </div>
  );
}

export default App;
