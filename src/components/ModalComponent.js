const ModalComponent = ({comics,nom_char}) =>{

	const modal = document.getElementById("myModal");

	const handleClick = ()=>{
		modal.style.display = "none";
	}	

	return(
		
		  <div className="modal-content">
		    <span className="close" onClick={ handleClick }>&times;</span>
		    <ul>
		    	<h2>{nom_char}</h2>

				{ comics.map((comic)=>(
				    	<li key={comic.id}>
				    		<img className="modal-img" src={comic.thumbnail.path + "."+ comic.thumbnail.extension} alt="logan"/>
				    		<div className="modal-txt">
				    			<h4>{comic.title}</h4>
				    			<p className="modal-pharagraf">
				    				{comic.description}
				    			</p>
				    		</div>
				    	</li>

					))}	    	
		    </ul>
		  </div>
		

		)
}

export default ModalComponent;