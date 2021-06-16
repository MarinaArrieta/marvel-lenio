import ModalComponent from './ModalComponent'
import useFetch from '../useFetch'
import { useEffect, useState } from 'react'

const ResultComponent = ({characters})=>{


	const public_key = "20ef376510097f50f89a7cf2b98cc1ce"
	const ts = 1
	const hash = "3c0bdb616f415c7a9a47908b7f5d4814"  
	const final_url = `?apikey=${public_key}&hash=${hash}&ts=${ts}`



	const marvel_api_url = "https://gateway.marvel.com"

	const modal = document.getElementById("myModal");

	const [url_comics, setUrlComics] = useState("")
	const {data:comics, isPending:loading_comics,error:error_comics} = useFetch(url_comics)
	const [nombre, setNombre ] = useState("")

	const handleClick = (id,nombre_char)=>{
		let url_comics_id = marvel_api_url + "/v1/public/characters/" + id + "/comics" + final_url
		setUrlComics(url_comics_id)
		setNombre(nombre_char)
		console.log("aaaaaa")
		console.log(comics)
		console.log("aaaaaa")
		modal.style.display = "block";
	}

	return(

			<section className="conteiner">
			<div id="myModal" className="modal">
				{	loading_comics && <div>loading..</div> }
				{ comics && !loading_comics && <ModalComponent comics = {comics.data.results} nom_char = {nombre}/>}
				
			</div>
			{ characters.map((character)=>(
					<div className="card" key={character.id} onClick={ ()=>handleClick(character.id, character.name)}>
						
						<img className="img" src={character.thumbnail.path + "."+ character.thumbnail.extension} alt="{character.name}"/>
						<div className="name">{character.name}</div>
					</div>
				))}
			</section>

		)
} 

export default ResultComponent;