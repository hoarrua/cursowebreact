import React , { useEffect, useState } from 'react';
import '../styles/normalize.css';
import '../styles/transportes.css';
import axios from 'axios';

const Alquileres = (props) => {

    const [propiedades, setPropiedades] = useState([]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedPropiedadId, setSelectedPropiedadId] = useState(null);

    useEffect(() => {
        // Función para obtener las propiedades desde la API
        const fetchPropiedades = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/propiedades/alquiler');
                setPropiedades(response.data);
            } catch (error) {
                console.error("Error fetching propiedades", error);
            }
        };

        fetchPropiedades();
    }, []);

    const handleDialogOpen = (id) => {
        setSelectedPropiedadId(id);
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setSelectedPropiedadId(null);
    };


    const handleSubmit = (e) => {
        console.log("estoy en enviar la llamada al api");
        e.preventDefault();
        const data = new FormData(e.target);
    
        axios.post('http://localhost:3000/api/mensaje', {
            titulo: data.get('titulo'),
            email: data.get('email'),
            celular: data.get('celular'),
            mensaje: data.get('mensaje'),
            idPropiedad: selectedPropiedadId
        })
        .then(response => {
            alert('Consulta enviada');
            setIsDialogOpen(false);
        })
        .catch(error => {
            console.error('Error al enviar consulta', error);
        });
    };
    

    return (
        <div className="container">
            
            <div className="buscador">
                <div className="row">
                    <div className="col">
                        <h2>Buscador de Propiedades</h2>
                    </div>
                </div>
                <hr className="customizeHR" />
                {/* Buscador de propiedades */}
                <form>
                    <div className="row">
                        <div className="col">
                            <label>TIPO</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <select className="form-control custom-select-width" id="tipoPropiedad">
                                <option value="departamento">Departamento</option>
                                <option value="casa">Casa</option>
                                <option value="terreno">Terreno</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col">
                            <label>DORMITORIOS</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="checkbox1" />
                                <label className="form-check-label" htmlFor="checkbox1">1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="checkbox2" />
                                <label className="form-check-label" htmlFor="checkbox2">2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="checkbox3" />
                                <label className="form-check-label" htmlFor="checkbox3">3</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="checkbox4" />
                                <label className="form-check-label" htmlFor="checkbox4">4</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" id="checkbox5" />
                                <label className="form-check-label" htmlFor="checkbox5">O Más</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mb-3">
                        <div className="col">
                            <button type="submit" className="btn btn-custom">Buscar</button>
                        </div>
                    </div>
                </form>
            </div>
           

            <div className="contenido">
                <h1>PROPIEDADES EN ALQUILER</h1>
                <div className="propiedades">
                    {propiedades.map((propiedad) => (
                        <div className="propiedad" key={propiedad.id}>
                            <img src={propiedad.imagenes.imagen_url} alt={propiedad.titulo.toUpperCase()} />
                            <div className="info">
                                <h2>ID: {propiedad.id}</h2>
                                <h5>Tipo: {propiedad.tipo.toUpperCase()}</h5>
                                <h3>Precio: $ {propiedad.precio}</h3>
                                <h5>Dimensiones: {propiedad.dimensiones}</h5>
                                <h6>{propiedad.descripcion}</h6>
                            </div>
                            <button className="btn-consulta" onClick={() => handleDialogOpen(propiedad.id)}>
                                Consulta
                            </button>
                        </div>
                    ))}

                    
                </div>
              
            </div>


            {isDialogOpen && (
                <div className="dialog-overlay">
                    <div className="dialog">
                        <h1>Consulta - Propiedad {selectedPropiedadId}</h1>
                        <form onSubmit={handleSubmit}>
                            <label1>Título</label1>
                            <input type="text" name="titulo" required />
                            <label1>Email</label1>
                            <input type="email" name="email" required />
                            <label1>Celular</label1>
                            <input type="tel" name="celular" required />
                            <label1>Mensaje</label1>
                            <textarea name="mensaje" required></textarea>
                            <button type="submit" className="btn-enviar">Enviar</button>
                            <button type="button" onClick={handleDialogClose} className="btn-cerrar">Cerrar</button>
                        </form>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Alquileres;