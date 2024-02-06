import './App.css';
import React from 'react';
// import logo from './logo.svg';




function App() {

  return (
    <div>
      <h1 className='center'> Video Player</h1>

      <video className='video' width='600' controls>

        <source src="./img/mov_bbb.mp4" type='video/mp4'




        />


      </video>

    </div>


  );
}

export default App;
