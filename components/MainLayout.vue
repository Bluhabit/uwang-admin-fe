<script setup lang="ts">
const isSidebarOpen = ref(true);

const sidebarContainerClasses = computed(() => ({
  'w-64': isSidebarOpen.value, 
  'w-12': !isSidebarOpen.value,
}));

// const contentContainerClasses = computed(() => ({
//   'w-full': isSidebarOpen.value,
//   // 'ml-64': isSidebarOpen.value,
//   'w-full': !isSidebarOpen.value,
// }));
function toogleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen">
    <div :class="sidebarContainerClasses">
      <Sidebar @toggle-sidebar="toogleSidebar" :is-sidebar-open="isSidebarOpen" />
    </div>

    <div class="w-full" >
        <main class="overflow-y-auto">
          <slot name="content"></slot>
        </main>
    </div>
  </div>
</template>
