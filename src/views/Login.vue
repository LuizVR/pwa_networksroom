<template>
    <div class="login-container">
      <div class="left-form">
        <!-- Contenido de la sección izquierda -->
      </div>
      <div class="right-form">
        <form>
          <h2>Acceso Login</h2>
          <label for="usuario">Email:</label>
          <input type="text" name="usuario" id="usuario" placeholder="Ingresa Email">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Ingresa Password">
          <div class="check">
          </div>
          <button @click="login" >Ingresar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        // Implementa la lógica de inicio de sesión aquí
      },
    },
  };
  </script>
  
  <style scoped>
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    height: 100vh;
    font-family: sans-serif;
  }
  
  .login-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
  }
  
  .left-form {
    width: 950px;
    background: #fff url('../images/h11.jpg') no-repeat center;
    background-size: cover;
  }
  
  .right-form {
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .right-form form {
    width: 70%; /* Ajusta el ancho del formulario aquí */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .right-form h2 {
    font-size: 2em;
    color: #f44336;
    margin: 20px 0;
    font-weight: bold;
  }
  
  .right-form form > input {
    width: 100%;
    padding: 10px 0;
    font-size: 1.2em;
  }
  
  .right-form label {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    margin: 20px 0;
  }
  
  .check {
    width: 100%;
    margin: 20px 0;
  }
  
  .right-form input[type="submit"] {
    width: 100%;
    background-color: #f44336;
    color: #fff;
    border: none;
    font-size: 18px;
    padding: 8px 30px;
  }
  
  @media screen and (max-width: 768px) {
    .left-form {
      display: none;
    }
    .right-form {
      grid-template-columns: 1fr; /* Cambia el diseño en pantallas pequeñas */
      width: 95%;
      padding: 0 1em;
    }
  }
  </style>
  