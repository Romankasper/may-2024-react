import React from 'react';
import './App.css';
import Character from "./components/character/character";


function App() {
  return (
    <div>
    <Character name={"Garmanarnar"} status={"Alive"} type={"a"} gender={"Male"} img={"https://rickandmortyapi.com/api/character/avatar/134.jpeg"}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, incidunt.</p>
    </Character>
      <Character name={"Pibbles Bodyguard"} status={"Alive"} type={"Hairy alien"} gender={"Male"} img={"https://rickandmortyapi.com/api/character/avatar/263.jpeg"}/>
    </div>
  );
}

export default App;
