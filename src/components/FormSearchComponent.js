const FormSearchComponent = ({cambiar_nombre})=>{
	const handleSubmit = (e)=>{
		let search_input = document.getElementById("search-input");
		e.preventDefault()
		cambiar_nombre(search_input.value)
	}

	return(
		    <form className="form-search" onSubmit={(e)=>handleSubmit(e)}>	
		    	<i className="fas fa-search form-icon form-icon-search"></i>
		        <input type="search" placeholder="Search" id="search-input"></input>

		    </form>
		)
}

export default FormSearchComponent;