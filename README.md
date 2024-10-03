# Golden G React

Este es el repositorio para el desarrollo del sitio web de **Golden G**, una tienda en línea de comercio electrónico enfocada en la venta de productos usando **React**. Este proyecto incluye tanto la parte frontal (frontend) desarrollada en React como el servidor backend con Node.js y Express, utilizando una base de datos MySQL.

## Tecnologías

### Frontend (React)
- **React**: ^18.3.1
- **Axios**: ^1.7.7
- **React DOM**: ^18.3.1
- **React Router DOM**: ^6.26.2
- **React Scripts**: 5.0.1
- **Web Vitals**: ^2.1.4

### Backend (Node.js)
- **Cors**: ^2.8.5
- **Express**: ^4.21.0
- **MySQL2**: ^3.11.3
- **Sequelize**: ^6.37.3

## Requisitos

### Frontend (React)
Para ejecutar el frontend del proyecto, necesitas tener **Node.js**, **npm** y **nodemon** instalados en tu sistema. Una vez configurado el entorno, sigue los pasos a continuación.

### Backend (Node.js)
El backend está desarrollado usando **Node.js** con **Express** y **Sequelize** para la conexión a una base de datos MySQL.

## Instalación

## Frontend

### Clonar el repositorio
```cmd
git clone https://github.com/leopilots/goldeng-react.git
```

### Navegar al directorio del frontend
```cmd
cd goldeng-react/front
```

### Instalar dependencias del frontend
```cmd
npm install axios react-dom react-router-dom
```

### Navegar al directorio del backend
```cmd
cd goldeng-react/node
```

### Instalar dependencias del backend
```cmd
npm i express cors mysql2 sequelize 
```

# Ejecución
## Frontend
### Para iniciar el servidor de desarrollo del frontend:
```cmd
npm start
```

# Backend
## Para ejecutar el backend:
```cmd
nodemon app
```

## Descripción del Proyecto
Golden G es un sitio web de e-commerce que permite a los usuarios navegar por un catálogo de productos, agregar artículos a un carrito de compras y realizar pedidos. Este repositorio se divide en dos partes:

- Frontend: La parte de cliente del sitio web, desarrollada usando React, donde los usuarios pueden interactuar con el catálogo y el carrito de compras.
- Backend: El servidor que maneja las operaciones relacionadas con la base de datos y la lógica del negocio.

