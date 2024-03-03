<script setup lang="ts">
const isSidebarOpen = ref(true);

const sidebarContainerClasses = computed(() => ({
  'w-64': isSidebarOpen.value, 
  'w-0': !isSidebarOpen.value,
}));

const contentContainerClasses = computed(() => ({
  'flex-grow': isSidebarOpen.value,
  // 'ml-64': isSidebarOpen.value,
  'ml-0': !isSidebarOpen.value,
}));
</script>

<template>
  <div class="flex h-screen">
    <div :class="sidebarContainerClasses">
      <slot name="sidebar"></slot>
    </div>

    <div class="flex-1">
      <div :class="contentContainerClasses">
        <main class="overflow-y-auto">
          <slot name="content"></slot>
        </main>
      </div>
    </div>
  </div>
</template>
