const FormSearchComponent = ({cambiar_nombre})=>{
	const search_input = document.getElementById("search-input");
	const handleSubmit = (e)=>{
		e.preventDefault()
		cambiar_nombre(search_input.value)
	}

	return(
		    <form className="form-search" onSubmit={(e)=>handleSubmit(e)}>	
		    	<i className="fas fa-search form-icon form-icon-search"></i>
		        <input type="search" placeholder="Search" id="search-input"></input>
		        <i className="far fa-star form-icon form-icon-star"></i>
		    </form>
		)
}

export default FormSearchComponent;