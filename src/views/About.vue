<template>

    <div>
        <div class="search-bar">
          <input type="text" placeholder="Buscar...">
          <button @click="search">Buscar</button>
        </div>
    
        <div class="container">
          
          
          <div class="card" :style="'--crl: #009688;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>Tula de Allende</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
      
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>El Carmen</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
      
          <div class="card" :style="'--crl: #03a9f4;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>Tepeji</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>Los lagos</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>San Pedro</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>Jalpa</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>La Joya</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/h1.png">
            </div>
            <div class="content">
              <h2>Cruz Azul</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
        </div>
    </div>
      </template>
      
      <script>
      export default {
        name: 'App',
        methods: {
        search() {
          // Agrega aquí la lógica de búsqueda si es necesario
          alert('Buscando...');
        },
      },
      };
      </script>
      
      <style scoped>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
      }
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: normal;
        flex-wrap: wrap;
        gap: 100px 50px;
        padding: 100px 50px;
      }
      .container .card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 350px;
        height: 300px;
        background: #fff;
        border-radius: 20px;
        box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
        transition: 0.5s;
      }
      .container .card:hover {
        height: 400px;
      }
      
      .container .card .imgBx {
        position: absolute;
        top: 20px;
        width: 300px;
        height: 220px;
        background: #333;
        border-radius: 12px;
        overflow: hidden;
        transition: 0.5s;
      }
      .container .card:hover .imgBx {
        top: -100px;
        scale: 0.75;
        box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
      }
      
      .container .card .imgBx img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .container .card .content {
        position: absolute;
        top: 252px;
        width: 100%;
        padding: 0 30px;
        height: 35px;
        overflow: hidden;
        text-align: center;
        transition: 0.5s;
      }
      
      .container .card:hover .content {
        top: 130px;
        height: 250px;
      }
      
      .container .card .content h2 {
        font-size: 1.5em;
        font-weight: 700;
        color: var(--crl);
      }
      .container .card .content p {
        color: #333;
      }
      
      .container .card .content a {
      position: relative;
      top: 15px;
      display: inline-block;
      padding: 12px 25px;
      background: #007BFF; /* Cambiar a azul */
      color: #fff; /* Cambiar el color de texto a blanco */
      font-weight: 500;
      text-decoration: none;
      border-radius: 8px;
    }
    .search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background: #ffffff00;
      margin-top: 20px; /* Agrega margen superior */
    }
    
    .search-bar input {
      width: 400px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-right: 30px;
    }
    
    .search-bar button {
      padding: 10px 20px;
      background: #007BFF;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
      </style>
      