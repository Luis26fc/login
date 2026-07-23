<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const navLinks = [
  {
    id: 1,
    title: "Inicio",
    path: "/",
    icon: "fi fi-sr-home",
  },
  {
    id: 2,
    title: "Pacientes",
    path: "/pacientes",
    icon: "fi fi-sr-users-alt",
  },
  {
    id: 3,
    title: "Citas",
    path: "/citas",
    icon: "fi fi-sr-calendar-clock",
  },
  {
    id: 4,
    title: "Historial Clínico",
    path: "/historial",
    icon: "fi fi-sr-document",
  },
];
</script>

<template>
  <aside
    class="self-stretch w-14 flex flex-col items-center justify-between py-4 shrink-0"
  >
    <!-- Logo arriba -->
    <div class="mb-4 flex flex-col items-center gap-5">
      <div
        class="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-sm cursor-pointer"
      >
        <!-- Aquí puedes poner tu logo o icono de iniciales -->
        <span class="text-white font-bold">JD</span>
      </div>

      <!-- Nav principal -->
      <ul
        class="flex flex-col items-center gap-3 bg-white rounded-full px-2 py-3 shadow-sm"
      >
        <li v-for="link in navLinks" :key="link.id">
          <router-link
            :to="link.path"
            :title="link.title"
            class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 group relative"
            :class="
              route.path === link.path ? 'bg-[#1a1a1a]' : 'hover:bg-gray-100'
            "
          >
            <i
              :class="[
                link.icon,
                'text-lg flex items-center transition-colors duration-200',
                route.path === link.path
                  ? 'text-[#f5c842]'
                  : 'text-gray-700 group-hover:text-black',
              ]"
            ></i>

            <!-- Tooltip -->
            <span
              class="absolute left-12 bg-[#1a1a1a] text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-50"
            >
              {{ link.title }}
            </span>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Logout abajo -->
    <ul class="flex flex-col items-center bg-white rounded-full p-2 shadow-sm">
      <li>
        <router-link
          to="/login"
          title="Cerrar sesión"
          class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 group relative hover:bg-gray-100"
        >
          <i
            class="fi fi-br-exit text-lg text-gray-400 group-hover:text-red-400 transition-colors duration-200 flex items-center"
          ></i>
          <span
            class="absolute left-12 bg-[#1a1a1a] text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md z-50"
          >
            Cerrar sesión
          </span>
        </router-link>
      </li>
    </ul>
  </aside>
</template>
