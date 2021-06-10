import marvel from './marvel.jpg';

const HeaderComponent = ()=>{
	return (
			<header>
				<nav>
					<a className="bottom" href="https://www.marvel.com/">
						<img className="marvel_logo" src={marvel} alt="marvel"/>
		            	<abbr className="tooltips" title="MARVEL">   
		            	</abbr>
		        	</a>
				</nav>
			</header>
		)
}

export default HeaderComponent;