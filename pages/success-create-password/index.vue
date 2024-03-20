<script setup lang="ts">
 const fect = () => {
    console.log("success");
 }

</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen py-12">
    <div class="w-full max-w-md px-8 py-4 bg-white shadow-md rounded-lg">
      <h2 class="text-center text-2xl font-bold">Password berhasil dibuat</h2>
      <p class="text-center mt-4">Silahkan login menggunakan password yang telah dibuat.</p>
      <form>
        <div class="mt-8">
          <label for="email" class="block mb-2 text-sm font-medium">Email</label>
          <input type="email" id="email" class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Masukkan alamat email">
        </div>
        <div class="mt-6">
          <label for="password" class="block mb-2 text-sm font-medium">Password</label>
          <input type="password" id="password" class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Masukkan password">
        </div>
        <button class="mt-8 w-full px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md shadow-sm hover:bg-primary-700">Login</button>
      </form>
    </div>
  </div>
</template>