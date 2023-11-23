<template>
  <div>
    <div class="card-container">
      <div v-for="usuario in listaUsuarios" :key="usuario.roomId" class="card">
        <img :src="getImageSource(usuario.foto)" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ usuario.nombre }}</h5>
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
        const direcciona = "https://localhost:44329/api/Users";
        const response = await axios.get(direcciona);
        listaUsuarios.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const redirectToRegister = () => {
      router.push("/register");
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

    return { listaUsuarios, redirectToRegister, getImageSource };
  },
};
</script>

<style>
/* Estilos para las tarjetas */
.card-container {
  display: flex;
  flex-wrap: wrap;
}

.card {
  width: 18rem;
  margin: 10px;
}

.card-img-top {
  max-height: 200px;
  object-fit: cover;
}

/* Resto de tus estilos ... */
</style>
