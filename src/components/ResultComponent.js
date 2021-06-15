const ResultComponent = ({characters})=>{

	return(

			<section className="conteiner">
			{ characters.map((character)=>(
					<div className="card" key={character.id}>
						<i className="far fa-star form-icon icon-card-star"></i>
						<img className="img" src={character.thumbnail.path + "."+ character.thumbnail.extension} alt="{character.name}"/>
						<div className="name">{character.name}</div>
					</div>
				))}
			</section>

		)
} 

export default ResultComponent;