<script setup lang="ts">
const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date().toLocaleDateString('id-ID', options);
});
</script>

<template>
    <header class="bg-white px-6 pt-10 pb-6">
      <div class="container mx-auto flex justify-between items-center py-4">
        <div class="flex flex-col items-start">
          <h1 class="text-xl font-bold ">Dashboard</h1>
          <p class="text-gray-600 ">{{ formattedDate }}</p>
        </div>
        <div class="flex items-center">
          <div class="flex items-center bg-white shadow-md rounded-full p-2 cursor-pointer ">
            <a href="#">
              <img src="/image/bell.svg" alt="notifikasi">
            </a>
          </div>
        </div>
      </div>
    </header>
</template>
