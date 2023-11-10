<template>
    
        <div class="container">
          
          
          <div class="card" :style="'--crl: #009688;'">
            <div class="imgBx">
              <img src="../images/p1.jpg">
            </div>
            <div class="content">
              <h2>Carlos Rodriguez</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
      
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p2.jpg">
            </div>
            <div class="content">
              <h2>Julian Torres</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
      
          <div class="card" :style="'--crl: #03a9f4;'">
            <div class="imgBx">
              <img src="../images/p3.jpg">
            </div>
            <div class="content">
              <h2>Juan Sanchez</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p4.jpg">
            </div>
            <div class="content">
              <h2>Luis Suarez</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p5.jpg">
            </div>
            <div class="content">
              <h2>Jimena Sosa</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p6.jpg">
            </div>
            <div class="content">
              <h2>Julia Martinez</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p7.jpg">
            </div>
            <div class="content">
              <h2>Alejandro Bravo</h2>
              <a href="#">Mas Información</a>
            </div>
          </div>
    
          <div class="card" :style="'--crl: #ff3e7f;'">
            <div class="imgBx">
              <img src="../images/p8.jpg">
            </div>
            <div class="content">
              <h2>Adam Salazar</h2>
              <a href="#">Mas Información</a>
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
      </style>
      