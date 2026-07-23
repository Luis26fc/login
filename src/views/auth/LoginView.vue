<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1E40AF] via-[#1D4ED8] to-[#93C5FD] p-4">
    
    <div class="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-md border border-white/20">
      
      <div class="text-center mb-6 flex flex-col items-center">
        <div class="w-20 h-20 mb-3 flex items-center justify-center bg-[#1D4ED8]/10 rounded-full">
          <svg class="w-10 h-10 text-[#1D4ED8]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 100 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-[#1E3A8A]">Agenda Digital</h1>
        <p class="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Fundación Tejiendo Redes</p>
      </div>

      <div 
        v-if="errorMessage" 
        class="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 text-xs rounded-lg text-center font-medium animate-pulse"
      >
        ⚠️ {{ errorMessage }}
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        
        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Usuario / Correo</label>
          <input 
            v-model="form.username"
            type="text" 
            required
            placeholder="Ingrese su usuario"
            class="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:bg-white transition-all"
          />
        </div>

        <div>
          <label class="block text-xs font-semibold text-gray-600 mb-1 uppercase tracking-wider">Contraseña</label>
          <!-- Contenedor alineado para el input y el botón del ojito -->
          <div class="relative flex items-center bg-gray-50 border border-gray-200 rounded-lg focus-within:ring-2 focus-within:ring-[#1D4ED8] focus-within:bg-white transition-all">
            <input 
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'" 
              required
              placeholder="••••••••"
              class="w-full px-4 py-2.5 bg-transparent text-sm text-gray-800 focus:outline-none"
            />
            <button 
              type="button" 
              @click="showPassword = !showPassword" 
              class="px-3 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            >
              {{ showPassword ? '👁️' : '🔒' }}
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-xs text-gray-600">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              v-model="form.rememberMe"
              type="checkbox" 
              class="rounded text-[#1D4ED8] focus:ring-[#1D4ED8] border-gray-300"
            />
            <span>Recordarme</span>
          </label>
          <a href="#" class="text-[#1D4ED8] hover:underline font-medium">¿Olvidó su contraseña?</a>
        </div>

        <button 
          type="submit"
          class="w-full py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
        >
          INICIAR SESIÓN
        </button>

      </form>

      <!-- SECCIÓN VINCULADA: Enlace directo al Registro -->
      <div class="mt-5 text-center text-sm text-gray-600">
        ¿No tienes un usuario? 
        <router-link to="/registro" class="text-[#1D4ED8] font-bold hover:underline ml-1">
          Crear una cuenta
        </router-link>
      </div>

      <div class="mt-6 pt-4 border-t border-gray-100 text-center">
        <p class="text-[11px] text-gray-400">
          🔒 Acceso restringido únicamente a personal autorizado.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  username: '',
  password: '',
  rememberMe: false
});

const errorMessage = ref('');
// Variable reactiva para controlar la visibilidad de la contraseña
const showPassword = ref(false);

const handleLogin = () => {
  errorMessage.value = '';

  if (form.username === 'admin' && form.password === '1234') {
    router.push('/');
  } else {
    errorMessage.value = 'Usuario o contraseña incorrectos. Intente de nuevo.';
  }
};
</script>