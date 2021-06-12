import './App.css';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import MainComponent from './components/MainComponent'

import useFetch from './useFetch'

import { useEffect, useState } from 'react'


function App() {

  const public_key = "20ef376510097f50f89a7cf2b98cc1ce"
  const ts = 1
  const hash = "3c0bdb616f415c7a9a47908b7f5d4814"
  
  const marvel_api_url = "https://gateway.marvel.com"
  const url_personajes = "/v1/public/characters"
  const final_url = `?apikey=${public_key}&hash=${hash}&ts=${ts}`
  const limit = "&limit=8"

  const max_random = 1400
  const min_random = 0
  const [ramdom_int, setRandom] = useState(0)

  const offset = `&offset=${ramdom_int}`

  useEffect(()=>{
    setRandom(Math.floor(Math.random() * (max_random - min_random + 1)) + min_random)
  },[])
  
  const url = marvel_api_url + url_personajes + final_url + limit +offset
  const {data:characters, isPending, error } = useFetch(url)


  return (
    <div className="App">
      <HeaderComponent/>
      { isPending && <div>loading...</div> }
      { error && <div>{error}</div> }
      { characters && <MainComponent characters={characters.data.results}/> }
      
      <FooterComponent/>
    </div>
  );
}

export default App;