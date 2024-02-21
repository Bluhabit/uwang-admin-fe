<script setup lang="ts">

const props = defineProps(['dataStatistic']);
</script>

<template>
  <div>
    <div class="flex gap-6 py-6 pb-4 pt-2 justify-start items-center">
      <StatisticCard 
      v-for="(statistic, index) in props.dataStatistic" 
      :key="index"
      :card-icons="statistic.cardIcons"
      :card-title="statistic.cardTitle" 
      :card-subtitle="statistic.cardSubtitle"
      :data-statistic="statistic.dataStatistic" 
    />
    </div>
  </div>
</template>