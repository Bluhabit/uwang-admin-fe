<script setup lang="ts">

const props = defineProps({
  data: {
    type: Array<UserCredentialResponse>,
    default: [],
  },
});
function formatDate(date: Date): string {
  return date.toLocaleDateString("id-ID");
}
</script>

<template>
  <div class="flex card p-4 rounded-lg bg-white shadow-md mx-auto">
    <div class="flex">
      <div class="col">
        <img src="image/user-photo.svg" alt="" />
      </div>
      <div class="col ml-3">
        <h1 class="font-bold text-xl mb-1">
          {{ data[0].full_name }}
          <span class="text-gray-500">{{ data[0].id }}</span>
        </h1>
        <p class="text-sm text-gray-500 mb-1">@{{ data[0].username.toLowerCase() }}</p>
        <p class="text-sm text-gray-500">{{  data[0].email }}</p>
      </div>
    </div>
    <div class="flex ml-[auto]">
      <div class="col">
        <p class="mt-5 text-gray-500">Tanggal lahir :</p>
        <p class="text-gray-500">Tanggal daftar :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{ formatDate( data[0].dateOfBirth) }}</p>
        <p>{{ formatDate( data[0].dateOfBirth) }}</p>
      </div>
    </div>
    <div class="flex ml-5">
      <div class="col">
        <p class="mt-5 text-gray-500">Followers :</p>
        <p class="text-gray-500">Postingan :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{  data[0].profile }}</p>
        <p>{{ data[0].profile }}</p>
      </div>
    </div>
    <div class="flex ml-5">
      <div class="col">
        <p class="mt-5 text-gray-500">Negara :</p>
        <p class="text-gray-500">Terakhir Aktif :</p>
      </div>
      <div class="col ml-3">
        <p class="mt-5">{{ data[0].profile }}</p>
        <p>{{ data[0].profile }}</p>
      </div>
    </div>
    <button
      class="bg-green-500 text-white font-bold rounded w-16 h-8 mt-7 ml-5"
    >
      {{data[0].status}}
    </button>
    <button class="border font-medium rounded w-24 h-10 py-2 mt-6 ml-5">
      Ubah status
    </button>
  </div>
</template>
