<script setup lang="ts">

const props = defineProps({
  statistic:{
    type:Array<Statistic>,
  }
});
</script>

<template>
  <div>
    <div class="flex gap-6 py-6 pb-4 pt-2 justify-start items-center">
      <StatisticCard 
      v-for="(statistic, index) in props.statistic" 
      :key="index"
      :icon="statistic.icon"
      :title="statistic.title" 
      :amount="statistic.amount"
      :statistic="statistic.statistic"
      :show-statistic="statistic.showStatistic" 
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
