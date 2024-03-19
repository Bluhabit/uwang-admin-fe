<script setup lang="ts">

</script>

<template>
    <div class="max-w-md mx-auto p-4">
        <div class="flex items-center bg-white border border-[#D0D5DD] px-4 py-3 rounded-2xl relative" role="alert">
            <div class="flex items-center">
                <img src="image/check-icon.svg" alt="check" class="mr-2">
                <span>Akses baru berhasil ditambahkan</span>
            </div>
            <span class="absolute top-2 bottom-0 right-0 p-1 my-auto">
                <button type="button"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 p-1 rounded-full hover:bg-red-200">
                    <img src="image/x.svg" alt="close">
                </button>
            </span>
        </div>
    </div>
</template>