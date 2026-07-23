<script setup>
import { ref } from "vue";
import DatePicker from "../../components/common/DatePicker.vue";
import PatientsTable from "../../components/common/PatientsTable.vue";
import MetricsCard from "../../components/common/MetricsCard.vue";
import TreatmentStats from "../../components/common/TreatmentStats.vue";

const patients = ref([
  {
    name: "Maury Paredes",
    age: "25",
    service: "Botox",
    date: "2026-06-18",
    state: "Agendado",
  },
  {
    name: "Jesus Rivas",
    age: "25",
    service: "Depilacion Laser",
    date: "2026-06-16",
    state: "Completado",
  },
  {
    name: "Paula Hernandez",
    age: "25",
    service: "Acido Hialuronico",
    date: "2026-06-15",
    state: "Cancelado",
  },
  {
    name: "Pedro Melendez",
    age: "25",
    service: "Rellenos Faciales",
    date: "2026-06-11",
    state: "Cancelado",
  },
]);

const treatments = ref([
  { name: "Botox", percentage: 30 },
  { name: "Acido Hialuronico", percentage: 25 },
  { name: "Depilacion Laser", percentage: 20 },
]);

const incomeChange = ref(12); // positivo o negativo según la BD
function getPercentageClass(percentage) {
  return percentage >= 0 ? "text-green-600" : "text-red-600";
}
</script>
<template>
  <div class="flex flex-col gap-5">
    <div class="flex gap-5">
      <DatePicker />
      <PatientsTable :patients="patients" />
    </div>

    <div class="grid grid-cols-3 gap-5">
      <MetricsCard
        title="Tratamientos Frecuentes"
        icon="fi fi-sr-chart-pie-alt"
        iconColor="text-[#f5c842]"
      >
        <TreatmentStats :treatments="treatments" />
      </MetricsCard>
      <MetricsCard
        title="Ingresos del Dia"
        icon="fi fi-sr-sack-dollar"
        iconColor="text-green-700"
      >
        <div>
          <h2 class="text-3xl font-semibold">2.406,20$</h2>
          <p class="text-sm text-gray-600">
            <span
              class="font-semibold"
              :class="getPercentageClass(incomeChange)"
            >
              {{ incomeChange > 0 ? "+" : "" }}{{ incomeChange }}%
            </span>
            más que ayer
          </p>
        </div>
      </MetricsCard>
      <MetricsCard
        title="Proximos Insumos"
        icon="fi fi-sr-boxes"
        iconColor="text-[#f5c842]"
      >
        <div>asdasdasda</div>
      </MetricsCard>
    </div>
  </div>
</template>
