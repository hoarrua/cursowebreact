import React from 'react';
import '../../styles/normalize.css';
import '../../styles/transportes.css';


const Header = (props) => {
	return (
				   <header className="mb-2">
						<div className="container">
						   <i className="bi bi-telephone custom-bg"> +54 2901 480294</i>
						   <i className="bi bi-envelope custom-bg"> negociosInmobiliarios@gmail.com</i>

						</div>
					</header>
	);
}

export default Header;