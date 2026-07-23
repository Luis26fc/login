<script setup>
defineProps({
  title: String,
  icon: String,
  iconColor: String,
});
</script>

<template>
  <div
    class="bg-white rounded-3xl shadow-sm w-full p-5 flex flex-col justify-between gap-3"
  >
    <div class="flex justify-between">
      <h3 class="text-lg font-medium">{{ title }}</h3>
      <i :class="[icon, iconColor || 'text-gray-500']""></i>
    </div>

    <!-- El contenido variable va aquí -->
    <div class="flex flex-col gap-2">
      <slot />
    </div>

    <div>
      <button
        class="bg-[#1a1a1a] hover:bg-[#333] text-white rounded-full w-full px-4 py-3 text-sm font-medium transition-colors duration-200 shadow-sm"
      >
        Editar
      </button>
    </div>
  </div>
</template>
