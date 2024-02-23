<script setup lang="ts">
const dataStatistic = ref<Array<Statistic>>([
  {
    icon: "image/user.svg",
    title: "Jumlah Pengguna",
    amount: 12.332,
    showStatistic:false,
  },
  {
    icon: "image/at-sign.svg",
    title: "Jumlah Daftar Hari",
    amount: 2.234,
    statistic: 100,
    showStatistic:true,
  },
  {
    icon: "image/activity.svg",
    title: "Jumlah pengguna aktif",
    amount: 5.122,
    statistic: -40,
    showStatistic:true,
  },
]);
</script>

<template>
  <div class="p-6">
    <h1 class="mb-5">preview</h1>
    <ButtonTable text="Add Filter">
      <template #leadingIcon>
        <img src="image/filter.svg" alt="">
      </template>

    </ButtonTable>
    <StatisticDashboard :statistic="dataStatistic" />
  </div>
</template> 