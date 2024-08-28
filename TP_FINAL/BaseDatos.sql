-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         5.5.16 - MySQL Community Server (GPL)
-- SO del servidor:              Win32
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Volcando datos para la tabla appreact.asociacion: ~8 rows (aproximadamente)
INSERT INTO `asociacion` (`id`, `idCliente`, `idPropiedad`, `fechaAlta`) VALUES
	(9, 3, 18, '2024-08-26 20:36:23'),
	(12, 3, 21, '2024-08-27 09:13:05'),
	(13, 3, 22, '2024-08-27 09:58:46'),
	(14, 3, 23, '2024-08-27 10:13:48'),
	(15, 3, 24, '2024-08-27 10:21:55'),
	(22, 8, 31, '2024-08-28 11:43:21'),
	(23, 8, 32, '2024-08-28 11:43:58');

-- Volcando datos para la tabla appreact.cliente: ~2 rows (aproximadamente)
INSERT INTO `cliente` (`id`, `cuit`, `apellido`, `nombre`, `fechaNac`, `sexo`, `email`, `codAreaCel`, `numCel`, `fechaAlta`, `estado`, `fechaBaja`) VALUES
	(3, 33708728239, 'PEREZ', 'JUAN CARLOS', '2024-08-26 00:00:00', 'Masculino', 'hoarrua@hotmail.com', 343, 1121212, '2024-08-26 19:57:51', 1, NULL),
	(8, 23252367489, 'ARRUA', 'HUGO', '1976-10-11 00:00:00', 'Masculino', 'hoarrua@hotmail.com', 343, 154632368, '2024-08-28 11:42:22', 1, NULL);

-- Volcando datos para la tabla appreact.mensajes: ~4 rows (aproximadamente)
INSERT INTO `mensajes` (`id`, `titulo`, `email`, `celular`, `mensaje`, `idPropiedad`, `fechaAlta`) VALUES
	(7, 'CONSULTA', 'hoarrua@hotmail.com', '3434632362', 'Me gustaria saber mas sobre esta casa. muchas gracias', 31, '2024-08-28 11:44:52'),
	(8, 'consulta', 'hoarrua@hotmail.com', '3434632362', 'Me gustaria conocer este depto', 32, '2024-08-28 11:45:23');

-- Volcando datos para la tabla appreact.propiedades: ~6 rows (aproximadamente)
INSERT INTO `propiedades` (`id`, `titulo`, `tipo`, `tipoOperacion`, `precio`, `dimensiones`, `descripcion`, `usuario_id`, `estado`, `fechaalta`) VALUES
	(18, 'VENDO DEPARTAMENTO', 'departamento', 'venta', 12345.00, '10x30', 'Departamento en el Centro de Parana- Entre Rios', 1, 1, '2024-08-26 20:36:23'),
	(21, 'VENDO', 'departamento', 'venta', 2212.00, '10X15', 'DEPARTAMENTO ZONA CENTRO. NUEVO A ESTENAR', 1, 1, '2024-08-27 09:13:05'),
	(22, 'ALQUILO CASA', 'casa', 'alquiler', 34343.00, '10x30', 'ALQUILO CASA ZONA PUEBLADA', 1, 1, '2024-08-27 09:58:46'),
	(23, 'VENDO CASA', 'casa', 'venta', 67676677.00, '10x30', 'VENDO CASA ANTIGUA', 1, 1, '2024-08-27 10:13:48'),
	(24, 'ALQUILO DEPARTAMENTO MONOAMBIENTE', 'departamento', 'alquiler', 1234.00, '10X6', 'DEPARTAMENTO MONOAMBIENTE, CON COCINA, BAÑO Y DORMITORIO', 1, 1, '2024-08-27 10:21:55'),
	(31, 'VENDO CASA QUINTA', 'casa', 'venta', 88888.00, '10x30', 'VENDO CASA EN MUY BUEN ESTADO. ZONA DE QUINTAS', 1, 1, '2024-08-28 11:43:21'),
	(32, 'ALQUILO DEPARTAMENTO', 'departamento', 'alquiler', 9999.00, '10x30', 'DEPARTAMENTO 3 AMBIENTES', 1, 1, '2024-08-28 11:43:58');

-- Volcando datos para la tabla appreact.propiedades_imagenes: ~8 rows (aproximadamente)
INSERT INTO `propiedades_imagenes` (`id`, `propiedad_id`, `imagen_url`) VALUES
	(6, 18, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724715355/ko7szj46nmd2dgmzz8ya.jpg'),
	(7, 21, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724760756/kxknw5gpu7gkygr2ykau.jpg'),
	(8, 22, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724763526/dzvlu0ghs5tifrow3vxb.jpg'),
	(9, 23, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724764429/llllm75hk5ftcb8ebljj.jpg'),
	(10, 24, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724764916/fjbzn86ismo4gnsvsexf.jpg'),
	(14, 31, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724856203/igvkepmioydlw1ke0jh7.jpg'),
	(15, 32, 'https://res.cloudinary.com/ddkd0aoex/image/upload/v1724856238/bmi7zpwfduc1ljxtwhlw.jpg');

-- Volcando datos para la tabla appreact.usuarios: ~1 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nombre`, `email`, `rol`, `user`, `pass`, `activo`) VALUES
	(1, 'Hugo Arrua', 'hoarrua@example.com', 'administrador', 'admin', '8a8bb7cd343aa2ad99b7d762030857a2', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
