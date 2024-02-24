<script setup lang="ts">
const isSidebarOpen = ref(true);

const sidebarContainerClasses = computed(() => ({
  'w-64': isSidebarOpen.value, 
  'w-0': !isSidebarOpen.value, 
}));

const contentContainerClasses = computed(() => ({
  'w-full': isSidebarOpen.value, 
  'ml-0': !isSidebarOpen.value,
}));
</script>

<template>
  <div class="flex h-screen">
    <div :class="sidebarContainerClasses">
      <!-- <Sidebar/> -->
    </div>

    <div class="flex-1">
      <div :class="contentContainerClasses">
        <!-- <HeaderPage/> -->
        <main class="overflow-y-auto">
          <slot>
            <!-- <StatisticDashboard :statistic="dataStatistic" />
            <h1 class="text-center mt-10 text-xl">Waiting Data table from Azki</h1> -->
          </slot>
        </main>
      </div>
    </div>
  </div>
</template>
  