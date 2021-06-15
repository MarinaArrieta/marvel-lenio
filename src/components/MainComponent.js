import ResultComponent from "./ResultComponent"
import useFetch from '../useFetch'
import { useEffect, useState } from 'react'
import DetailComponent from './DetailComponent'

const MainComponent = ()=>{



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

	const comic_url = "http://gateway.marvel.com/v1/public/comics/53426" + final_url
	const {data:comic, isPending:loading_comic,error:error_comic} = useFetch(comic_url)



	return(
		<main>
		    { isPending && <div>loading...</div> }
     		{ error && <div>{error}</div> }
			{ characters && <ResultComponent characters={characters.data.results}/> }
			{ comic && <DetailComponent comic={comic.data.results[0] }/>}
		</main>
		)
} 

export default MainComponent;