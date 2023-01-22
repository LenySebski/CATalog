import React from 'react';
import './Style.scss'
import Navbar from './Components/Navbar';
import Cats from './Images/Cats.jpg';

function App() {
  return (
    <div className='Hello'>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <img className='mainimg' src={Cats}></img>
    </div>
  );
}
export default App