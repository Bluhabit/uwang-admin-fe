<script setup lang="ts">
const props = defineProps([
  "icons",
  "title",
  "subtitle",
  "statistic",
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
        <div v-show="statistic" class="flex gap-1 items-center">
          <img
            :src="
              statistic < 0
                ? 'image/trending-down.svg'
                : 'image/trending-up.svg'
            "
            alt=""
          />
          <p
            :class="
              statistic < 0
                ? 'text-state-error-main'
                : 'text-state-success-main'
            "
          >
            {{ statistic < 0 ? "" : "+" }}{{ props.statistic }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
