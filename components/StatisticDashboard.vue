<script setup lang="ts">

const props = defineProps(['statistic']);
</script>

<template>
  <div>
    <div class="flex gap-6 py-6 pb-4 pt-2 justify-start items-center">
      <StatisticCard 
      v-for="(statistic, index) in props.statistic" 
      :key="index"
      :icons="statistic.cardIcons"
      :title="statistic.cardTitle" 
      :subtitle="statistic.cardSubtitle"
      :statistic="statistic.statistic" 
    />
    </div>
  </div>
</template>

<!-- how to use this component -->
<!-- <script setup lang="ts">
const dataStatistic = ref([
  {
    cardIcons: "image/user.svg",
    cardTitle: "Jumlah Pengguna",
    cardSubtitle: "12.332",
  },
  {
    cardIcons: "image/at-sign.svg",
    cardTitle: "Jumlah Daftar Hari",
    cardSubtitle: "2.234",
    dataStatistic: 100,
  },
  {
    cardIcons: "image/activity.svg",
    cardTitle: "Jumlah pengguna aktif",
    cardSubtitle: "5.122",
    dataStatistic: -40,
  },
]);
</script>

<template>
  <div>
    <h1>preview</h1>
    <StatisticDashboard :statistic="dataStatistic" />
  </div>
</template> -->
