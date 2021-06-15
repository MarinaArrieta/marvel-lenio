

const DetailComponent = ({comic})=>{

	return(
			<section className="conteiner-2">
				<div className="card-2">
					<div className="image-2">
						<img className="img-2" src={comic.thumbnail.path + "."+ comic.thumbnail.extension} alt="logan"/>
					</div>
					<div className="text-2">
						<h1 className="title-2">{comic.title}</h1>
						<p className="pharagraf-1">{ comic.description }</p>
						<p className="pharagraf-2">{ comic.description }</p>
					</div>
				</div>
			</section>
		)
} 

export default DetailComponent;