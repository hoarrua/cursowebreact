import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header.js';
import Nav from './components/layout/Nav.js';
import Footer from './components/layout/Footer.js';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage.js';
import NosotrosPage from './pages/NosotrosPage.js';
import VentasPage from './pages/VentasPage.js';
import AlquileresPage from './pages/AlquileresPage.js';


function App() {
  return (
    <div className="App">
		<Header/>
		
		<BrowserRouter>
			<Nav/>
			<div className="container my-4">
					<Routes>
								<Route path="/" element={<HomePage/>}/>
								<Route path="nosotros" element={<NosotrosPage/>}/>
								<Route path="ventas" element={<VentasPage/>}/>
								<Route path="alquiler" element={<AlquileresPage/>}/>
								
					</Routes>
			</div>	
			<Footer/>
			</BrowserRouter>
		
    </div>
  );
}

export default App;
