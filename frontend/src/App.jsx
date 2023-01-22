import React from 'react';
import './Style.scss'
import Navbar from './Components/Navbar';
import Cats from './Images/Cats.jpg';


function App() {
  return (
    <React.Fragment>
      <Navbar/>
    </React.Fragment>
  );
  <div>
    <img src={Cats} alt='Cats'/>
  </div>
}
export default App
