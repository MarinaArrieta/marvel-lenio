import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'

import { useEffect, useState } from 'react'


function App() {
	const [name_start, setNameStart] = useState("")


  return (
    <div className="App">
      <HeaderComponent cambiar_nombre = {setNameStart}/>
      <MainComponent name_start = {name_start}/>
      <FooterComponent/>
    </div>
  );
}

export default App;