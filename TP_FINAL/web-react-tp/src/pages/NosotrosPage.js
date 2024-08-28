import React from 'react';
import '../styles/normalize.css';
import '../styles/transportes.css';

const Nosotros = (props) => {
	return (
			<div>
				<img src="/images/nosotros/nosotros_imagen.jpg" alt="avion" width="100%"/>

				<div className="historia">
					<p>
						Más de 20 años de trayectoria inmobiliario, con una política comercial innovadora, dinámica y responsable, nuestra empresa se encuentra en un proceso de franca evolución y expansión.					
					</p>
						
					<h6>
					Tenemos una visión empresaria:
					</h6>
					<p>
						Más de 20 años de trayectoria inmobiliario, con una política comercial innovadora, dinámica y responsable, nuestra empresa se encuentra en un proceso de franca evolución y expansión.					
					</p>	
					<p>
					SOMOS UN EQUIPO DE PERSONAS, ALTAMENTE COMPETITIVAS A LA HORA DE GENERAR GRANDES OPORTUNIDADES PARA USTED.
					</p>					
			</div>
					

			<div className="staff">
					<h2>Staff</h2>		
				
					<div className="personas">
						<div className="persona">
							<img src="/images/nosotros/nosotros_saul.jpg" width="100" alt="Juan Gomez"/>
							<div className="info">
									<h5>Juan Gomez</h5>	
									<h6>Titular de la empresa</h6>							
									<p>
										Corredor Público Inmobiliario - CCPIER Mat. 14.
										Especialista en tasaciones de Inmuebles urbanos y rurales.
										
									</p>
								
							</div>
								
						</div>	
						
						
						<div className="persona">
							<img src="/images/nosotros/nosotros_ester.jpg" width="100" alt="Juan Gomez"/>
							<div className="info">
								<h5>Diana Diaz</h5>	
								<h6>Gerente Comercial</h6>							
								<p>
									Corredor Público Inmobiliario - CCPIER Mat. 264.
									Responsable de Negocios de la Empresa, líder de contactos y Atención a Grandes Clientes.
									Responsable de Administración de Alquileres.
								</p>
							</div>							
						</div>

								
					</div>
			</div>



			</div>
			
				
	);
}

export default Nosotros;