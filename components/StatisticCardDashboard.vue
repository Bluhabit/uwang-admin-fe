<script setup lang="ts">
const props = defineProps(['cardIcons', 'cardTitle','cardSubtitle']);
</script>

<template>
  <div class="flex gap-4 p-6 items-center">
    <div class="bg-state-primary-surface rounded-full p-4 w-16 h-16">
      <img @src="props.cardIcons" alt="">
    </div>
    <div class="flex flex-col justify-center gap-2">
      <p class="font-normal text-base">{{cardTitle}}</p>
      <h1 class="font-semibold text-2xl">{{ cardSubtitle }}</h1>
    </div>
  </div>
</template>