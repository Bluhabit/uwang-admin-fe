<script setup lang="ts">
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
    <StatisticDashboard :data-statistic="dataStatistic" />
  </div>
</template>