import React from 'react';
import '../styles/normalize.css';
import '../styles/transportes.css';

const Alquileres = (props) => {
    return (
        <div className="propiedades">
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
            <div className="propiedad">
                <img src="/images/alquileres/casa.jpg" alt="Alameda de la Federacion 188" width="10%" />
                <div className="info">
                    <h5>Alameda de la Federacion 188</h5>
                    <h6>Oficinas</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa1.jpg" alt="Maipu 670" width="10%" />
                <div className="info">
                    <h5>Maipu 670</h5>
                    <h6>Depto 3 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa3.jpeg" alt="Alameda de la Federacion 188" width="10%" />
                <div className="info">
                    <h5>Alameda de la Federacion 188</h5>
                    <h6>Oficinas</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa4.jpg" alt="Maipu 670" width="10%" />
                <div className="info">
                    <h5>Maipu 670</h5>
                    <h6>Depto 3 dormitorios</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa5.jpg" alt="Lotes Puerto Urquiza" width="10%" />
                <div className="info">
                    <h5>Lotes Puerto Urquiza</h5>
                    <h6>Terrenos de 10x30</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa6.jpg" alt="Lotes Puerto Urquiza" width="10%" />
                <div className="info">
                    <h5>Lotes Puerto Urquiza</h5>
                    <h6>Terrenos de 10x30</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa7.jpeg" alt="Lotes Puerto Urquiza" width="10%" />
                <div className="info">
                    <h5>Lotes Puerto Urquiza</h5>
                    <h6>Terrenos de 10x30</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/casa8.jpg" alt="Lotes Puerto Urquiza" width="10%" />
                <div className="info">
                    <h5>Lotes Puerto Urquiza</h5>
                    <h6>Terrenos de 10x30</h6>
                </div>
            </div>
            <div className="propiedad">
                <img src="/images/alquileres/depto8.jpg" alt="Lotes Puerto Urquiza" width="10%" />
                <div className="info">
                    <h5>Lotes Puerto Urquiza</h5>
                    <h6>Terrenos de 10x30</h6>
                </div>
            </div>
        </div>
    );
}

export default Alquileres;