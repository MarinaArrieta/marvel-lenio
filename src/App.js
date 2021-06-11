import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'

import logan from './components/logan.jpg';

function App() {

  const characters = [
    {name:"logan1", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan2", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan3", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"wonder woman", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan5", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan6", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan7", imagen:"https://i.pinimg.com/originals/2e/f3/cb/2ef3cb04d5adda25618fa7f16d2ef970.jpg" },
    {name:"logan8", imagen:"https://e00-elmundo.uecdn.es/television/programacion-tv/img/v2/programas/0e/418830.png" },

  ]
  


  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent characters={characters}/>
      <FooterComponent/>
    </div>
  );
}

export default App;