import React from 'react';
import '../styles/normalize.css';
import '../styles/transportes.css';

const Ventas = (props) => {
    return (
        <div className="propiedades">
            <div className="buscador">
                <div className="row">
                    <div className="col">
                        <h2>Buscador de Propiedades</h2>
                    </div>
                </div>
                <hr className="customizeHR" />
                
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
            
            <div className="propiedad">
                <img src="/images/ventas/edifi.jpeg" alt="Belgrano 188" width="100%" />
                <div className="info">
                    <h5>Belgrano 188</h5>
                    <h6>Depto 4 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/ventas/edifi1.jpeg" alt="Maipu 670" width="50%" />
                <div className="info">
                    <h5>Maipu 670</h5>
                    <h6>Depto 3 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/ventas/edifi2.jpg" alt="Puerto Urquiza" width="50" />
                <div className="info">
                    <h5>Puerto Urquiza</h5>
                    <h6>Depto 2 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/ventas/edifi3.jpg" alt="Alameda de la Federacion 188" width="50" />
                <div className="info">
                    <h5>Alameda de la Federacion 188</h5>
                    <h6>Piso 3 completo</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/ventas/edifi4.jpg" alt="Maipu 670" width="50" />
                <div className="info">
                    <h5>Maipu 670</h5>
                    <h6>Depto 3 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/ventas/edifi5.jpg" alt="Saravia 640" width="50" />
                <div className="info">
                    <h5>Saravia 640</h5>
                    <h6>Depto 3 dormitorios</h6>
                </div>
            </div>
        </div>
    );
}

export default Ventas;