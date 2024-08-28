import React from 'react';
import '../styles/normalize.css';
import '../styles/transportes.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Home = (props) => {
	return (
					<div>
						<img src="/images/fondo.png" alt="avion" width="100%"/>
						<img src="/images/home/propiedades.jpg" width="30%" />

						<div className="propiedades">
								<div className="propiedad">
									<img src="/images/home/edificio2.jpg" width="100" />
									<div className="info">
											<h5>Alameda de la Federacion 188</h5>	
											<h6>Oficinas</h6>													
									</div>
										
								</div>	
									
								<div className="propiedad">
									<img src="/images/home/edificio3.jpg" width="100"/>
									<div className="info">
										<h5>Maipu 670</h5>	
										<h6>Depto 3 dormitorios</h6>								
									</div>							
								</div>

								<div className="propiedad">
									<img src="/images/home/lotes.jpg" width="100" />
									<div className="info">
											<h5>Lotes Puerto Urquiza</h5>	
											<h6>Terrenos de 10x30</h6>													
									</div>
										
								</div>	

												
						</div>	
						
					</div>


					
		
	);
}

export default Home;