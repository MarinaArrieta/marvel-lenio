

const MainComponent = ({title, characters})=>{

	return(
		<main>
			<section className="conteiner">
				<h1  class="rojo">{title}</h1>
				{ characters.map((character)=>(

						<div className="card">
							<img className="img" src={character.imagen} alt="logan"/>
							<div className="name">{character.name}</div>
						</div>

					))}


			</section>
		</main>
		)
} 

export default MainComponent;