<template>
  <!-- Contenedor con el fondo azul degradado del Login -->
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E40AF] via-[#1D4ED8] to-[#93C5FD] p-4">
    
    <div class="registro-container">
      <form @submit.prevent="handleRegistro" class="formulario">
        <h2>Registro de Usuario</h2>

        <!-- Usuario -->
        <div class="input-group">
          <label>Usuario</label>
          <div class="input-wrapper">
            <input type="text" v-model="usuario" placeholder="escribe tu nombre de usuario" required />
          </div>
        </div>

        <!-- Cédula -->
        <div class="input-group">
          <label>Cédula</label>
          <div class="input-wrapper">
            <input type="text" v-model="cedula" placeholder="Ej: 12345678" required />
          </div>
        </div>

        <!-- Contraseña -->
        <div class="input-group">
          <label>Contraseña</label>
          <div class="input-wrapper">
            <input :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Contraseña" required />
            <button type="button" @click="showPassword = !showPassword" class="icon-btn">
              {{ showPassword ? '👁️' : '🔒' }}
            </button>
          </div>
        </div>

        <!-- Confirmar Contraseña -->
        <div class="input-group">
          <label>Confirmar contraseña</label>
          <div class="input-wrapper">
            <input :type="showConfirm ? 'text' : 'password'" v-model="confirmPassword" placeholder="Repite tu contraseña" required />
            <button type="button" @click="showConfirm = !showConfirm" class="icon-btn">
              {{ showConfirm ? '👁️' : '🔒' }}
            </button>
          </div>
        </div>

        <button type="submit" class="submit-btn">Registrarse</button>

        <!-- Enlace integrado para regresar al Login -->
        <router-link to="/login" class="btn-back">
          Ya tengo cuenta, Iniciar Sesión
        </router-link>
      </form>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const usuario = ref('');
const cedula = ref('');
const password = ref('');
const confirmPassword = ref('');

const showPassword = ref(false);
const showConfirm = ref(false);

// Lógica de registro con validación de contraseña
const handleRegistro = () => {
  if (password.value !== confirmPassword.value) {
    alert('⚠️ Las contraseñas no coinciden. Inténtalo de nuevo.');
    return;
  }

  alert(`¡Usuario ${usuario.value} registrado con éxito! Ahora puedes iniciar sesión.`);
  router.push('/login');
};
</script>

<style scoped>
.registro-container {
  width: 100%;
  max-width: 400px;
}

.formulario {
  background: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  color: #333;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
  font-size: 22px;
  font-weight: bold;
}

.input-group { 
  margin-bottom: 20px; 
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
}

.input-wrapper {
  display: flex;
  background: white;
  border: 1px solid #ccc;
  border-radius: 6px;
  overflow: hidden;
}

input {
  flex: 1;
  padding: 12px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
}

.icon-btn {
  background: none;
  border: none;
  padding: 0 12px;
  cursor: pointer;
  border-left: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  transition: background 0.2s;
}

.submit-btn:hover {
  background-color: #1a252f;
}

.btn-back {
  display: block;
  text-align: center;
  width: 100%;
  margin-top: 15px;
  font-size: 13px;
  color: #1D4ED8;
  text-decoration: none;
  font-weight: 600;
}

.btn-back:hover {
  text-decoration: underline;
}
</style>