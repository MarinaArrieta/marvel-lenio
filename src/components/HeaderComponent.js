import marvel from './marvel.jpg';
import FormSearchComponent from './FormSearchComponent'
const HeaderComponent = ({cambiar_nombre})=>{
	return (
			<header>
				<nav>
					<a className="logo-container" href="https://www.marvel.com/">
						<img className="marvel_logo" src={marvel} alt="marvel"/>
		            	<abbr className="tooltips" title="MARVEL">   
		            	</abbr>
		        	</a>
		        	<FormSearchComponent cambiar_nombre = {cambiar_nombre}/>
				</nav>
			</header>
		)
}

export default HeaderComponent;