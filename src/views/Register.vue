<template>
  <div class="register">
    <div class="form">
      <h1 class="title">Registrar Usuario</h1>
      <form @submit.prevent="register">
        <div class="form-group">
          <label class="form-label">Nombre</label>
          <input v-model="form.nombre" class="form-input" required />
        </div>

        <div class="form-group">
          <label class="form-label">Foto</label>
          <input type="file" @change="handleFileUpload" class="form-input" required />
        </div>

        <div class="form-group">
          <label class="form-label">Descripción</label>
          <input v-model="form.descripcion" class="form-input" required />
        </div>

        <div class="form-group">
          <label class="form-label">Edad</label>
          <input v-model="form.edad" class="form-input" required />
        </div>

        <div class="form-actions">
          <button class="form-submit" @click="guardar">Guardar</button>
          <router-link to="/personas" class="form-link cancel-btn">Cancelar</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Nuevo",
  data() {
    return {
      form: {
        nombre: null,
        foto: null,
        descripcion: null,
        edad: null,
      },
    };
  },
  methods: {
    async guardar() {
      try {
        // Convertir la foto a Base64
        const fotoBase64 = await this.convertImageToBase64(this.form.foto);
        
        // Crear el objeto lugar con los datos del formulario
        const lugar = {
          nombre: this.form.nombre,
          foto: fotoBase64,
          descripcion: this.form.descripcion,
          edad: this.form.edad,
        };

        // Enviar la solicitud POST al servidor
        const response = await axios.post("https://localhost:44329/api/Users", lugar, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        console.log(response);
        this.$router.push("/personas");
      } catch (error) {
        console.error(error);
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.form.foto = file;
    },
    convertImageToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    },
  },
};
</script>

<style scoped>
.register {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 200vh;
}

.title {
  text-align: center;
}

.form {
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 124px 130px 124px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente */
}

.form-group {
  margin-bottom: 2rem;
  width: 100%; /* Ajusta el ancho del grupo de formulario */
}

.form-submit,
.cancel-btn {
  width: 100%;
  margin-top: 1rem;
}

.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  padding: 1rem 0;
  cursor: pointer;
}

.cancel-btn {
  background: #ff4a4a;
  text-decoration: none;
  color: white;
  padding: 1rem 0;
  cursor: pointer;
  text-align: center;
  display: inline-block;
}

.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}

.form-label {
  color: white;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  width: 100%; /* Ajusta el ancho del campo de entrada */
}
</style>
