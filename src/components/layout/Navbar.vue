<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header class="mb-5">
    <div class="flex justify-between items-center">
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">{{ title }}</h1>
        <p class="text-sm text-gray-500">{{ description }}</p>
      </div>

      <div class="flex items-center gap-3">
        <!-- Input -->
        <div class="relative">
          <input
            type="search"
            class="bg-white border border-transparent focus:border-[#1a1a1a] rounded-full pl-3 py-2.5 text-md outline-none transition-all duration-200 shadow-sm w-56 placeholder:text-gray-400"
            placeholder="Buscar..."
          />
        </div>

        <!-- Botón -->
        <button
          class="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white rounded-full px-4 py-3 text-sm font-medium transition-colors duration-200 shadow-sm"
        >
          <i class="fi fi-sr-plus text-sm flex items-center"></i>
          Nueva Cita
        </button>
      </div>
    </div>
  </header>
</template>
