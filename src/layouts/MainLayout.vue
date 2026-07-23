<script setup>
import { RouterView } from "vue-router";
import Sidebar from "../components/layout/Sidebar.vue";
import Navbar from "../components/layout/Navbar.vue";
</script>

<template>
  <div class="flex h-screen bg-[#F4F1EC] overflow-hidden">
    <header class="flex items-start py-5 pl-5">
      <Sidebar />
    </header>
    <main class="flex-1 flex flex-col py-7 pl-5 pr-5 overflow-y-auto pb-7">
      <Navbar
        title="Hola, Maury!!!"
        description="Gestiona tus citas y pacientes"
      />
      <RouterView />
    </main>
  </div>
</template>
