<script setup>
// Definimos el parametro que se le enviara a la tabla
defineProps({
  patients: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
<template>
  <div class="bg-white rounded-3xl shadow-sm w-full p-5">
    <div class="flex justify-between px-3.5">
      <h2 class="font-semibold text-2xl">Pacientes Recientes</h2>
      <button
        class="text-gray-400 font-medium italic hover:text-gray-600 transition-colors"
      >
        Ver todos
      </button>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            <th class="text-left text-sm font-semibold text-gray-500 px-4 py-3">
              Paciente
            </th>
            <th class="text-left text-sm font-semibold text-gray-500 px-4 py-3">
              Edad
            </th>
            <th class="text-left text-sm font-semibold text-gray-500 px-4 py-3">
              Tratamiento
            </th>
            <th class="text-left text-sm font-semibold text-gray-500 px-4 py-3">
              Fecha de cita
            </th>
            <th class="text-left text-sm font-semibold text-gray-500 px-4 py-3">
              Estado
            </th>
            <th
              class="text-left text-sm font-semibold text-gray-500 px-4 py-3"
            ></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="patient in patients"
            :key="patient.id"
            class="hover:bg-gray-100 transition rounded-x"
          >
            <td
              class="px-4 py-4 font-medium text-gray-800 border-b border-gray-200"
            >
              {{ patient.name }}
            </td>

            <td class="px-4 py-4 text-gray-600 border-b border-gray-200">
              {{ patient.age }}
            </td>

            <td class="px-4 py-4 text-gray-600 border-b border-gray-200">
              {{ patient.service }}
            </td>

            <td class="px-4 py-4 text-gray-600 border-b border-gray-200">
              {{ patient.date }}
            </td>

            <td class="px-4 py-4 border-b border-gray-200">
              <span
                class="px-3 py-1 text-xs font-semibold rounded-full"
                :class="{
                  'bg-yellow-100 text-yellow-700':
                    patient.state === 'Completado',
                  'bg-gray-200 text-gray-600': patient.state === 'Agendado',
                  'bg-red-100 text-red-700': patient.state === 'Cancelado',
                }"
              >
                {{ patient.state }}
              </span>
            </td>

            <td class="px-4 py-4 border-b border-gray-200">
              <button
                class="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-white transition-colors cursor-pointer hover:bg-[#1a1a1a]"
              >
                <i class="fi fi-ss-pencil"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
