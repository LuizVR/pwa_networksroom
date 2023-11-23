<template>
  <div>
    <div class="card-container">
      <div v-for="usuario in listaUsuarios" :key="usuario.roomId" class="card">
        <div class="card-image-container" @mouseover="moveImageUp" @mouseleave="resetImagePosition">
          <img :src="getImageSource(usuario.foto)" class="card-img-top" />
        </div>
        <div class="card-body">
          <h2 class="card-title">{{ usuario.direccion }}</h2>
          <h3 class="card-title">${{ usuario.precio }}</h3>
        </div>
      </div>
    </div>
    <br />
    <div class="button-container">
      <button class="btn-primary" @click="redirectToRegister">Registrar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';

export default {
  name: "ByIdFire",
  setup() {
    const router = useRouter();
    const listaUsuarios = ref(null);

    onMounted(async () => {
      try {
        const direcciona = "https://www.networkrooms.somee.com/api/Room";
        const response = await axios.get(direcciona);
        listaUsuarios.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const redirectToRegister = () => {
      router.push("/registerRoom");
    };

    // Función para obtener la fuente de la imagen
    const getImageSource = (foto) => {
      // Verificar si la foto es una URL directa o datos en Base64
      if (foto.startsWith('http')) {
        return foto; // Es una URL directa
      } else {
        return `data:image/jpeg;base64,${foto}`; // Datos en Base64
      }
    };

    const moveImageUp = (event) => {
      event.target.style.transform = 'translateY(-10px)';
    };

    const resetImagePosition = (event) => {
      event.target.style.transform = 'translateY(0)';
    };

    return { listaUsuarios, redirectToRegister, getImageSource, moveImageUp, resetImagePosition };
  },
};
</script>

<style>
/* Estilos para las tarjetas */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Modificado para una mejor alineación */
}

.card {
  position: relative;
  width: calc(33.33% - 20px); /* 33.33% para tres columnas y ajuste de margen */
  margin: 10px; /* Espaciado entre las tarjetas */
  border-radius: 15px; /* Bordes redondeados más prominentes */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-image-container {
  position: relative;
  overflow: hidden;
  border-top-left-radius: 15px; /* Añadido para bordes redondeados en la esquina superior izquierda de la imagen */
  border-top-right-radius: 15px; /* Añadido para bordes redondeados en la esquina superior derecha de la imagen */
}

.card-img-top {
  max-height: 300px; /* Ajustado el tamaño máximo de la imagen */
  object-fit: cover;
  width: 100%;
  transition: transform 0.3s ease-in-out;
}

.card:hover .card-img-top {
  transform: translateY(-10px);
}

.card-body {
  padding: 15px;
}

.button-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  text-align: center;
}

.btn-primary {
  background-color: #3498db;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>