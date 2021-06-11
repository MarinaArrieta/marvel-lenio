import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <MainComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;