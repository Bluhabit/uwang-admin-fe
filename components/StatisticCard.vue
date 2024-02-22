<script setup lang="ts">
const props = defineProps([
  "icons",
  "title",
  "subtitle",
  "dataStatistic",
]);
</script>

<template>
  <div class="flex font-inter gap-4 p-6 items-center">
    <div class="bg-state-primary-surface rounded-full p-4 w-16 h-16">
      <img :src="props.icons" alt="" />
    </div>
    <div class="flex flex-col justify-center gap-2">
      <p class="font-normal text-base">{{ title }}</p>
      <div class="flex gap-2">
        <h1 class="font-semibold text-2xl">{{ subtitle }}</h1>
        <div v-show="dataStatistic" class="flex gap-1 items-center">
          <img
            :src="
              dataStatistic < 0
                ? 'image/trending-down.svg'
                : 'image/trending-up.svg'
            "
            alt=""
          />
          <p
            :class="
              dataStatistic < 0
                ? 'text-state-error-main'
                : 'text-state-success-main'
            "
          >
            {{ dataStatistic < 0 ? "" : "+" }}{{ props.dataStatistic }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
