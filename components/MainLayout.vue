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
            <DataTable :items="items" :headers="headers">
              <template #actionHeader>
                <div class="w-full flex justify-between">
                  <div class="flex gap-2">
                    <ButtonTable text="Add Filter">
                      <template #leadingIcon>
                        <img src="image/filter.svg" alt="" />
                      </template>
                    </ButtonTable>
                    <ButtonTable text="Sort">
                      <template #leadingIcon>
                        <img src="image/arrow-up.svg" alt="" />
                      </template>
                      <template #trailingIcon>
                        <img src="image/chevron-down.svg" alt="" />
                      </template>
                    </ButtonTable>
                  </div>
                  <ButtonTable text="Add Filter">
                    <template #leadingIcon>
                      <img src="image/download.svg" alt="" />
                    </template>
                  </ButtonTable>
                </div>
              </template>
              <template #status_user="{ item }">
                <p class="bg-state-success-main text-white rounded-full px-2 py-1 w-fit">{{ item.status_user }}</p>
              </template>
            </DataTable> -->
          </slot>
        </main>
      </div>
    </div>
  </div>
</template>
  