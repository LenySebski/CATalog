import React from 'react';
import './Style.scss'
import Navbar from './Components/Navbar';
import LostPet from './Components/LostPet';
import MainImg from './Components/MainImg';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='Hello'>
      <React.Fragment>
        <Navbar/>
      </React.Fragment>
      <MainImg/>
      <LostPet/>
      <Footer/>


    </div>
  );
}
export default App