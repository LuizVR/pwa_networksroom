<template>
  <div class="header">
    <div class="sidebar">
      <!-- Tu contenido de la barra lateral aquí -->
    </div>
    <div class="content">
      <div class="banner-text">
        <h1>Network Rooms</h1>
        <p>
          "Tu Éxito, Tu Comodidad: Encuentra Tu Hogar Cerca de la Universidad."
        </p>
        <button @click="learnMore">Ver mas</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleCamera() {
      this.stopCamera();
    }
  },
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Montserrat, sans-serif;
}

.menu ul li a:hover {
  background: green;
}

.socials a {
  text-decoration: none;
  background: green;
  color: #fff;
  padding: 10px 35px;
}

.header {
  height: 100vh;
  width: 300vh;
  display: flex;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(../images/h10.jpg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

.content {
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Alinea el contenido a la derecha */
  align-items: center; /* Centra verticalmente el contenido */
}

.banner-text {
  color: #fff;
  margin-right: 20px; /* Ajusta el margen derecho para mover el contenido a la derecha */
}

.banner-text h1 {
  font-size: 60px;
  margin: 0;
}

.banner-text p {
  margin: 15px 0 40px;
}

.banner-text button {
  background: fixed;
  border: none;
  outline: none;
  color: #fff;
  padding: 10px 30px;
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  display: inline-block;
}

/* Media queries, según sea necesario */
@media (max-width: 1000px) {
  /* Estilos para pantallas más pequeñas */
}

@media (max-width: 600px) {
  /* Estilos para pantallas aún más pequeñas */
}
</style>
