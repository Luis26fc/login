<script setup>
import { ref, computed } from "vue";

const today = new Date();
const currentYear = ref(today.getFullYear());
const currentMonth = ref(today.getMonth());

const showPicker = ref(false);
const pickerYear = ref(today.getFullYear());

const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const monthShort = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

const currentMonthName = computed(() => monthNames[currentMonth.value]);

const doneDays = ref([1]);
const scheduledDays = ref([14, 17, 19, 23, 28]);

function toggleDay(day) {
  if (doneDays.value.includes(day)) {
    doneDays.value = doneDays.value.filter((d) => d !== day);
    scheduledDays.value.push(day);
  } else if (scheduledDays.value.includes(day)) {
    scheduledDays.value = scheduledDays.value.filter((d) => d !== day);
  } else {
    doneDays.value.push(day);
  }
}

const calendarCells = computed(() => {
  const year = currentYear.value;
  const month = currentMonth.value;
  const firstDay = new Date(year, month, 1).getDay();
  const startOffset = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();
  const cells = [];

  for (let i = startOffset - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isCurrentMonth: true });
  }
  const remaining = (7 - (cells.length % 7)) % 7;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, isCurrentMonth: false });
  }
  return cells;
});

function getDayClass(day, isCurrentMonth) {
  if (!isCurrentMonth)
    return "text-zinc-600 cursor-default pointer-events-none";
  const isToday =
    day === today.getDate() &&
    currentMonth.value === today.getMonth() &&
    currentYear.value === today.getFullYear();
  const isDone = doneDays.value.includes(day);
  const isScheduled = scheduledDays.value.includes(day);
  if (isDone)
    return "bg-amber-400 text-zinc-900 hover:bg-amber-300 cursor-pointer";
  if (isScheduled)
    return "bg-zinc-700 text-zinc-300 hover:bg-zinc-600 cursor-pointer";
  if (isToday)
    return "border border-zinc-500 text-white bg-transparent hover:bg-zinc-800 cursor-pointer";
  return "text-zinc-300 hover:bg-zinc-800 cursor-pointer";
}

function selectMonth(monthIndex) {
  currentMonth.value = monthIndex;
  currentYear.value = pickerYear.value;
  showPicker.value = false;
}

function prevPickerYear() {
  pickerYear.value--;
}

function nextPickerYear() {
  pickerYear.value++;
}

function togglePicker() {
  pickerYear.value = currentYear.value;
  showPicker.value = !showPicker.value;
}
</script>

<template>
  <div class="bg-[#1a1a1a] rounded-3xl p-6 w-2xl select-none shadow-2xl">
    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-white text-xl font-semibold">Calendario de citas</h2>

      <!-- Month/Year button + dropdown -->
      <div class="relative">
        <button
          @click="togglePicker"
          class="flex items-center gap-1 text-zinc-400 text-sm hover:text-white transition-colors"
        >
          {{ currentMonthName }} {{ currentYear }}
          <svg
            class="w-4 h-4 transition-transform duration-200"
            :class="showPicker ? 'rotate-180' : ''"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <!-- Month/Year Picker Dropdown -->
        <transition
          enter-active-class="transition duration-150 ease-out"
          enter-from-class="opacity-0 scale-95 -translate-y-1"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 -translate-y-1"
        >
          <div
            v-if="showPicker"
            class="absolute right-0 top-8 z-50 bg-zinc-800 border border-zinc-700 rounded-2xl p-4 w-56 shadow-xl origin-top-right"
          >
            <!-- Year navigation -->
            <div class="flex items-center justify-between mb-3">
              <button
                @click="prevPickerYear"
                class="w-7 h-7 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <span class="text-white text-sm font-semibold">{{
                pickerYear
              }}</span>
              <button
                @click="nextPickerYear"
                class="w-7 h-7 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <!-- Month grid -->
            <div class="grid grid-cols-3 gap-1.5">
              <button
                v-for="(name, idx) in monthShort"
                :key="idx"
                @click="selectMonth(idx)"
                :class="[
                  'py-1.5 rounded-xl text-xs font-medium transition-colors',
                  currentMonth === idx && currentYear === pickerYear
                    ? 'bg-amber-400 text-zinc-900'
                    : idx === today.getMonth() &&
                        pickerYear === today.getFullYear()
                      ? 'border border-zinc-500 text-white'
                      : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                ]"
              >
                {{ name }}
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <!-- Day labels -->
    <div class="grid grid-cols-7 mb-2">
      <div
        v-for="day in dayLabels"
        :key="day"
        class="text-center text-xs text-zinc-500 font-medium py-1"
      >
        {{ day }}
      </div>
    </div>

    <!-- Calendar grid -->
    <div class="grid grid-cols-7 gap-y-1">
      <div
        v-for="(cell, index) in calendarCells"
        :key="index"
        class="flex items-center justify-center"
      >
        <button
          v-if="cell.day"
          @click="toggleDay(cell.day)"
          :class="getDayClass(cell.day, cell.isCurrentMonth)"
          class="w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center transition-all duration-150 focus:outline-none"
        >
          {{ cell.day }}
        </button>
        <span v-else class="w-9 h-9" />
      </div>
    </div>

    <!-- Legend -->
    <div class="flex items-center gap-4 mt-5 pt-4 border-t border-zinc-800">
      <div class="flex items-center gap-1.5">
        <span
          class="w-3 h-3 rounded-full border border-zinc-500 bg-transparent inline-block"
        />
        <span class="text-zinc-500 text-xs">Día actual</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded-full bg-amber-400 inline-block" />
        <span class="text-zinc-500 text-xs">Consulta terminada</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-3 h-3 rounded-full bg-zinc-600 inline-block" />
        <span class="text-zinc-500 text-xs">Consulta programada</span>
      </div>
    </div>
  </div>
</template>
