import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="container">
						<a className="navbar-brand" href="#">
							<img src="/images/LogoNI.png" width="250" alt="Logo" />
						</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav">
											<ul className="navbar-nav ml-auto">
											
											<li className="nav-item">
												<Link className="nav-link active" to="/">Inicio</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/nosotros">Nosotros</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/ventas">Ventas</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/alquiler">Alquiler</Link>
											</li>

											</ul>
						</div>
					</div>
			</nav>

						/*
							<nav className="navbar navbar-expand-lg navbar-light bg-light">
								<div className="container">
										<a className="navbar-brand" href="#">
											<img src="/images/LogoNI.png" width="250" alt="Logo" />
										</a>
										<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
											<span className="navbar-toggler-icon"></span>
										</button>
										<div className="collapse navbar-collapse" id="navbarNav">
											<ul className="navbar-nav ml-auto">
											
											<li className="nav-item">
												<Link className="nav-link active" to="/">Inicio</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/nosotros">Nosotros</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/ventas">Ventas</Link>
											</li>

											<li className="nav-item">
												<Link className="nav-link" to="/alquiler">Alquiler</Link>
											</li>

											</ul>
											</div>
									</div>
							</nav>
						*/
						
						



		
	);
}

export default Nav;