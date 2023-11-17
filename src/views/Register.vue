<template>
    <div class="register">
      <div class="form">
        <h1 class="title">Registrar</h1>
        <form @submit.prevent="register">
          <label class="form-label">Nombre</label>
          <input v-model="form.nombre" class="form-input" required />
  
          <label class="form-label">Foto</label>
          <input v-model="form.foto" class="form-input" required />
  
          <label class="form-label">Descripción</label>
          <input v-model="form.descripcion" class="form-input" required />
  
          <label class="form-label">Edad</label>
          <input v-model="form.edad" class="form-input" required />
  
          <div class="form-actions">
            <button class="form-submit" @click="guardar">Guardar</button>
            <router-link to="/ListaFireBase" class="form-submit mr-4">Cancelar</router-link>
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
      guardar() {
        var usuario = {
          nombre: this.form.nombre,
          foto: this.form.foto,
          descripcion: this.form.descripcion,
          edad: this.form.edad,
        };
  
        axios.post("https://localhost:44329/api/Users", usuario)
          .then((data) => {
            console.log(data);
            this.$router.push("/personas");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .register {
    padding: 2rem;
  }
  
  .title {
    text-align: center;
  }
  
  .form {
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    min-width: 350px;
    max-width: 100%;
    background: rgba(19, 35, 47, 0.9);
    border-radius: 5px;
    padding: 40px;
    box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
  }
  
  .form-label {
    margin-top: 2rem;
    color: white;
    margin-bottom: 0.5rem;
  
 
  }
  
  .form-input {
    padding: 10px 15px;
    background: none;
    background-image: none;
    border: 1px solid white;
    color: white;

  }
  
  .form-submit {
    background: #1ab188;
    border: none;
    color: white;
    margin-top: 3rem;
    padding: 1rem 0;
    cursor: pointer;
  }
  
  .error {
    margin: 1rem 0 0;
    color: #ff4a96;
  }
  </style>
  