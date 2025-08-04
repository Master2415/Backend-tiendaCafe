
# ☕ Backend Tienda de Café

Proyecto backend para una tienda eCommerce de café, desarrollado con **Strapi v4**, un CMS headless basado en Node.js. Este backend permite gestionar productos, categorías y órdenes, proporcionando una API REST robusta para el frontend.

## 🚀 Tecnologías utilizadas

* **Strapi v4** (CMS Headless)
* **Node.js**
* **SQLite** (por defecto, configurable a otro motor)
* **REST API**

## 📦 Funcionalidades principales

* Gestión completa de productos: nombre, descripción, precio, imágenes y stock.
* Organización de productos por categorías.
* Creación y seguimiento de órdenes de compra.
* Generación automática de endpoints REST.
* Panel de administración amigable para CRUD de datos.

## 🛠️ Instalación y ejecución

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Master2415/Backend-tiendaCafe.git
   cd Backend-tiendaCafe
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el proyecto:

   ```bash
   npm run develop
   ```

4. Accede al panel de administración:

   ```
   http://localhost:1337/admin
   ```

> La primera vez deberás crear un usuario administrador.

## 🔐 Seguridad

* Sistema de autenticación de Strapi.
* Control de acceso mediante roles y permisos personalizables.
* Gestión segura de usuarios.

## 📁 Estructura de colecciones

* **Productos**: nombre, descripción, precio, imagen, stock.
* **Categorías**: nombre, descripción.
* **Órdenes**: cliente, productos, estado, fecha.

## 🌐 Consumo de APIs

Strapi expone automáticamente endpoints RESTful. Ejemplo:

```
GET /api/products
POST /api/orders
```

Puedes usarlos desde el frontend con herramientas como **Axios** o **fetch**.

## ✅ Estado del proyecto

> Proyecto completado como ejercicio académico. Puede ser expandido con autenticación de clientes, pasarela de pagos o dashboard de ventas.

## 📄 Licencia

MIT License

---


