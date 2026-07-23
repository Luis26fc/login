<script setup>
defineProps({
  treatments: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>

<template>
  <div class="flex flex-col gap-3 w-full">
    <div
      v-for="treatment in treatments"
      :key="treatment.name"
      class="flex flex-col gap-1"
    >
      <div class="flex justify-between items-center">
        <span class="text-sm text-gray-700 font-medium">{{
          treatment.name
        }}</span>
        <span class="text-sm text-gray-500">{{ treatment.percentage }}%</span>
      </div>
      <div class="w-full bg-gray-100 rounded-full h-1.5">
        <div
          class="h-1.5 rounded-full bg-[#f5c842] transition-all duration-500"
          :style="{ width: treatment.percentage + '%' }"
        ></div>
      </div>
    </div>
  </div>
</template>
