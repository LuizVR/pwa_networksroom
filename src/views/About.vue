<template>
  <div>
    <table class="table table-hover table-bordered">
      <thead>
        <tr class="table-active">
          <th>Nombre</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in listaUsuarios" :key="usuario.roomId">
          <td>{{ usuario.direccion }}</td>
        </tr>
      </tbody>
    </table>
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
        const direcciona = "https://localhost:44329/api/Room";
        const response = await axios.get(direcciona);
        listaUsuarios.value = response.data;
      } catch (error) {
        console.error(error);
      }
    });

    const redirectToRegister = () => {
      // Utilizamos router para acceder al método push del router
      router.push("/registerRoom");
    };

    return { listaUsuarios, redirectToRegister };
  },
};
</script>

<style>
/* Estilos para la tabla */
.table {
  border-collapse: collapse;
  width: 100%;
}

.table td,
.table th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.table th {
  background-color: #f2f2f2;
}

/* Estilos para la cabecera de la tabla */
.table-active th {
  background-color: #007bff;
  color: #fff;
}

/* Estilos para la fila resaltada */
.table tbody tr:hover {
  background-color: #f5f5f5;
}

/* Estilos para el botón */
.button-container {
  text-align: center;
  margin-top: 20px;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
