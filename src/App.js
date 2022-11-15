import React, { useState } from 'react'
import './App.css';
import Main from './Components/Main_page/Main';
import Navbar from './Components/Navigation_bar/Navbar';

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
    </div>
  );
}

export default App;
