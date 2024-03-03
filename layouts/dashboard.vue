<script setup lang="ts">

</script>

<template>
  <MainLayout>
    <template #sidebar>
      <Sidebar/>
    </template>
    <template #content>
      <slot/>
    </template>
  </MainLayout>
</template>

<style scoped>

</style>